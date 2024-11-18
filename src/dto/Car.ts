import { Field } from "../utils/Telegram/decorator/Field";
import { FieldList } from "../utils/Telegram/decorator/FieldList";
import { FieldNumber } from "../utils/Telegram/decorator/FieldNumber";

export class Tire {
  @Field({ type: "STRING", length: 10, trim: "RTRIM" })
  product: string;

  @Field({ type: "STRING", length: 20, trim: "RTRIM" })
  type: string;

  @Field({ type: "NUMBER", length: 10, trim: "LTRIM" })
  @FieldNumber({ type: "DECIMAL", decimal: 2 })
  price: number;

  @Field({ type: "STRING", length: 20, trim: "RTRIM" })
  description: string;
}

export class Car {
  constructor() {
    this.tires = [new Tire()];
  }
  @Field({ type: "STRING", length: 10, trim: "RTRIM" })
  name: string;

  @Field({ type: "LIST", length: 0, trim: "LTRIM" })
  @FieldList({ length: 8 })
  tires: Array<Tire>;

  @Field({ type: "STRING", length: 20, trim: "RTRIM" })
  description: string;

  @Field({ type: "NUMBER", length: 12, trim: "LTRIM" })
  @FieldNumber({ type: "DECIMAL", decimal: 2 })
  price: number;
}
