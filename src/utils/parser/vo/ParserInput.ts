import { ClassConstructor } from "class-transformer";
import { Field } from "../decorator";
import { ParserHeader } from "./ParserHeader";
import { ParserInputData } from "./ParserInputData";

export class ParserInput<I> {
  constructor(typeClass: ClassConstructor<I>) {
    this.header = new ParserHeader();
    this.data = new ParserInputData(typeClass);
  }
  @Field({ type: "VO", length: 0, trim: "NONE" })
  header: ParserHeader;

  @Field({ type: "VO", length: 0, trim: "NONE" })
  data: ParserInputData<I>;

  @Field({ type: "STRING", length: 2, trim: "RTRIM" })
  tail: string = "@@";
}
