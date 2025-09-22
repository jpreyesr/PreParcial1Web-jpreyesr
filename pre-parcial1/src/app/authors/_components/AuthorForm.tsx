'use client';
import { useState, FormEvent } from "react";

interface AuthorFormProps {
  onSubmit: (author: { name: string; birthDate: string; description: string; image: string }) => void;
  initialValues?: { name: string; birthDate: string; description: string; image: string };
}

export default function AuthorForm({ onSubmit, initialValues }: AuthorFormProps) {
  const [name, setName] = useState(initialValues?.name || "");
  const [birthDate, setBirthDate] = useState(initialValues?.birthDate || "");
  const [description, setDescription] = useState(initialValues?.description || "");
  const [image, setImage] = useState(initialValues?.image || "");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ name, birthDate, description, image });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
        className="border p-2 rounded"
        required
      />
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción"
        className="border p-2 rounded"
        required
      />
      <input
        type="url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="URL de la imagen"
        className="border p-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Guardar Cambios
      </button>
    </form>
  );
}