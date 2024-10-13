import { api } from "@/lib/axios";

export interface singInBody {
  email: string;
}
export async function singIn({ email }: singInBody) {
  await api.post("/authenticate", { email });
}
