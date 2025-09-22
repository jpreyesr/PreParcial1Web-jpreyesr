import { Author } from "../../types/author";
import AuthorCard from "./AuthorCard";

interface AuthorListProps {
  authors: Author[];
  setAuthors: (authors: Author[]) => void; 
}

export default function AuthorList({ authors, setAuthors }: AuthorListProps) {
  const handleDelete = async (id: number) => {
    const response = await fetch(`http://127.0.0.1:8080/api/authors/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setAuthors(authors.filter((a) => a.id !== id)); 
    } else {
      alert("No se pudo eliminar el autor");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {authors.map((author) => (
        <AuthorCard
          key={author.id}
          {...author}
          onDelete={handleDelete} 
        />
      ))}
    </div>
  );
}