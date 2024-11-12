export interface CheckBoxInterface {
    name : string;
    value : boolean;
    onChangeHandler : () => void;
}

const CheckBox = ({
    name,
    value,
    onChangeHandler
} : CheckBoxInterface ) => {

    return(
        <div className={`
            flex
            flex-1
            px-6
            items-center
        `}>
            <input
                type="checkbox"
                className={`
                        size-5
                    `}
                name={`CheckBox-${name}`}
                checked={value}
                onChange={onChangeHandler}
            />
        </div>
    );

}

export default CheckBox;