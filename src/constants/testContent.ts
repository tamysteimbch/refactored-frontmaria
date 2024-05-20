export type Questions = {
  id: string;
  question: string;
  value: number;
};

export type TestContent = {
  id: string;
  date: string;
  class: string;
  content: string;
  status: string;
  level: 'Fácil' | 'Médio' | 'Difícil';
  subject: string;
  questions: Questions[];
};

const examContent: TestContent[] = [
  {
    id: '1',
    date: '10/10/2021',
    class: '6º A',
    content: 'Prova de Matemática',
    status: 'Ativa',
    level: 'Fácil',
    subject: 'Matemática',
    questions: [
      {
        id: '1',
        question: 'Qual é a raiz quadrada de 25?',
        value: 1.0,
      },
      {
        id: '2',
        question: 'Qual é o resultado de 2 + 2?',
        value: 2.5,
      },
      {
        id: '3',
        question: 'Qual é o resultado de 2 * 2?',
        value: 5.0,
      },
      {
        id: '4',
        question: 'Qual é o resultado de 2 / 2?',
        value: 1.0,
      },
    ],
  },
  {
    id: '2',
    date: '15/11/2021',
    class: '7º B',
    content: 'Prova de História',
    status: 'Concluída',
    level: 'Médio',
    subject: 'História',
    questions: [
      {
        id: '1',
        question: 'Quem foi o primeiro presidente do Brasil?',
        value: 1.0,
      },
      {
        id: '2',
        question: 'Em que ano o Brasil declarou independência?',
        value: 2.0,
      },
      {
        id: '3',
        question: 'Quem descobriu o Brasil?',
        value: 3.0,
      },
      {
        id: '4',
        question: 'Qual foi o principal produto exportado pelo Brasil no século XIX?',
        value: 4.0,
      },
    ],
  },
  {
    id: '3',
    date: '22/12/2021',
    class: '8º C',
    content: 'Prova de Ciências',
    status: 'Ativa',
    level: 'Difícil',
    subject: 'Ciências',
    questions: [
      {
        id: '1',
        question: 'Qual é o elemento mais abundante na atmosfera?',
        value: 1.0,
      },
      {
        id: '2',
        question: 'Qual é a fórmula química da água?',
        value: 2.5,
      },
      {
        id: '3',
        question: 'O que é fotossíntese?',
        value: 3.5,
      },
      {
        id: '4',
        question: 'Qual planeta é conhecido como o planeta vermelho?',
        value: 4.0,
      },
    ],
  },
  {
    id: '4',
    date: '05/01/2022',
    class: '9º D',
    content: 'Prova de Geografia',
    status: 'Pendente',
    level: 'Médio',
    subject: 'Geografia',
    questions: [
      {
        id: '1',
        question: 'Qual é o maior continente do mundo?',
        value: 1.5,
      },
      {
        id: '2',
        question: 'Qual é o país mais populoso do mundo?',
        value: 2.0,
      },
      {
        id: '3',
        question: 'Qual é o maior oceano do mundo?',
        value: 3.0,
      },
      {
        id: '4',
        question: 'Em que continente fica o Brasil?',
        value: 2.5,
      },
    ],
  },
  {
    id: '5',
    date: '18/02/2022',
    class: '10º E',
    content: 'Prova de Inglês',
    status: 'Ativa',
    level: 'Fácil',
    subject: 'Inglês',
    questions: [
      {
        id: '1',
        question: 'What is the past tense of "go"?',
        value: 1.0,
      },
      {
        id: '2',
        question: 'Translate "Hello" to Portuguese.',
        value: 1.5,
      },
      {
        id: '3',
        question: 'What is the opposite of "hot"?',
        value: 2.0,
      },
      {
        id: '4',
        question: 'Spell "beautiful".',
        value: 2.5,
      },
    ],
  },
  {
    id: '6',
    date: '03/03/2022',
    class: '11º F',
    content: 'Prova de Física',
    status: 'Concluída',
    level: 'Difícil',
    subject: 'Física',
    questions: [
      {
        id: '1',
        question: 'Qual é a fórmula da velocidade?',
        value: 2.0,
      },
      {
        id: '2',
        question: 'O que é a força gravitacional?',
        value: 3.5,
      },
      {
        id: '3',
        question: 'Qual é a unidade de medida da corrente elétrica?',
        value: 4.0,
      },
      {
        id: '4',
        question: 'O que é a energia cinética?',
        value: 5.0,
      },
    ],
  },
  {
    id: '7',
    date: '25/03/2022',
    class: '12º G',
    content: 'Prova de Química',
    status: 'Pendente',
    level: 'Médio',
    subject: 'Química',
    questions: [
      {
        id: '1',
        question: 'Qual é o símbolo químico do ouro?',
        value: 1.5,
      },
      {
        id: '2',
        question: 'O que é uma reação endotérmica?',
        value: 2.0,
      },
      {
        id: '3',
        question: 'Qual é o pH da água pura?',
        value: 3.0,
      },
      {
        id: '4',
        question: 'O que é uma ligação iônica?',
        value: 2.5,
      },
    ],
  },
  {
    id: '8',
    date: '15/04/2022',
    class: '6º H',
    content: 'Prova de Biologia',
    status: 'Ativa',
    level: 'Fácil',
    subject: 'Biologia',
    questions: [
      {
        id: '1',
        question: 'O que é DNA?',
        value: 1.0,
      },
      {
        id: '2',
        question: 'O que é uma célula?',
        value: 2.0,
      },
      {
        id: '3',
        question: 'Qual é a função do ribossomo?',
        value: 3.5,
      },
      {
        id: '4',
        question: 'O que é a membrana celular?',
        value: 4.0,
      },
    ],
  },
  {
    id: '9',
    date: '30/04/2022',
    class: '7º I',
    content: 'Prova de Literatura',
    status: 'Concluída',
    level: 'Difícil',
    subject: 'Literatura',
    questions: [
      {
        id: '1',
        question: 'Quem escreveu "Dom Casmurro"?',
        value: 2.0,
      },
      {
        id: '2',
        question: 'O que é um soneto?',
        value: 3.0,
      },
      {
        id: '3',
        question: 'Qual é a principal obra de Machado de Assis?',
        value: 4.5,
      },
      {
        id: '4',
        question: 'Quem é o autor de "Grande Sertão: Veredas"?',
        value: 5.0,
      },
    ],
  },
  {
    id: '10',
    date: '10/05/2022',
    class: '8º J',
    content: 'Prova de Filosofia',
    status: 'Ativa',
    level: 'Médio',
    subject: 'Filosofia',
    questions: [
      {
        id: '1',
        question: 'Quem foi Sócrates?',
        value: 2.0,
      },
      {
        id: '2',
        question: 'O que é a ética?',
        value: 2.5,
      },
      {
        id: '3',
        question: 'Qual é a obra mais famosa de Platão?',
        value: 3.0,
      },
      {
        id: '4',
        question: 'O que é metafísica?',
        value: 3.5,
      },
    ],
  },
];

export default examContent;
