import { api } from "@/lib/axios";

interface UadateProfileBody {
  name: string;
  description: string | null;
}
export async function upadateProfile({ name, description }: UadateProfileBody) {
  await api.put("/profile", { name, description });
}
