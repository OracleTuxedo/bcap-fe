export interface DateInterface {
    name : string;
    value?: string;
    onChangeHandler : (e : React.FormEvent<HTMLInputElement>) => void;
}

const Date = ({ name, value, onChangeHandler } : DateInterface) => {
    return (
        <input type="date" name={name} value={value} onChange={onChangeHandler}/>
    )
}

export default Date;