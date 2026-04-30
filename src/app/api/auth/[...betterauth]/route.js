import { auth } from "@/lib/auth";

export const GET = auth.handler;
export const POST = auth.handler;









// export async function POST(req) {
//   return Response.json({ message: "Auth endpoint working (stub mode)" });
// }

// export async function GET(req) {
//   return Response.json({ message: "Auth endpoint working (stub mode)" });
// }