import { SAZ02F111UInSub1Vo } from "./SAZ02F111UInSub1Vo";
import { SAZ02F111UInSub2Vo } from "./SAZ02F111UInSub2Vo";
import { SAZ02F111UInSub3Vo } from "./SAZ02F111UInSub3Vo";
import { SAZ02F111UInSub4Vo } from "./SAZ02F111UInSub4Vo";

export class SAZ02F111UInVo {
  constructor() {
    this.sub1_vos = [new SAZ02F111UInSub1Vo()];
    this.sub2_vos = [new SAZ02F111UInSub2Vo()];
    this.sub3_vos = [new SAZ02F111UInSub3Vo()];
    this.sub4_vos = [new SAZ02F111UInSub4Vo()];
  }
  sub1_vos: Array<SAZ02F111UInSub1Vo>;

  sub2_vos: Array<SAZ02F111UInSub2Vo>;

  sub3_vos: Array<SAZ02F111UInSub3Vo>;

  sub4_vos: Array<SAZ02F111UInSub4Vo>;
}