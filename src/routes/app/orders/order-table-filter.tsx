import { zodResolver } from "@hookform/resolvers/zod";
import { Search, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const orderFilterSchama = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional(),
  // startDate: z.date().optional(),
  // endDate: z.date().nullable(),
  // storeName: z.string().nullable(),
  // managerName: z.string().nullable(),
  // productName: z.string().nullable(),
  // category: z.string().nullable(),
  // quantity: z.number().nullable(),
  // price: z.number().nullable(),
  // total: z.number().nullable(),
  // paymentMethod: z.string().nullable(),
  // paymentStatus: z.string().nullable(),
  // deliveryDate: z.date().nullable(),
  // deliveryFee: z.number().nullable(),
  // deliveryAddress: z.string().nullable(),
  // deliveryCity: z.string().nullable(),
  // deliveryState: z.string().nullable(),
  // deliveryZipCode: z.string().nullable(),
  // deliveryPhone: z.string().
});

type OrderFilterSchema = z.infer<typeof orderFilterSchama>;

export function OrderTableFilters() {
  const [searchParameters, setSearchParameters] = useSearchParams();

  const orderId = searchParameters.get("orderId");
  const customerName = searchParameters.get("customerName");
  const status = searchParameters.get("status");

  const { register, handleSubmit, control, reset } = useForm<OrderFilterSchema>(
    {
      resolver: zodResolver(orderFilterSchama),
      defaultValues: {
        orderId: orderId ?? "",
        customerName: customerName ?? "",
        status: status ?? "all",
      },
    }
  );

  function handleFilter({ orderId, customerName, status }: OrderFilterSchema) {
    setSearchParameters((prevState) => {
      if (orderId) {
        prevState.set("orderId", orderId);
      } else {
        prevState.delete("orderId");
      }

      if (customerName) {
        prevState.set("customerName", customerName);
      } else {
        prevState.delete("customerName");
      }

      if (status) {
        prevState.set("status", status);
      } else {
        prevState.delete("status");
      }

      prevState.set("page", "1");

      return prevState;
    });
  }

  function handleClearFilters() {
    setSearchParameters((prevState) => {
      prevState.delete("orderId");
      prevState.delete("customerName");
      prevState.delete("status");
      prevState.set("page", "1");

      return prevState;
    });

    reset({
      orderId: "",
      customerName: "",
      status: "all",
    });
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilter)}
      className="flex items-center gap-2"
    >
      <span className="text-sm font-semibold">Filtros:</span>
      <Input
        placeholder="ID do pedido"
        className="h-8 w-auto"
        {...register("orderId")}
      />
      <Input
        placeholder="Nome do cliente"
        className="h-8 w-[320px]"
        {...register("customerName")}
      />

      <Controller
        name="status"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Select
              defaultValue="all"
              name={name}
              onValueChange={onChange}
              value={value}
              disabled={disabled}
            >
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">Todos status</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="canceled">Cancelado</SelectItem>
                <SelectItem value="processing">Em preparo</SelectItem>
                <SelectItem value="delivering">Em entrega</SelectItem>
                <SelectItem value="delivered">Entregue</SelectItem>
              </SelectContent>
            </Select>
          );
        }}
      />

      <Button type="submit" variant="secondary" size="xs">
        <Search className="w-4 h-4 mr-2" />
        Filtrar resultados
      </Button>

      <Button
        type="button"
        onClick={handleClearFilters}
        variant="outline"
        size="xs"
      >
        <X className="w-4 h-4 mr-2" />
        Remover filtros
      </Button>
    </form>
  );
}
