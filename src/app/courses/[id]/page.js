import { getUser } from "@/lib/getUser";
import courses from "@/data/courses.json";
import Link from "next/link";

export default async function Page({ params }) {
  const { id } = await params; // 🔥 FIX 1

  const user = await getUser(); // optional now

  const course = courses.find(c => c.id === Number(id)); // 🔥 FIX 2

  if (!course) {
    return <div className="p-4">Course not found</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <p>{course.description}</p>

      {/* 🔥 LOGIN-BASED ACTION */}
      {user ? (
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Enroll Now
        </button>
      ) : (
        <Link href={`/login?redirect=/courses/${id}`}>
          <button className="bg-yellow-500 px-4 py-2 rounded">
            Login to Enroll
          </button>
        </Link>
      )}
    </div>
  );
}