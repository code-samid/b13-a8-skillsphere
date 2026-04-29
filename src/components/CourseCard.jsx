import { Button } from "@heroui/react";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="relative border border-gray-400 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition duration-300">
      
      {/* 🔥 Badge */}
      {course.rating >= 4.5 && (
        <span className="absolute top-2 left-2 bg-red-400 text-white text-xs px-3 py-1 rounded-md z-10">
          Popular
        </span>
      )}

      {/* Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-32 sm:h-40 md:h-44 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="sm:text-lg font-semibold text-white line-clamp-1">
          {course.title}
        </h2>

        <p className="text-sm text-gray-400">
          {course.instructor}
        </p>

        <p className="text-sm text-yellow-600 font-medium">
          ⭐ {course.rating}
        </p>

        <Link href={`/courses/${course.id}`} className="mt-auto">
          <Button className="w-full rounded-lg">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}