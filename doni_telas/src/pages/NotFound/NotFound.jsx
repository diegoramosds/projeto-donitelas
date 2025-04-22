import { HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <Link to="/">
        <button>
          <HomeIcon /> Voltar para Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
