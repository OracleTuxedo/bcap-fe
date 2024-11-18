import { ClassConstructor } from "class-transformer";
import { FieldParam, Meta } from "../decorator";
import {
  globalSeq,
  getMicroTime,
  makeOriginalGid,
  getPacketSize,
} from "./Util";
import moment from "moment";
import { TelegramHeader, TelegramIn, TelegramInData, TelegramUserDataIn } from "../vo";

export function makeTelegramUserDataIn({
  tuxedoCode,
  screenId,
}: {
  tuxedoCode: string;
  screenId: string;
}): TelegramUserDataIn {
  const userDataInput: TelegramUserDataIn = new TelegramUserDataIn();
  userDataInput.tx_code = tuxedoCode;
  userDataInput.scrn_id = screenId;
  userDataInput.client_ip_no = "172.16.20.11"; /// TODO get client IP browser / server
  userDataInput.op_id = "1787130271"; /// TODO User ID from Local Storage  (authentication)
  userDataInput.sync_type = "A";
  userDataInput.rspn_svc_code = "";
  userDataInput.async_rspn_yn = "0";
  userDataInput.ttl_use_flag = 0;
  userDataInput.lang_type = "EN"; /// TODO Locale EN / ID
  return userDataInput;
}

export function makeTelegramIn<I>({
  typeClass,
  data,
  userDataInput,
}: {
  typeClass: ClassConstructor<I>;
  data: I;
  userDataInput: TelegramUserDataIn;
}): TelegramIn<I> | null {
  const telegramHeader: TelegramHeader | null = makeTelegramHeader({
    userDataInput: userDataInput,
  });
  const telegramInData: TelegramInData<I> | null = makeTelegramInData({
    typeClass: typeClass,
    data: data,
  });

  if (!telegramHeader || !telegramInData) return null;

  const telegramIn: TelegramIn<I> = new TelegramIn(typeClass);
  telegramIn.header = telegramHeader;
  telegramIn.data = telegramInData;

  const countTelegramIn = getPacketSize(telegramIn);

  if (!countTelegramIn) return null;

  telegramIn.header.msg_len = countTelegramIn - 8;

  return telegramIn;
}

function makeTelegramInData<I>({
  typeClass,
  data,
}: {
  typeClass: ClassConstructor<I>;
  data: I;
}): TelegramInData<I> | null {
  const telegramInData: TelegramInData<I> = new TelegramInData<I>(typeClass);
  telegramInData.data_type = "D";
  telegramInData.data = data;
  const count = getPacketSize(telegramInData);
  if (!count) return null;

  telegramInData.length = count - 9; // TODO Buat apa ada angka 9 ?
  return telegramInData;
}

function makeTelegramHeader({
  userDataInput,
}: {
  userDataInput: TelegramUserDataIn;
}): TelegramHeader | null {
  const header: TelegramHeader = new TelegramHeader();

  const fields: Array<FieldParam> | undefined = Reflect.getMetadata(
    Meta.FIELD,
    header
  );
  if (!fields) return null;

  header.gid_sysname = "MTI"; // TODO InetAddress.getLocalHost().getHostName();
  header.gid_yyyyymmdd = moment().format("YYYYMMDD");
  header.gid_hhmmss = moment().format("HHmmss");
  header.gid_seq = globalSeq();
  header.gid_pid = "00000"; // TODO System.getProperty("wlinstance");
  header.gid_stat = "00";
  header.tx_code = userDataInput.tx_code;
  header.inst_no = "MTI";
  header.send_rspn_type = "S";
  header.rspn_svc_code = userDataInput.rspn_svc_code;
  header.ori_global_id = makeOriginalGid(header, fields);
  header.ori_send_time = getMicroTime();
  header.chnl_id = "WEB"; // TODO System.getProperty("chnl_id");
  header.client_ip_no = userDataInput.client_ip_no;
  header.client_mac = userDataInput.client_mac;
  header.scrn_id = userDataInput.scrn_id;
  header.scrn_lock_yn = "N";
  header.op_id = userDataInput.op_id;
  header.xa_begin_flag = 0;
  header.send_time = getMicroTime();
  header.rspn_time = "";
  header.sync_type = userDataInput.sync_type;
  header.async_rspn_yn =
    userDataInput.sync_type === "A" ? userDataInput.async_rspn_yn : "";
  header.call_depth = 0;
  header.msg_count_no = 0;
  header.ttl_use_flag = userDataInput.ttl_use_flag;
  header.ttl_from_time =
    userDataInput.ttl != 0 ? moment().format("HHmmss") : "";
  header.ttl = userDataInput.ttl;
  header.long_msg_type = userDataInput.long_msg_type;
  header.err_flag = 0;
  header.err_src = "";
  header.err_type = "";
  header.err_code = "";
  header.dst_inst_code =
    userDataInput.dst_inst_code != null ? userDataInput.dst_inst_code : "";
  header.fail_knd = userDataInput.fail_knd;
  header.ap_host_name = userDataInput.ap_host_name;
  header.ap_caller_id = userDataInput.ap_caller_id;
  header.inf_id = "";
  header.lang_type = userDataInput.lang_type;
  header.reserved = "";

  return header;
}
