type ETACardProps = {
  eta: number;
  orderId: string;
  onNewOrder: () => void;
};

export default function ETACard({ eta, orderId, onNewOrder }: ETACardProps) {
  return (
    <div className="bg-[#605858] p-6 rounded-lg text-center w-full">
      <div className="flex justify-center">
        <img
          src="./boxtop.svg"
          alt="Order box"
          className="w-[390px] h-[362px] mx-auto mb-4"
        />
      </div>

      <div className="flex-col items-center">
        <h2 className="text-[#F4F3F1F0] text-[32px] font-bold">DINA WONTONS</h2>
        <h2 className="text-[#F4F3F1F0] text-[32px] font-bold mb-2">
          TILLAGAS!
        </h2>
      </div>

      <p className="text-[#F4F3F1F0] text-[26px] py-4">ETA {eta} MIN</p>
      <p className="text-[#EEEEEE] text-[15px] mt-1">#{orderId}</p>
      <div className="mt-6 space-y-3">
        <button className="bg-[#605858] w-full h-[77px] py-2 border border-[#F4F3F1F0] border-solid rounded font-bold text-[24px] text-white">
          SE KVITTO
        </button>
        <button
          onClick={onNewOrder}
          className="w-full h-[77px] py-2 bg-[#353131] rounded text-white font-bold text-[24px] border-none"
        >
          GÖR EN NY BESTÄLLNING
        </button>
      </div>
    </div>
  );
}
