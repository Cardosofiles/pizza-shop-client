import { ArrowRight, Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";

export function OerderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        231as32d1as321da
      </TableCell>

      <TableCell className="text-muted-foreground">Há 15 minutus</TableCell>

      <TableCell className="">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          <span className="text-foreground">Pendente</span>
        </div>
      </TableCell>

      <TableCell className="font-medium">João Batista</TableCell>

      <TableCell className="">
        <span className="text-sm font-medium text-gray-500">R$ 320,00</span>
      </TableCell>

      <TableCell className="">
        <Button variant="outline" size="xs">
          <ArrowRight className="h-3 w-3 mr-2" />
          Aprovar
        </Button>
      </TableCell>

      <TableCell className="">
        <Button variant="ghost" size="xs">
          <X className="h-3 w-3 mr-2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}
