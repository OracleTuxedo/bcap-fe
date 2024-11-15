import { Field } from "../decorator";

export class ParserMessageSub {
  @Field({ type: "STRING", length: 100, trim: "RTRIM" })
  sub_msg: string;
}
