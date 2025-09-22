'use client';
import { useRouter } from "next/navigation";
import AuthorForm from "../_components/AuthorForm";

export default function CreateAuthorPage() {
  const router = useRouter();

  const handleAddAuthor = async (newAuthor: {
    name: string;
    birthDate: string;
    description: string;
    image: string;
  }) => {
    const response = await fetch("http://127.0.0.1:8080/api/authors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAuthor),
    });

    if (response.ok) {
      router.push("/authors"); 
    } else {
      alert("No se pudo crear el autor :(");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Crear Autor</h1>
      <AuthorForm onSubmit={handleAddAuthor} />
    </div>
  );
}