import { cookies } from "next/headers";
import { auth } from "./auth";

export async function getUser() {
  const cookieStore = await cookies();

  const session = await auth.api.getSession({
    headers: {
      cookie: cookieStore.toString(),
    },
  });

  return session?.user || null;
}