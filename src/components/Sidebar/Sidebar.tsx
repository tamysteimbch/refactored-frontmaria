'use client';

import Title from './Title';
import ButtonsList from './ButtonsList';
import CreateExamBtn from './CreateExamBtn';
import Footer from './Footer';
import { TbLayoutSidebarLeftCollapseFilled } from 'react-icons/tb';
import { Mode } from '@/constants/sidebuttons';

interface SidebarProps {
  isNavCollapsed: boolean;
  setIsNavCollapsed: (value: boolean) => void;
  setMode: (value: Mode) => void;
}

export default function Sidebar({ isNavCollapsed, setIsNavCollapsed, setMode }: SidebarProps) {
  return (
    !isNavCollapsed && (
      <aside className="lg:w-[35rem] lg:flex bg-primary text-white hidden flex-col justify-between">
        <div className="flex flex-col gap-4">
          <button className="flex justify-end m-4 text-3xl" onClick={() => setIsNavCollapsed(true)}>
            <TbLayoutSidebarLeftCollapseFilled />
          </button>
          <Title />
          <CreateExamBtn setMode={setMode} />
          <ButtonsList setMode={setMode} />
        </div>

        <Footer setMode={setMode} />
      </aside>
    )
  );
}
