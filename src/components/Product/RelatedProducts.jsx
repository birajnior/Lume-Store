import { productImages } from "../../utils/images";
import RelatedProductsSection from "../Cards/RelatedProductsSection";

const relatedProducts = [
  {
    id: 101,
    name: "Vela Lavanda",
    price: "R$ 49,90",
    image: productImages.velaLavanda,
  },
  {
    id: 102,
    name: "Kit Velas Lavanda e Flor de Laranjeira",
    price: "R$ 79,90",
    image: productImages.imgCaixa2,
  },
  {
    id: 103,
    name: "Vela Lavanda - vaso ceramica",
    price: "R$ 59,90",
    image: productImages.imgRosa,
  },
];

export default function RelatedProducts() {
  return <RelatedProductsSection products={relatedProducts} />;
}
