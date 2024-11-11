import { SizeEnum, TextColorEnum } from "@/enums";

export interface TextInterface {
    color? : TextColorEnum;
    size?: SizeEnum;
    children : string;
}

const Text = ( {color, size, children} : TextInterface ) => {
    let textColor = 'text-black';
    let textSize = 'text-base';

    if (color == TextColorEnum.WHITE) textColor = 'text-white';

    switch (size) {
        case SizeEnum.EXTRASMALL:
            textSize = 'text-xs'
            break;
        case SizeEnum.SMALL:
            textSize = 'text-sm'
            break;
        case SizeEnum.MEDIUM:
            textSize = 'text-md'
            break;
        case SizeEnum.LARGE:
            textSize = 'text-lg'
            break;
        case SizeEnum.EXTRALARGE:
            textSize = 'text-xl'
            break;
        case SizeEnum.DOUBLELARGE:
            textSize = 'text-2xl'
            break;
        case SizeEnum.TRIPLELARGE:
            textSize = 'text-3xl'
            break;
        default:
            textSize = 'text-base';
            break;
    }

    return (
        <p
            className={`
                px-2 py-1
                ${textColor}
                ${textSize}
            `}
        >
            {children}
        </p>
    )
}

export default Text;