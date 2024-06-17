import React, { useState } from 'react';
import Image from 'next/image';
import FlaviaImg from '@/assets/image.png';
import { toast } from 'react-toastify';
import ProfileInfoItem from './ProfileInfoItem';

export default function ProfileInfo() {
  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(FlaviaImg.src);
  const [name, setName] = useState('Flávia da Silva');
  const [phone, setPhone] = useState('+55 (41) 99999-9999');
  const [email, setEmail] = useState('flavia@escola.edu.br');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
      toast.success('Imagem alterada com sucesso!');
    }
  };

  return (
    <div className="flex md:justify-start justify-center text-center md:text-left md:items-start items-center md:flex-row flex-col md:gap-0 gap-8 mt-12">
      <div className="w-full md:w-[30%] relative">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
        <div className="flex flex-col items-center">
          {selectedImage && (
            <Image src={selectedImage as string} alt="Flávia" width={200} height={200} />
          )}
          <p className="text-center text-primary mt-2">Editar</p>
        </div>
      </div>

      <div className="w-full md:w-[70%] md:px-4 p-0">
        <h2 className="text-primary text-3xl">Informações pessoais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <ProfileInfoItem title="Nome" value={name} setValue={setName} />
          <ProfileInfoItem title="Telefone" value={phone} setValue={setPhone} />
          <ProfileInfoItem title="E-mail" value={email} setValue={setEmail} />
        </div>
      </div>
    </div>
  );
}
