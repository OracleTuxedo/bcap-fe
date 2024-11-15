import { ChangeEvent } from "react";
import { Date } from "../atoms"

export interface DateRangeInterface {
    startName               : string;
    startValue?             : string;
    startOnChangeHandler    : (e : ChangeEvent<HTMLInputElement>) => void;
    endName                 : string;
    endValue?               : string;
    endOnChangeHandler      : (e : ChangeEvent<HTMLInputElement>) => void;

}

const DateRange = ({
    startName, startValue, startOnChangeHandler,
    endName, endValue, endOnChangeHandler,
} : DateRangeInterface) => {
    return (
        <>
            <Date
                name={startName}
                value={startValue}
                onChangeHandler={startOnChangeHandler}
            />

            <label
                className={`
                    mx-2
                `}
            >
                ~
            </label>

            <Date
                name={endName}
                value={endValue}
                onChangeHandler={endOnChangeHandler}
            />
        </>
    );
}

export default DateRange;