import { ClassConstructor } from 'class-transformer';
import { SkyHeader, SkyIn, SkyInData, SkyUserDataIn } from '../vo';
import { FieldParam, Meta } from '../decorator';
import {
  globalSeq,
  getMicroTime,
  makeOriginalGid,
  getPacketSize,
} from './SkyUtil';
import moment from 'moment';

export function makeSkyUserDataIn({
  tuxedoCode,
  screenId,
}: {
  tuxedoCode: string;
  screenId: string;
}): SkyUserDataIn {
  const userDataIn: SkyUserDataIn = new SkyUserDataIn();
  userDataIn.tx_code = tuxedoCode;
  userDataIn.scrn_id = screenId;
  userDataIn.client_ip_no = '172.16.20.11'; /// TODO get client IP browser / server
  userDataIn.op_id = '1787130271'; /// TODO User ID from Local Storage  (authentication)
  userDataIn.sync_type = 'A';
  userDataIn.rspn_svc_code = '';
  userDataIn.async_rspn_yn = '0';
  userDataIn.ttl_use_flag = 0;
  userDataIn.lang_type = 'EN'; /// TODO Locale EN / ID
  return userDataIn;
}

export function makeSkyIn<I>({
  typeClass,
  data,
  userDataIn,
}: {
  typeClass: ClassConstructor<I>;
  data: I;
  userDataIn: SkyUserDataIn;
}): SkyIn<I> | null {
  const skyHeader: SkyHeader | null = makeSkyHeader({
    userDataIn: userDataIn,
  });
  const skyInData: SkyInData<I> | null = makeSkyInData({
    typeClass: typeClass,
    data: data,
  });

  if (!skyHeader || !skyInData) return null;

  const skyIn: SkyIn<I> = new SkyIn(typeClass);
  skyIn.header = skyHeader;
  skyIn.data = skyInData;

  const countSkyIn = getPacketSize(skyIn);

  if (!countSkyIn) return null;

  skyIn.header.msg_len = countSkyIn - 8;

  return skyIn;
}

function makeSkyInData<I>({
  typeClass,
  data,
}: {
  typeClass: ClassConstructor<I>;
  data: I;
}): SkyInData<I> | null {
  const skyInData: SkyInData<I> = new SkyInData<I>(typeClass);
  skyInData.data_type = 'D';
  skyInData.data = data;
  const count = getPacketSize(skyInData);
  if (!count) return null;

  skyInData.length = count - 9; // TODO Buat apa ada angka 9 ?
  return skyInData;
}

function makeSkyHeader({
  userDataIn,
}: {
  userDataIn: SkyUserDataIn;
}): SkyHeader | null {
  const header: SkyHeader = new SkyHeader();

  const fields: Array<FieldParam> | undefined = Reflect.getMetadata(
    Meta.FIELD,
    header,
  );
  if (!fields) return null;

  header.gid_sysname = 'MTI'; // TODO InetAddress.getLocalHost().getHostName();
  header.gid_yyyyymmdd = moment().format('YYYYMMDD');
  header.gid_hhmmss = moment().format('HHmmss');
  header.gid_seq = globalSeq();
  header.gid_pid = '00000'; // TODO System.getProperty("wlinstance");
  header.gid_stat = '00';
  header.tx_code = userDataIn.tx_code;
  header.inst_no = 'MTI';
  header.send_rspn_type = 'S';
  header.rspn_svc_code = userDataIn.rspn_svc_code;
  header.ori_global_id = makeOriginalGid(header, fields);
  header.ori_send_time = getMicroTime();
  header.chnl_id = 'WEB'; // TODO System.getProperty("chnl_id");
  header.client_ip_no = userDataIn.client_ip_no;
  header.client_mac = userDataIn.client_mac;
  header.scrn_id = userDataIn.scrn_id;
  header.scrn_lock_yn = 'N';
  header.op_id = userDataIn.op_id;
  header.xa_begin_flag = 0;
  header.send_time = getMicroTime();
  header.rspn_time = '';
  header.sync_type = userDataIn.sync_type;
  header.async_rspn_yn =
    userDataIn.sync_type === 'A' ? userDataIn.async_rspn_yn : '';
  header.call_depth = 0;
  header.msg_count_no = 0;
  header.ttl_use_flag = userDataIn.ttl_use_flag;
  header.ttl_from_time =
    userDataIn.ttl != 0 ? moment().format('HHmmss') : '';
  header.ttl = userDataIn.ttl;
  header.long_msg_type = userDataIn.long_msg_type;
  header.err_flag = 0;
  header.err_src = '';
  header.err_type = '';
  header.err_code = '';
  header.dst_inst_code =
    userDataIn.dst_inst_code != null ? userDataIn.dst_inst_code : '';
  header.fail_knd = userDataIn.fail_knd;
  header.ap_host_name = userDataIn.ap_host_name;
  header.ap_caller_id = userDataIn.ap_caller_id;
  header.inf_id = '';
  header.lang_type = userDataIn.lang_type;
  header.reserved = '';

  return header;
}
