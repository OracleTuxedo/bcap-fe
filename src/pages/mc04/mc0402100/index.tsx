import { BaseButton, BaseContainer, DropdownLabel, Gap, Header, InputDateLabel } from "@/components"
import { ButtonVariantEnum } from "@/enums";
import { selectOption } from "@/types";
import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, useState } from "react"

const MC0402100 = () => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [monitorType, setMonitorType] = useState<string>('');
    const [startDate, setStartDate] = useState<string | undefined>();
    const [endDate, setEndDate] = useState<string | undefined>();

    const selectOptions : selectOption[] = [
        {
            label : 'test 1',
            value : '1'
        },
        {
            label : 'test 2',
            value : '2'
        },
        {
            label : 'test 3',
            value : '3'
        },
        {
            label : 'test 4',
            value : '4'
        },
        {
            label : 'test 5',
            value : '5'
        },
    ]

    const favoriteHandler = () => {
        setIsFavorite((prev) => !prev);
    }

    const monitorChangeHandler = (event : SelectChangeEvent) => {
        setMonitorType(event.target.value);
    }

    const startDateHandler = (event : ChangeEvent<HTMLInputElement>) => {
        setStartDate(event.target.value);
    }

    const endDateHandler = (event : ChangeEvent<HTMLInputElement>) => {
        setEndDate(event.target.value);
    }

    return (
        <BaseContainer>
            <Header isFavorite={isFavorite} onClickHandler={favoriteHandler} screenId="MC0402100" title="Merchant Fraud Monitoring"/>
            <BaseContainer isFlex row color="#D9D9D9">
                <BaseContainer row isFlex flexSize={7}>
                    <DropdownLabel id="monitor-type" data={selectOptions} name="Monitor Type" onChangeHandler={monitorChangeHandler} value={monitorType} required />
                    <InputDateLabel name="Inquiry Date" required
                        startId="start-date" startValue={startDate} StartOnChangeHandler={startDateHandler}
                        endId="end-date" endValue={endDate} EndOnChangeHandler={endDateHandler}
                    />
                </BaseContainer>
                <Gap size={4} />
                <BaseContainer isFlex flexSize={1}>
                    <BaseButton title="Search" variant={ButtonVariantEnum.CONTAINED} onClickHandler={() => {}} />
                </BaseContainer>
            </BaseContainer>
        </BaseContainer>
    )
}

export default MC0402100;