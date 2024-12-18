import { TextColorEnum } from '@/enums';
import { AtomTitleI } from './label-title.interface';

const LabelTitle = ({ color, children }: AtomTitleI) => {
  let textColor = 'text-black';

  if (color == TextColorEnum.WHITE) textColor = 'text-white';

  return <p className={`px-2 py-1 ${textColor} text-7xl`}>{children}</p>;
};

export default LabelTitle;
