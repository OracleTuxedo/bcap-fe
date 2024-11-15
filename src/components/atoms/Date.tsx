import moment from "moment";
import { ChangeEvent } from "react";

export interface DateInterface {
    name : string;
    value?: string;
    onChangeHandler : (e : ChangeEvent<HTMLInputElement>) => void;
}

const Date = ({ name, value, onChangeHandler } : DateInterface) => {
    return (
        <input
                name={name}
                type="date"
                className={`
                    mx-2
                    p-1
                    h-fit
                    border border-sidebar-normal
                    shadow-sm
                `}
                value={moment(value).format("YYYY-MM-DD")}
                onChange={onChangeHandler}
            />
    )
}

export default Date;