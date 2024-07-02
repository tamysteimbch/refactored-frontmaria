'use client';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import MainContent from '@/components/MainContent';
import { Mode } from '@/constants/sidebuttons';
import { me, getSchool } from './api/teacher';
import { useAppSelector, useAppDispatch, useAppStore } from '../lib/hooks';
import { setTeacher } from '@/lib/features/me/me';
import { setSchool } from '@/lib/features/me/school';
import { setQuestions } from '@/lib/features/me/questions';
import { getQuestions } from './api/questions';

export default function Home() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [mode, setMode] = useState<Mode>('class');

  const dispatch = useAppDispatch();

  useEffect(() => {
    getQuestions().then((questions) => {
      dispatch(setQuestions(questions));
    });

    me().then((teacher) => {
      dispatch(setTeacher(teacher));
      console.log(teacher.schoolId);
      getSchool(teacher.schoolId).then((school) => {
        console.log(school);
        dispatch(setSchool(school));
      });
    });
  }, [dispatch]);

  const user = useAppSelector((state) => state).me.me;

  if (!user?._id)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="min-h-screen flex">
      <Sidebar
        isNavCollapsed={isNavCollapsed}
        setIsNavCollapsed={setIsNavCollapsed}
        setMode={setMode}
        user={user}
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
