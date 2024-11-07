export interface DateInterface {
    name : string;
    value?: string;
    onChangeHandler : (e : React.FormEvent<HTMLInputElement>) => void;
}

const Date = ({ name, value, onChangeHandler } : DateInterface) => {
    return (
        <input 
            className={`
                mx-2 my-1
                w-ful
                px-4 py-2
                border border-gray
                rounded-lg
                shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent 
                hover:border-gray transition duration-150 ease-in-out
            `}
            type="date"
            name={name}
            value={value}
            onChange={onChangeHandler}
        />
    )
}

export default Date;