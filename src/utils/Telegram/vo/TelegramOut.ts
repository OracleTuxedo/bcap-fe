import { ClassConstructor } from "class-transformer";
import { Field } from "../decorator";
import { TelegramHeader } from "./TelegramHeader";
import { TelegramMessage } from "./TelegramMessage";
import { TelegramOutData } from "./TelegramOutData";

export class TelegramOut<O> {
  constructor(typeClass: ClassConstructor<O>) {
    this.header = new TelegramHeader();
    this.message = new TelegramMessage();
    this.data = new TelegramOutData(typeClass);
  }
  @Field({ type: "VO", length: 0, trim: "NONE" })
  header: TelegramHeader;

  @Field({ type: "VO", length: 0, trim: "NONE" })
  message: TelegramMessage;

  @Field({ type: "VO", length: 0, trim: "NONE" })
  data: TelegramOutData<O>;

  @Field({ type: "STRING", length: 2, trim: "RTRIM" })
  tail: string = "@@";
}
