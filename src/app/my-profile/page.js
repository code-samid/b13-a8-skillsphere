import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Profile() {
  const user = await getUser();

  if (!user) {
    redirect("/login?redirect=/my-profile");
  }

  return (
    <div className="px-4 py-10">
      <div className="max-w-md mx-auto border rounded-2xl p-6 text-center space-y-4">
        <img
          src={user.image}
          className="w-24 h-24 rounded-full mx-auto"
        />

        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p>{user.email}</p>

        <Link href="/my-profile/update">
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Edit Profile
          </button>
        </Link>
      </div>
    </div>
  );
}