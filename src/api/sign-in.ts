import { api } from "@/lib/axios";

export interface singInBody {
  email: string;
}
export async function signIn({ email }: singInBody) {
  await api.post("/authenticate", { email });
}
