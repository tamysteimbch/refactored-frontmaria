'use client';
import { useState } from 'react';
import { TbLayoutSidebarRightCollapseFilled } from 'react-icons/tb';
import MobileMenu from './Sidebar/MobileMenu';
import { Mode } from '@/constants/sidebuttons';
import Classes from './Content/Classes';
import ExamList from './Content/ExamList';
import NewExam from './Content/NewExam';
import QuestionsDB from './Content/QuestionsDB';
import Exam from './Content/Exam';
import Profile from './Profile';
import { TestContent } from '@/constants/testContent';
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
  const [examContent, setExamContent] = useState<TestContent>({
    id: '',
    date: '',
    class: '',
    content: '',
    status: '',
    level: 'Fácil',
    subject: '',
    questions: [],
  });

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
        {mode === 'test' && <ExamList setExamContent={setExamContent} setMode={setMode} />}
        {mode === 'question' && <QuestionsDB setMode={setMode} mode={mode} />}
        {mode === 'newExam' && <NewExam setMode={setMode} />}
        {mode === 'exam' && <Exam examContent={examContent} />}
        {mode === 'profile' && <Profile />}
      </div>
    </main>
  );
}
