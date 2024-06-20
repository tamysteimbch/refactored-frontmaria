import DetailImage from '@/assets/plantinhaa-Photoroom_prev_ui (1).png';
import Image from 'next/image';
import { ExamContent } from '@/constants/examContent';
import Modal from '@/components/Modal';
import { useDisclosure } from '@chakra-ui/react';
import AddNewQuestion from '@/components/ModalContents/AddNewQuestion';
import { toast } from 'react-toastify';

function truncateText(text: string, maxLength: number): string {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
}

interface CardExamProps extends ExamContent {
  setSelecteds?: (selecteds: number[]) => void;
  selecteds?: number[];
  hasSelected?: boolean;
  isDb?: boolean;
}

export default function CardExam(props: CardExamProps) {
  const isSelected = props.selecteds?.includes(props.id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure();
  const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();
  const examContent: ExamContent = {
    id: props.id,
    level: props.level,
    description: props.description,
    hasImage: props.hasImage,
    color: props.color,
  };

  const handleSelectClick = () => {
    if (props.setSelecteds) {
      if (isSelected) {
        props.setSelecteds(props.selecteds?.filter((id) => id !== props.id) || []);
      } else {
        props.setSelecteds([...(props.selecteds || []), props.id]);
      }
    }
  };

  return (
    <>
      <div className={`pb-10 rounded-lg`} style={{ backgroundColor: props.color }}>
        <div className="flex flex-col justify-between p-4 bg-white h-[16rem] relative rounded-lg text-black">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2 ">
              <h1 className="text-4xl" style={{ color: props.color }}>
                {props.level}
              </h1>
              <p>{truncateText(props.description, 100)}</p>
            </div>

            <div className="flex flex-col gap-2 text-center">
              {!props.hasSelected && (
                <button
                  type="button"
                  className={`${
                    isSelected ? 'bg-red-600 hover:bg-red-800' : 'bg-secondary hover:bg-primary'
                  } text-white p-2 border-[3px] rounded-lg border-white `}
                  onClick={handleSelectClick}
                >
                  {isSelected ? 'Remover' : 'Selecionar'}
                </button>
              )}

              {props.hasImage && <p className="text-[12px]">Contém imagem</p>}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              className="bg-transparent p-2 border-[3px] rounded-lg border-secondary hover:bg-secondary hover:text-white text-[12px]"
              onClick={onOpen}
            >
              Ver mais
            </button>

            {props.isDb && (
              <>
                <button
                  type="button"
                  className="bg-transparent p-2 border-[3px] rounded-lg border-yellow-400 hover:bg-yellow-400 hover:text-black text-[12px]"
                  onClick={onOpenEdit}
                >
                  Editar
                </button>

                <button
                  type="button"
                  className="bg-transparent p-2 border-[3px] rounded-lg border-red-600 hover:bg-red-600 hover:text-white text-[12px]"
                  onClick={onOpenDelete}
                >
                  Deletar
                </button>
              </>
            )}
          </div>

          <div className="absolute bottom-0 right-0">
            <Image src={DetailImage} alt="Detalhes" width={50} height={50} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Modal isOpen={isOpen} onClose={onClose} title="Questão">
            <div>
              <p>{props.description}</p>
            </div>
          </Modal>
        </div>
      )}

      {isOpenEdit && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Modal
            isOpen={isOpenEdit}
            onClose={onCloseEdit}
            title="Editar questão"
            description="Aqui você pode editar sua nova questão, compartilha-la com outros professores (opcional) e definir qual o seu grau de dificuldade!"
          >
            <AddNewQuestion examContent={examContent} isEdit={true} onCloseEdit={onCloseEdit} />
          </Modal>
        </div>
      )}

      {isOpenDelete && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Modal
            isOpen={isOpenDelete}
            onClose={onCloseDelete}
            title="Deletar"
            description="Tem certeza que deseja deletar essa questão?"
          >
            <div className="flex justify-center gap-12">
              <button
                type="button"
                className="bg-transparent p-2 text-[24px] border-[3px] rounded-lg border-secondary hover:bg-secondary hover:text-white"
                onClick={onCloseDelete}
              >
                Cancelar
              </button>

              <button
                type="button"
                className="bg-transparent p-2 border-[3px] rounded-lg border-red-600 hover:bg-red-600 hover:text-white text-[24px]"
                onClick={() => {
                  onCloseDelete();
                  toast.success('Questão deletada com sucesso!');
                }}
              >
                Deletar
              </button>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
}
