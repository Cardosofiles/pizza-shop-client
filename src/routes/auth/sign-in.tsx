import { useMutation } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { signIn } from "@/api/sign-in";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const signInFromValidation = z.object({
  email: z.string().email(),
});

type SignInFromType = z.infer<typeof signInFromValidation>;

export function SignIn() {
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFromType>({
    defaultValues: {
      email: searchParams.get("email") ?? "",
    },
  });

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  });

  async function handleSingIn(data: SignInFromType) {
    try {
      await authenticate({ email: data.email });

      toast.success("Enviamos um link de autenticação para seu e-mail.", {
        duration: 3000,
        position: "bottom-right",
        action: {
          label: "Reenviar",
          onClick: () => {
            // Reenviar link de autenticação
            toast.success("Link de autenticação reenviado.", {
              duration: 3000,
              position: "bottom-right",
            });
          },
        },
      });
    } catch {
      toast.error("Insira um e-mail válido para autenticação.", {
        duration: 3000,
        position: "bottom-right",
      });
    }
  }

  return (
    <>
      <Helmet title="Login" />

      <div className="p-8">
        <div className="absolute flex items-center gap-2 right-4 top-8">
          <ThemeToggle />
          <Button variant="outline" asChild>
            <Link to="/sign-up">Novo estabelecimento</Link>
          </Button>
        </div>
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleSingIn)}
            className="flex flex-col gap-4"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
