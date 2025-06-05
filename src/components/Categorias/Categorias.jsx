import { useState } from "react";
import { CategoriasWrapper, CategoriasLink } from "./Categorias.style";

const CategoriasBar = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Início");
  const categorias = ["Início", "Novidades", "Mais Vendidos", "Promoções"];
  return (
    <CategoriasWrapper>
      {categorias.map((categoria) => (
        <CategoriasLink
          key={categoria}
          href="/"
          onClick={() => setCategoriaAtiva(categoria)}
          className={categoriaAtiva === categoria ? "active" : ""}
        >
          {categoria}
        </CategoriasLink>
      ))}
    </CategoriasWrapper>
  );
};

export default CategoriasBar;
