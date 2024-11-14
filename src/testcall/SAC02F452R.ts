import { SAC02F452RInVo, SAC02F452ROutVo } from "../dto/SAC02F452R";
import { convertStringToObject } from "../sky/mapper/Decoder";
import { convertObjectToString } from "../sky/mapper/Encoder";
import { makeSkyUserDataInput, makeSkyIn } from "../sky/util";
import { SkyIn, SkyOut, SkyUserDataInput } from "../sky/vo";
import axios from "axios";

/// Request Unit Test
// [00000583                                SAC02F452R              MTI S                                                                            UNIT      192.168.1.89                    0CDD2494CF5F                           020241113151718607                         00000      00000                                                                        EN                                                                                                                                              00000000                     00000000001071000204442      2024010120240919                ]
// [00000585MTI     202411131526076510000000SAC02F452R              MTI S                        MTI     20241113152607651000000020241113365000      WEB       172.16.20.11                                WMC0302500 N1787130271     020241113365000                          A000000      00010                                                                        EN                                                                                                                                             D00000082                     00000000001071000204442      2024010120240919                @@]

// Response Unit Test
// [00002606devaps01202411131517240022008600SAC02F452R              MTI R                        devaps0120241113151724002200860020241113151718607   UNIT      192.168.1.89                    0CDD2494CF5F                           020241113151718607   20241113151725124452  0  00        000       NAZAP0001                                                        EN                                                                                                                                             N00000425                     30inquiry process success.                                                                                                                                                                                                                                                                                                                                                                                        00D00001669                             96      1020240101202401054259450300373427   6451380000000000000006589000000000000000000005    00000000000000006589000000000000000000000000000000000000000000000000000000000N20240102202401035379408870000145   1113100000000000000006000000000000000000000015    00000000000000006000000000000000000000000000000000000000000000000000000000000N20240105202401094215708100006338   0000890000000000000115000000000000000000000005    00000000000000105000000000000000000000000000000000000000000000000000000000000 20240108202401094215708100041160   2693760000000000000020000000000000000000000005    00000000000000020000000000000000000000000000000000000000000000000000000000000N20240108202401094215708100041160   2536030000000000000025000000000000000000000005    00000000000000025000000000000000000000000000000000000000000000000000000000000N20240221202402224485580000080033   1129930000000000000006535000000000000000000005    00000000000000006535000000000000000000000000000000000000000000000000000000000N20240221202402224485580000080033   1129920000000000000002305000000000000000000005    00000000000000002305000000000000000000000000000000000000000000000000000000000N20240223202402254485580000080033   1111510000000000000006250000000000000000000005    00000000000000006250000000000000000000000000000000000000000000000000000000000N20240223202402254485580000080033   1111500000000000000003200000000000000000000005    00000000000000003200000000000000000000000000000000000000000000000000000000000N20240227202402294485580000080033   1112060000000000000006589000000000000000000005    00000000000000006589000000000000000000000000000000000000000000000000000000000N@@]
// [00002606MTI     202411131654217500000000SAC02F452R              MTI R                        MTI     20241113165421750000000020241113038000      WEB       172.16.20.11                                WMC0302500 N1787130271     020241113038000      20241113165427553841A00  00        010       NAZAP0001                                                        EN                                                                                                                                             N00000425                     30inquiry process success.                                                                                                                                                                                                                                                                                                                                                                                        00D00001669                             96      1020240101202401054259450300373427   6451380000000000000006589000000000000000000005    00000000000000006589000000000000000000000000000000000000000000000000000000000N20240102202401035379408870000145   1113100000000000000006000000000000000000000015    00000000000000006000000000000000000000000000000000000000000000000000000000000N20240105202401094215708100006338   0000890000000000000115000000000000000000000005    00000000000000105000000000000000000000000000000000000000000000000000000000000 20240108202401094215708100041160   2693760000000000000020000000000000000000000005    00000000000000020000000000000000000000000000000000000000000000000000000000000N20240108202401094215708100041160   2536030000000000000025000000000000000000000005    00000000000000025000000000000000000000000000000000000000000000000000000000000N20240221202402224485580000080033   1129930000000000000006535000000000000000000005    00000000000000006535000000000000000000000000000000000000000000000000000000000N20240221202402224485580000080033   1129920000000000000002305000000000000000000005    00000000000000002305000000000000000000000000000000000000000000000000000000000N20240223202402254485580000080033   1111510000000000000006250000000000000000000005    00000000000000006250000000000000000000000000000000000000000000000000000000000N20240223202402254485580000080033   1111500000000000000003200000000000000000000005    00000000000000003200000000000000000000000000000000000000000000000000000000000N20240227202402294485580000080033   1112060000000000000006589000000000000000000005    00000000000000006589000000000000000000000000000000000000000000000000000000000N@@]

export function encodeSAC02F452R(): string | null {
  const inVo: SAC02F452RInVo = new SAC02F452RInVo();
  inVo.page_size = 10;
  inVo.mid = "71000204442";
  inVo.auth_strt_date = "20240101";
  inVo.auth_end_date = "20240919";

  const userDataInput: SkyUserDataInput = makeSkyUserDataInput({
    tuxedoCode: "SAC02F452R",
    screenId: "WMC0302500",
  });

  const skyIn: SkyIn<SAC02F452RInVo> | null = makeSkyIn<SAC02F452RInVo>({
    typeClass: SAC02F452RInVo,
    data: inVo,
    userDataInput: userDataInput,
  });

  if (!skyIn) return null;

  const resultString = convertObjectToString(skyIn);

  return resultString;
}

export function decodeSAC02F452R(
  responseFromTuxedo: string
): SkyOut<SAC02F452ROutVo> | null {
  const parsed: SkyOut<SAC02F452ROutVo> | null = convertStringToObject<
    SkyOut<SAC02F452ROutVo>
  >({
    index: 0,
    input: responseFromTuxedo,
    classInstance: new SkyOut(SAC02F452ROutVo),
  });
  return parsed;
}

export async function callSAC02F452R() {
  console.log("ENCODER START");

  const requestToTuxedo: string | null = encodeSAC02F452R();

  if (!requestToTuxedo) return;

  let responseFromTuxedo = "";

  try {
    const response = await axios.post<string>(
      "http://localhost:8080/example/message",
      requestToTuxedo,
      {
        headers: {
          "Content-Type": "text/plain",
        },
      }
    );
    // console.log(response);
    responseFromTuxedo = response.data;
  } catch (error) {
    console.log("error");
    console.log(error);
    return;
  }
  console.log(`[${requestToTuxedo}]`);
  console.log("-----------------------------------------------------------");
  console.log(`[${responseFromTuxedo}]`);

  console.log("ENCODER END");
  console.log("-----------------------------------------------------------");
  console.log("-----------------------------------------------------------");
  console.log("-----------------------------------------------------------");
  console.log("DECODER START");

  const parsed = decodeSAC02F452R(responseFromTuxedo);
  console.log(parsed);
  console.log("-----------------------------------------------------------");
  console.log(parsed?.data.data);
  console.log("-----------------------------------------------------------");
  console.log(parsed?.data.data.sub1_vos);
  console.log("DECODER END");
}
