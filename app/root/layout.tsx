import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="root-layout">
        <nav>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="logo" width={32} height={43} />
            <h2 className="text-primary-100">Prepwise</h2>
          </Link>
        </nav>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Rootlayout;
