import GridItem from './components/GridItem';
import { Input, Select, Checkbox, Textarea } from '@chakra-ui/react';
import { ExamContent } from '@/constants/examContent';
import { useState } from 'react';
import { toast } from 'react-toastify';
interface AddNewQuestionProps {
  examContent?: ExamContent;
  isEdit?: boolean;
  onCloseEdit?: () => void;
}

export default function AddNewQuestion({ examContent, isEdit, onCloseEdit }: AddNewQuestionProps) {
  const initialData: ExamContent = {
    id: 0,
    level: '',
    description: '',
    hasImage: false,
    color: '',
  };

  const [data, setData] = useState<ExamContent>(examContent ? examContent : initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      <GridItem label="Enunciado" className="lg:col-span-3 md:col-span-3 col-span-3">
        <Textarea
          id="description"
          placeholder="Digite o enunciado da questão"
          size="md"
          cols={20}
          rows={6}
          onChange={handleChange}
          value={data.description}
        />
      </GridItem>

      <GridItem label="">
        <Checkbox colorScheme="blackAlpha">Questão de múltipla escolha</Checkbox>
      </GridItem>

      <GridItem label="" className="lg:col-span-2 md:col-span-2 col-span-2">
        <Checkbox colorScheme="blackAlpha">Compartilhar com outros professores</Checkbox>
      </GridItem>

      <GridItem label="Conteúdo" className="col-span-3 md:col-span-1">
        <Input placeholder="Ex: Egito" />
      </GridItem>

      <GridItem label="Turma" className="col-span-3 md:col-span-1">
        <Select placeholder="Selecione a Turma">
          <option value="option1">6o A</option>
          <option value="option2">6o B</option>
          <option value="option3">7o A</option>
        </Select>
      </GridItem>

      <GridItem label="Matéria" className="col-span-3 md:col-span-1">
        <Select placeholder="Selecione a Matéria">
          <option value="option1">Historia</option>
          <option value="option2">Geografia</option>
          <option value="option3">Filosofia</option>
        </Select>
      </GridItem>

      <GridItem label="Dificuldade" className="col-span-3 md:col-span-1">
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="bg-[#31C456] text-white p-4 rounded-xl rounded-r-none hover:bg-[#218339]"
          >
            Facil
          </button>
          <button type="button" className="bg-[#FBCB23] text-white p-4 hover:bg-[#E0A21D]">
            Medio
          </button>
          <button
            type="button"
            className="bg-[#E74C3C] text-white p-4 rounded-xl rounded-l-none hover:bg-[#C73A2B]"
          >
            Dificil
          </button>
        </div>
      </GridItem>

      <GridItem label="Imagem" className="lg:col-span-2 md:col-span-2 col-span-3">
        <div className="mt-5">
          <label
            htmlFor="image-upload"
            className="bg-secondary text-white p-2 rounded-lg cursor-pointer"
          >
            Adicionar imagem
          </label>
          <Input type="file" accept="image/*" display="none" id="image-upload" />
        </div>
      </GridItem>

      <div className="flex items-center justify-between col-span-3 gap-4 mt-8">
        <button
          type="button"
          className="p-4 border-2 border-secondary w-1/4 mx-auto text-secondary font-bold rounded-2xl hover:bg-secondary hover:text-white lg:col-span-2"
          onClick={() => setData(initialData)}
        >
          Limpar
        </button>

        <button
          type="button"
          className="p-4 bg-[#31C456] hover:bg-[#218339] text-white rounded-2xl w-1/3 mx-auto"
          onClick={() => {
            if (isEdit) {
              if (examContent) {
                examContent = data;
                toast.success('Questão editada com sucesso');
                if (examContent && examContent.id) {
                  examContent.id = examContent.id + 1;
                }
              }
              if (examContent) {
                examContent = data;
              }
              onCloseEdit && onCloseEdit();
              return;
            }
          }}
        >
          {isEdit ? 'Editar questão' : 'Criar questão'}
        </button>
      </div>
    </div>
  );
}
