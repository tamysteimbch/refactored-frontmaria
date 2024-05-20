import { TbLayoutSidebarRightCollapseFilled } from 'react-icons/tb';
import MobileMenu from './Sidebar/MobileMenu';
import { Mode } from '@/constants/sidebuttons';
import Classes from './Content/Classes';
import ExamList from './Content/ExamList';
import NewExam from './Content/NewExam';
import QuestionsDB from './Content/QuestionsDB';

interface MainContentProps {
  isNavCollapsed: boolean;
  setIsNavCollapsed: (value: boolean) => void;
  mode: Mode;
  setMode: (value: Mode) => void;
}

export default function MainContent({
  isNavCollapsed,
  setIsNavCollapsed,
  mode,
  setMode,
}: MainContentProps) {
  return (
    <main className="w-full bg-over">
      <MobileMenu setMode={setMode} />
      {isNavCollapsed && (
        <button className="flex my-4 text-3xl" onClick={() => setIsNavCollapsed(false)}>
          <TbLayoutSidebarRightCollapseFilled />
        </button>
      )}
      <div className="lg:mt-12 p-8">
        {mode === 'class' && <Classes />}
        {mode === 'test' && <ExamList />}
        {mode === 'question' && <QuestionsDB setMode={setMode} />}
        {mode === 'newExam' && <NewExam setMode={setMode} />}
      </div>
    </main>
  );
}
