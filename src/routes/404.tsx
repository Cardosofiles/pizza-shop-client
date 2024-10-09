import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <div className="flex flex-col items-center text-5xl font-bold text-foreground">
        <h1>404</h1>
        <span>Página não encontrada</span>
      </div>
      <div className="text-xl font-medium text-muted-foreground">
        Voltar para o {""}
        <Link
          to="/"
          className="text-xl text-sky-500 dark:text-sky-400 font-medium text-foreground hover:text-foreground-hover"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}
