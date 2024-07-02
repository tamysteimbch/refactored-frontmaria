import React, { useState } from 'react';
import Image from 'next/image';
import FlaviaImg from '@/assets/image.png';
import ProfileInfoItem from './ProfileInfoItem';
import { useAppSelector } from '@/lib/hooks';

export default function ProfileInfo() {
  const user = useAppSelector((state) => state).me.me;

  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(FlaviaImg.src);
  const [name, setName] = useState(user.name);
  const [lastName, setLastName] = useState(user.lastName);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);

  return (
    <div className="flex md:justify-start justify-center text-center md:text-left md:items-start items-center md:flex-row flex-col md:gap-0 gap-8 mt-12">
      <div className="w-full md:w-[30%] relative">
        <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" />
        <div className="flex flex-col items-center">
          {selectedImage && (
            <Image src={selectedImage as string} alt="Flávia" width={200} height={200} />
          )}
        </div>
      </div>

      <div className="w-full md:w-[70%] md:px-4 p-0">
        <h2 className="text-primary text-3xl">Informações pessoais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <ProfileInfoItem
            title="Nome"
            value={name}
            setValue={setName}
            lastName={lastName}
            setLastName={setLastName}
            id={user._id}
          />
          <ProfileInfoItem title="Phone" value={phone} setValue={setPhone} id={user._id} />
          <ProfileInfoItem title="Email" value={email} setValue={setEmail} id={user._id} />
        </div>
      </div>
    </div>
  );
}
