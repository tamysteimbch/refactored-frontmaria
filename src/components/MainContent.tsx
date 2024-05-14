import { TbLayoutSidebarRightCollapseFilled } from 'react-icons/tb';
import MobileMenu from './Sidebar/MobileMenu';
import { Mode } from '@/constants/sidebuttons';
import Classes from './Content/Classes';
import Exam from './Content/Exam';
import ExamList from './Content/ExamList';
import NewExam from './Content/NewExam';
import QuestionsDB from './Content/QuestionsDB';

interface MainContentProps {
  isNavCollapsed: boolean;
  setIsNavCollapsed: (value: boolean) => void;
  mode: Mode;
}

export default function MainContent({ isNavCollapsed, setIsNavCollapsed, mode }: MainContentProps) {
  return (
    <main className="w-full bg-over">
      <MobileMenu />
      {isNavCollapsed && (
        <button className="flex my-4 text-3xl" onClick={() => setIsNavCollapsed(false)}>
          <TbLayoutSidebarRightCollapseFilled />
        </button>
      )}

      {mode === 'class' && <Classes />}
      {mode === 'test' && <Exam />}
      {mode === 'question' && <QuestionsDB />}
    </main>
  );
}
