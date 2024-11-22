import { Button } from '@nextui-org/react';
import Image from 'next/image';

export const Main = () => {
  const merchants = [
    { id: 1, name: 'Merchant', img: '/academic-cap.svg' },
    { id: 2, name: 'Merchant 2', img: '/academic-cap.svg' },
    { id: 3, name: 'Merchant', img: '/academic-cap.svg' },
    { id: 4, name: 'Merchant', img: '/academic-cap.svg' },
    { id: 5, name: 'Merchant', img: '/academic-cap.svg' },
    { id: 6, name: 'Merchant', img: '/academic-cap.svg' },
    { id: 7, name: 'Merchant', img: '/academic-cap.svg' },
    { id: 8, name: 'Merchant', img: '/academic-cap.svg' },
    { id: 9, name: 'Merchant', img: '/academic-cap.svg' },
    { id: 10, name: 'Merchant', img: '/academic-cap.svg' },
    { id: 11, name: 'Merchant', img: '/academic-cap.svg' },
    { id: 12, name: 'Merchant', img: '/academic-cap.svg' },
  ];

  return (
    <div className="w-[100%] h-screen bg-gradient-to-br from-homepage-primary  from-40% to-homepage-secondary to-55% flex items-center justify-center">
      <div className="grid grid-cols-4 gap-x-80 gap-y-20">
        {merchants.map((merchant) => (
          <Button
            className="h-auto w-auto flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4"
            key={merchant.id}
          >
            <div className="w-24 h-12 flex items-center justify-center bg-gray-200 rounded-full">
              <Image
                src={merchant.img}
                alt="academic-cap"
                width={100}
                height={100}
              />
            </div>

            <p className="mt-2 text-sm font-medium text-gray-800">
              {merchant.name}
            </p>
          </Button>
        ))}
      </div>
    </div>
  );
};
