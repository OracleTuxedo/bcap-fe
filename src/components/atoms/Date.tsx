export interface DateInterface {
    name : string;
    value?: string;
    onChangeHandler : (e : React.FormEvent<HTMLInputElement>) => void;
}

const Date = ({
        name,
        value,
        onChangeHandler
} : DateInterface) => {

    return (
        <input 
            className={`
                flex
                flex-1
                mx-2 my-1
                px-4
                border border-gray
                rounded-md
                shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent 
                hover:border-gray transition duration-150 ease-in-out
            `}
            type="date"
            name={name}
            value={value}
            onChange={onChangeHandler}
        />
    );

}

export default Date;