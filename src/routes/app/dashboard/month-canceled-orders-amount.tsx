import { X } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MonthCanceledOrdersAmount() {
  return (
    <Card>
      <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <X className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="text-xl font-bold tracking-tight">16</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-900 dark:text-emerald-400">-2%</span> em
          relação ao mês passado
        </p>
        <span className=""></span>
      </CardContent>
    </Card>
  );
}
