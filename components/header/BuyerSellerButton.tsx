'use client';

interface BuyerSellerButtonProps {
  onClick: () => void;
}

export function BuyerSellerButton({ onClick }: BuyerSellerButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-md transition hover:bg-white/10"
    >
      Buyer Seller Meet
    </button>
  );
}
