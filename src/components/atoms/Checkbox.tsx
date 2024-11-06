export interface CheckBoxInterface {
    name : string;
    value : boolean;
    onClickHandler : () => void;
}

const CheckBox = ({ name, value, onClickHandler } : CheckBoxInterface ) => {
    return(
        <input type="checkbox" name={`CheckBox-${name}`} checked={value} onClick={onClickHandler} />
    )
}

export default CheckBox;