import { ClassConstructor } from "class-transformer";
import { Field } from "../decorator";
import { TelegramHeader } from "./TelegramHeader";
import { TelegramInData } from "./TelegramInData";

export class TelegramIn<I> {
  constructor(typeClass: ClassConstructor<I>) {
    this.header = new TelegramHeader();
    this.data = new TelegramInData(typeClass);
  }
  @Field({ type: "VO", length: 0, trim: "NONE" })
  header: TelegramHeader;

  @Field({ type: "VO", length: 0, trim: "NONE" })
  data: TelegramInData<I>;

  @Field({ type: "STRING", length: 2, trim: "RTRIM" })
  tail: string = "@@";
}
