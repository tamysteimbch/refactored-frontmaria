import { MdOutlineClass } from 'react-icons/md';
import { LuNewspaper } from 'react-icons/lu';
import { GoDatabase } from 'react-icons/go';
import { IoMdNotificationsOutline } from 'react-icons/io';

export type Mode = 'class' | 'test' | 'question' | 'notification';

type SideButton = {
  icon: React.ReactNode;
  title: string;
  mode: Mode;
};

const sideButtons: SideButton[] = [
  {
    icon: <MdOutlineClass />,
    title: 'Minhas turmas',
    mode: 'class',
  },
  {
    icon: <LuNewspaper />,
    title: 'Minhas provas',
    mode: 'test',
  },
  {
    icon: <GoDatabase />,
    title: 'Banco de questões',
    mode: 'question',
  },
  {
    icon: <IoMdNotificationsOutline />,
    title: 'Notificações',
    mode: 'notification',
  },
];

export default sideButtons;
