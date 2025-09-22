'use client';
import { Author } from "../../types/author";
import AuthorCard from "./AuthorCard";

interface AuthorListProps {
  authors: Author[];
}

export default function AuthorList({ authors }: AuthorListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {authors.map((author) => (
        <AuthorCard key={author.id} {...author} />
      ))}
    </div>
  );
}