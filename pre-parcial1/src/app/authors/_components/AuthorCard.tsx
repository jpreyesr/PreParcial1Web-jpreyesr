'use client';
import Image from "next/image";
import { Author } from "../../types/author";

export default function AuthorCard({ name, birthDate, description, image }: Author) {
  return (
    <div className="rounded-2xl shadow-md p-4 flex flex-col items-center bg-white hover:shadow-lg transition">
        <Image
            src={image}
            alt={name}
            width={150}
            height={150}
        />
        <h2 className="text-lg font-bold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-700">{birthDate}</p> 
        <p className="text-center text-sm mt-2 text-gray-800">{description}</p>
         
    </div>
  );
}