import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-surface">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-brand-secondary">404</h1>
        <p className="text-xl text-brand-text mb-4">Oops! Página não encontrada</p>
        <a href="/" className="text-brand-primary hover:text-brand-primary/80 underline transition-colors">
          Voltar ao Início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
