'use client';

import Image from 'next/image';

export default function Logo() {
  return (
    <Image src="/thin-logo2.png" alt="thin 로고" width={180} height={60} priority />
  );
} 