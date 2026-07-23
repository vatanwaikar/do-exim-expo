'use client';

import Link from 'next/link';

interface RegisterButtonProps {
  href?: string;
}

export function RegisterButton({ href = '/register' }: RegisterButtonProps) {
  return (
    <Link
      href={href}
      className="rounded-full bg-gradient-to-r from-[#f4a933] via-[#d99b3a] to-[#f4a933] px-5 py-2.5 text-sm font-semibold text-[#081320] shadow-[0_16px_45px_rgba(244,169,51,0.34)] transition hover:scale-[1.01] hover:brightness-105"
    >
      Register
    </Link>
  );
}
