import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { registerRestaurant } from "@/api/register-restaurant";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";

const signUpFromValidation = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

type SignUpFromType = z.infer<typeof signUpFromValidation>;

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFromType>();

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant,
  });

  async function handleSingUp(data: SignUpFromType) {
    try {
      await registerRestaurantFn({
        restaurantName: data.restaurantName,
        managerName: data.managerName,
        phone: data.phone,
        email: data.email,
      });

      toast.success("Restaurante cadastrado com sucesso.", {
        duration: 3000,
        position: "bottom-right",
        action: {
          label: "Login",
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      });
    } catch {
      toast.error("Erro ao cadastrar restaurante.", {
        duration: 3000,
        position: "bottom-right",
      });
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />

      <div className="p-8">
        <div className="absolute flex items-center gap-2 right-4 top-8">
          <ThemeToggle />
          <Button variant="outline" asChild>
            <Link to="/sign-in">Fazer login</Link>
          </Button>
        </div>
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleSingUp)}
            className="flex flex-col gap-4"
          >
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register("restaurantName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register("managerName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input id="phone" type="tel" {...register("phone")} />
            </div>

            <Button type="submit" disabled={isSubmitting}>
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{" "}
              <a href="" className="underline underline-offset-4">
                Temos de Serviços
              </a>{" "}
              e{" "}
              <a href="" className="underline underline-offset-4">
                Polìticas de Privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
