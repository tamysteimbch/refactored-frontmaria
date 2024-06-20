'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import MainContent from '@/components/MainContent';
import { Mode } from '@/constants/sidebuttons';

export default function Home() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [mode, setMode] = useState<Mode>('class');

  return (
    <div className="min-h-screen flex">
      <Sidebar
        isNavCollapsed={isNavCollapsed}
        setIsNavCollapsed={setIsNavCollapsed}
        setMode={setMode}
      />
      <MainContent
        isNavCollapsed={isNavCollapsed}
        setIsNavCollapsed={setIsNavCollapsed}
        mode={mode}
        setMode={setMode}
      />
    </div>
  );
}
