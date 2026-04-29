import courses from "@/data/courses.json";
import HeroSlider from "@/components/HeroSlider";
import CourseCard from "@/components/CourseCard";
import Link from "next/link";

export default function Home() {
  const top = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="space-y-12">
      
      {/* Hero */}
      <HeroSlider />

      {/* Popular Section */}
      <section className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-200">
              Popular Courses
            </h2>

            <div className="mt-2 w-16 h-1 bg-green-600 rounded-full"></div>

            <p className="text-sm text-gray-400 mt-2">
              Learn from top-rated courses
            </p>
          </div>

          <Link
            href="/courses"
            className="text-sm font-medium text-green-600 hover:text-green-700 transition"
          >
            View All →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {top.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>

      </section>

    </div>
  );
}