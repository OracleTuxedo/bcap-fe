import { HiStar } from 'react-icons/hi2'

export interface HeaderInterface {
    screenId : string;
    screenName : string;
    isFavorite : boolean;
    favoriteHandler : () => void;
}

const Header = ({ screenId, screenName, isFavorite, favoriteHandler } : HeaderInterface) => {

    return (
        <div
            id="header"
            className={`
                my-2 pb-2
                flex flex-row
                h-14
                items-center
                border-b
            `}
        >
            <button 
                className={`
                    mx-2
                `}
                onClick={favoriteHandler}
            >
                <HiStar
                    size={32}
                    color={isFavorite ? '#FFCC00' : '#D1D1D1'}
                />
            </button>

            <div
                id="titleId"
                className={`
                    flex
                    rounded-md
                    justify-center items-center
                    w-36 h-10
                    mx-2
                    bg-badge-blue
                    text-white text-lg
                    shadow-lg
                `}
            >
                <p>{screenId}</p>
            </div>

            <div
                className={`
                    flex flex-1
                    text-lg
                    mx-2
                `}
            >
                <p>{screenName}</p>
            </div>
        </div>
    );
}

export default Header;