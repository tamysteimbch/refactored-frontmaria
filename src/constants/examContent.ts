export type ExamContent = {
  id: number;
  level: string;
  description: string;
  color: string;
  hasImage: boolean;
};

const examContent: ExamContent[] = [
  {
    id: 1,
    level: 'Difícil',
    description:
      'lore ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    color: '#E74C3C',
    hasImage: true,
  },
  {
    id: 2,
    level: 'Fácil',
    description:
      'lore ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    color: '#31C456',
    hasImage: false,
  },
  {
    id: 3,
    level: 'Médio',
    description:
      'lore ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    color: '#FBCB23',
    hasImage: true,
  },
  {
    id: 4,
    level: 'Fácil',
    description:
      'lore ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    color: '#31C456',
    hasImage: false,
  },
  {
    id: 5,
    level: 'Médio',
    description:
      'lore ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    color: '#FBCB23',
    hasImage: true,
  },
  {
    id: 6,
    level: 'Difícil',
    description:
      'lore ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    color: '#E74C3C',
    hasImage: false,
  },
  {
    id: 7,
    level: 'Médio',
    description:
      'lore ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    color: '#FBCB23',
    hasImage: true,
  },
  {
    id: 8,
    level: 'Difícil',
    description:
      'lore ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    color: '#E74C3C',
    hasImage: false,
  },
  {
    id: 9,
    level: 'Fácil',
    description:
      'lore ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    color: '#31C456',
    hasImage: false,
  },
];

export default examContent;
