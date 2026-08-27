import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell flex flex-col min-h-[100dvh] w-full relative">
      <Navbar />
      <main className="flex-1 flex flex-col w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
