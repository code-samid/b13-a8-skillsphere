import { getUser } from "@/lib/getUser";

export default async function Profile() {
  const user = await getUser();

  return (
    <div className="p-4">
      <img src={user.image} className="w-24 rounded-full"/>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}