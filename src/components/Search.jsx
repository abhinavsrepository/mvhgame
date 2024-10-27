"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export default function Search() {
  const handeSearch = (event) => {};

  return (
    <form onSubmit={handleSearch} className="relative flex-1 max-w-md mx-auto">
        <MagnifyingGlassIcon className="absolute left-2.5 top-2.5 h-5 w-5 text-slate-400" />
      Search
    </form>
  );
}
