import { cookies } from "next/headers";
import { auth } from "./auth";

export async function getUser() {
  const session = await auth.api.getSession({
    headers: {
      cookie: cookies().toString()
    }
  });

  return session?.user || null;
}