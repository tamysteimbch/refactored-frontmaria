import GridItem from './components/GridItem';
import { Input, Select, Checkbox } from '@chakra-ui/react';

export default function AddNewExam() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      <GridItem label="Data da prova">
        <Input id="prova" placeholder="Select Date and Time" size="md" type="datetime-local" />
      </GridItem>

      <GridItem label="Turma">
        <Select placeholder="Selecione a Turma">
          <option value="option1">6o A</option>
          <option value="option2">6o B</option>
          <option value="option3">7o A</option>
        </Select>
      </GridItem>

      <GridItem label="Matéria">
        <Select placeholder="Selecione a Matéria">
          <option value="option1">Historia</option>
          <option value="option2">Geografia</option>
          <option value="option3">Filosofia</option>
        </Select>
      </GridItem>

      <GridItem label="Conteúdo" className="lg:col-span-2">
        <Input placeholder="Ex: Egito" />
      </GridItem>

      <GridItem label="Dificuldade">
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

      <GridItem label="Cabeçalho" className="lg:col-span-2">
        <Select placeholder="Selecione a Escola">
          <option value="option1">Escola Tarcila do Amaral</option>
        </Select>
      </GridItem>

      <div className="flex flex-col gap-2 mt-2 mb-2 lg:justify-normal lg:items-start lg:col-span-1 md:col-span-2 md:justify-center md:items-center md:mb-8">
        <Checkbox colorScheme="blackAlpha">Gerar Gabarito</Checkbox>

        <Checkbox colorScheme="blackAlpha">Compartilhar com outros professores</Checkbox>
      </div>

      <button
        type="button"
        className="p-4 border-2 border-secondary w-1/3 mx-auto text-secondary font-bold rounded-2xl hover:bg-secondary hover:text-white lg:col-span-2"
      >
        Limpar
      </button>

      <button
        type="button"
        className="p-4 bg-[#31C456] hover:bg-[#218339] text-white rounded-2xl w-3/4 mx-auto"
      >
        Criar prova
      </button>
    </div>
  );
}
