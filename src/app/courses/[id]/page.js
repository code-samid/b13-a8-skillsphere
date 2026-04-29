import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";
import courses from "@/data/courses.json";

export default async function Page({ params }) {
  const user = await getUser();

  if (!user) {
    redirect(`/login?redirect=/courses/${params.id}`);
  }

  const course = courses.find(c => c.id == params.id);

  return (
    <div className="p-4">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
}