import { SizeEnum, TextColorEnum, WeightEnum } from "@/enums";

export interface TextInterface {
    color? : TextColorEnum;
    size?: SizeEnum;
    weight?: WeightEnum;
    children : string;
}

const Text = ( {color, size, weight, children} : TextInterface ) => {
    let textColor = 'text-black';
    let textSize = 'text-base';
    let textWeight = 'font-normal';

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

    switch (weight) {
        case WeightEnum.THIN:
            textWeight = 'font-thin'
            break;
        case WeightEnum.EXTRALIGHT:
            textWeight = 'font-extralight'
            break;
        case WeightEnum.LIGHT:
            textWeight = 'font-light'
            break;
        case WeightEnum.NORMAL:
            textWeight = 'font-normal'
            break;
        case WeightEnum.MEDIUM:
            textWeight = 'font-medium'
            break;
        case WeightEnum.SEMIBOLD:
            textWeight = 'font-semibold'
            break;
        case WeightEnum.BOLD:
            textWeight = 'font-bold'
            break;
        case WeightEnum.EXTRABOLD:
            textWeight = 'font-extrabold'
            break;
        case WeightEnum.BLACK:
            textWeight = 'font-black'
            break;
        default:
            textWeight = 'font-normal';
            break;
    }

    const style = `${textColor} ${textSize} ${textWeight}`
    return (
        <p
            className={style}
        >
            {children}
        </p>
    )
}

export default Text;