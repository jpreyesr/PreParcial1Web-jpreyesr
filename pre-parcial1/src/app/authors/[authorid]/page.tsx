'use client';
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import AuthorForm from "../_components/AuthorForm";
import { Author } from "../../types/author";

export default function EditAuthorPage() {
  const router = useRouter();
  const { authorId } = useParams();
  const [author, setAuthor] = useState<Author | null>(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/api/authors/${authorId}`)
      .then((res) => res.json())
      .then((data) => setAuthor(data));
  }, [authorId]);

  const handleUpdateAuthor = async (updatedAuthor: Omit<Author, "id">) => {
    const response = await fetch(`http://127.0.0.1:8080/api/authors/${authorId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedAuthor),
    });

    if (response.ok) {
      router.push("/authors");
    } else {
      alert("No se pudo actualizar el autor :(");
    }
  };

  if (!author) return <p>Cargando autor...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Editar Autor</h1>
      <AuthorForm
        onSubmit={handleUpdateAuthor}
        initialValues={{
          name: author.name,
          birthDate: author.birthDate,
          description: author.description,
          image: author.image,
        }}
      />
    </div>
  );
}