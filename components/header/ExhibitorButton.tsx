'use client';

interface ExhibitorButtonProps {
  onClick: () => void;
}

export function ExhibitorButton({ onClick }: ExhibitorButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full bg-gradient-to-r from-[#f4a933] via-[#e1b46f] to-[#d99b3a] px-5 py-2.5 text-sm font-semibold text-[#081320] shadow-[0_18px_60px_rgba(244,169,51,0.32)] transition hover:scale-[1.01] hover:brightness-105"
    >
      Exhibitors
    </button>
  );
}
