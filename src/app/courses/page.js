"use client";

import courses from "@/data/courses.json";
import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import { Input } from "@heroui/react";

export default function Courses() {
  const [search,setSearch]=useState("");

  const filtered = courses.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-2 py-4 space-y-4 ">
      <Input placeholder="Search..." onChange={e=>setSearch(e.target.value)} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(c => <CourseCard key={c.id} course={c}/>)}
      </div>
    </div>
  );
}