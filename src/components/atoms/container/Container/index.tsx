import { AtomContainerI } from './container.interface';

const CustomContainer = ({
  row = false,
  gap = false,
  border = false,
  round = false,
  children,
}: AtomContainerI) => {
  return (
    <div
      className={`
                flex
                flex-1
                ${row ? 'flex-row' : 'flex-col'}
                ${!gap ? 'mx-2 my-1' : ''}
                ${round ? 'rounded-md' : ''}
                ${border ? 'border' : ''}
            `}
    >
      {children}
    </div>
  );
};

export default CustomContainer;
