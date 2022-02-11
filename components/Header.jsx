import Image from 'next/image';
import React from 'react';
import HeaderItem from './HeaderItem';

export default function Header() {
  const src = 'https://links.papareact.com/ua6';
  return (
    <header>
      <div>
        <HeaderItem title="HOME" />
      </div>
      <Image
        className="object-contain"
        loader={() => src}
        src={src}
        width={200}
        height={100}
      />
    </header>
  );
}
