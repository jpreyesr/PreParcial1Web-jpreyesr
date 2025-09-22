'use client';
import Image from "next/image";
import { Author } from "../../types/author";
import { useRouter } from "next/navigation";

interface AuthorCardProps extends Author {
  onDelete: (id: number) => void;
}

export default function AuthorCard({ id, name, birthDate, description, image, onDelete }: AuthorCardProps) {
  const router = useRouter();

  return (
    <div className="relative rounded-2xl shadow-md p-4 flex flex-col items-center bg-white hover:shadow-lg transition">
      <Image src={image} alt={name} width={150} height={150} />
      <h2 className="text-lg font-bold text-gray-900">{name}</h2>
      <p className="text-sm text-gray-700">{birthDate}</p>
      <p className="text-center text-sm mt-2 text-gray-800">{description}</p>

      <div className="absolute top-2 right-2 flex flex-col gap-2">
        <button
          className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
          onClick={() => router.push(`/authors/${id}`)}
        >
          Editar
        </button>

        <button
          className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
          onClick={() => onDelete(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}