import { ClassConstructor } from "class-transformer";
import { Field } from "../decorator";
import { ParserHeader } from "./ParserHeader";
import { ParserMessage } from "./ParserMessage";
import { ParserOutputData } from "./ParserOutputData";

export class ParserOutput<O> {
  constructor(typeClass: ClassConstructor<O>) {
    this.header = new ParserHeader();
    this.message = new ParserMessage();
    this.data = new ParserOutputData(typeClass);
  }
  @Field({ type: "VO", length: 0, trim: "NONE" })
  header: ParserHeader;

  @Field({ type: "VO", length: 0, trim: "NONE" })
  message: ParserMessage;

  @Field({ type: "VO", length: 0, trim: "NONE" })
  data: ParserOutputData<O>;

  @Field({ type: "STRING", length: 2, trim: "RTRIM" })
  tail: string = "@@";
}
