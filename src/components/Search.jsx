"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    router.push(`/search?q=${searchTerm}`);
  };

  return (
    <form onSubmit={handleSearch} className="relative flex-1 max-w-md mx-auto">
      <MagnifyingGlassIcon className="absolute left-2.5 top-2.5 h-5 w-5 text-slate-400" />
      <input
        type="search"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for games.."
        className="w-full rounded-lg bg-main border border-accent pl-8 pr-4 h-8"
      />
    </form>
  );
}
