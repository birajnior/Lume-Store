import { BannerSlider } from "./components/BannerSlider/BannerSlider";
import Header from "./components/Header/header";
import { CategoriasBar } from "./components/Categorias/Categorias";
import ProductCard from "./components/Cards/CardDoProdutos";

function App() {
  return (
    <>
      <Header />
      <CategoriasBar />
      <BannerSlider />
      <ProductCard />
    </>
  );
}

export default App;
