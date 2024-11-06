export interface CheckBoxInterface {
    name : string;
    value : boolean;
    onChangeHandler : () => void;
}

const CheckBox = ({ name, value, onChangeHandler } : CheckBoxInterface ) => {
    return(
        <input type="checkbox" name={`CheckBox-${name}`} checked={value} onChange={onChangeHandler} />
    )
}

export default CheckBox;