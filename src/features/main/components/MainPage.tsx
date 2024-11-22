import Image from 'next/image';

export const Main = () => {
  const merchants = [
    { id: 1, name: 'Merchant' },
    { id: 2, name: 'Merchant 2' },
    { id: 3, name: 'Merchant' },
    { id: 4, name: 'Merchant' },
    { id: 5, name: 'Merchant' },
    { id: 6, name: 'Merchant' },
    { id: 7, name: 'Merchant' },
    { id: 8, name: 'Merchant' },
    { id: 9, name: 'Merchant' },
    { id: 10, name: 'Merchant' },
    { id: 11, name: 'Merchant' },
    { id: 12, name: 'Merchant' },
  ];

  return (
    <div className="w-[100%] h-screen bg-gradient-to-r bg-homepage-first flex items-center justify-center">
      <div className="grid grid-cols-4 gap-6">
        {merchants.map((merchant) => (
          <div
            key={merchant.id}
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
              <Image
                src={'/academic-cap.svg'}
                alt="academic-cap"
                width={177}
                height={24}
              />
            </div>

            <p className="mt-2 text-sm font-medium text-gray-800">
              {merchant.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
