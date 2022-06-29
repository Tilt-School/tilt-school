import React from 'react';
import { useRouter } from 'next/router';
import { Sidebar } from '@tilt-school/ui';

export interface LayoutProviderProps {
  children: React.ReactNode;
}

export default function LayoutProvider({ children }: LayoutProviderProps) {
  const router = useRouter();
  const withoutSidebar: string[] = [];

  return (
    <>
      {!withoutSidebar.includes(router.asPath) && <Sidebar />}
      <main style={{ flexGrow: 1 }}>{children}</main>
    </>
  );
}
