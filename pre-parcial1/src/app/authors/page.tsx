'use client';
import { useEffect, useState } from "react";
import { Author } from "../types/author";
import AuthorList from "./_components/AuthorList";

export default function AuthorsPage() {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/authors")
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Lista de Autores</h1>
      <AuthorList authors={authors} setAuthors={setAuthors} />
    </main>
  );
}