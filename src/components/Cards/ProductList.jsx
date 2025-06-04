import { productImages } from "../../utils/images";
import {
  AddToCartButton,
  Card,
  ContainerPrimary,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductsGrid,
  Title,
} from "./ProductCard.style";

const products = [
  {
    id: 1,
    name: "Vela Lavanda",
    price: "R$ 49,90",
    image: productImages.velaLavanda,
  },
  {
    id: 2,
    name: "Kit Velas Lavanda e Flor de Laranjeira",
    price: "R$ 79,90",
    image: productImages.imgCaixa2,
  },
  {
    id: 3,
    name: "Vela Lavanda - vaso ceramica",
    price: "R$ 59,90",
    image: productImages.imgRosa,
  },
  {
    id: 4,
    name: "Vela Flor de Laranjeira",
    price: "R$ 49,90",
    image: productImages.velaFlorDeLaranjeira,
  },
  {
    id: 5,
    name: "Vela Rosas do Campo",
    price: "R$ 49,90",
    image: productImages.velaRosasDoCampo,
  },
  {
    id: 6,
    name: "Kit Velas: Lavanda, Flor de Laranjeira e Baunilha",
    price: "R$ 99,90",
    image: productImages.imgCaixa3,
  },
];

function ProductList() {
  return (
    <ContainerPrimary>
      <Title>Produtos em Destaque</Title>
      <ProductsGrid>
        {products.map((product) => (
          <Card key={product.id}>
            <ProductInfo>
              <ProductImage src={product.image} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
              <AddToCartButton>
                Adicionar ao carrinho <i className="bi bi-cart-check"></i>
              </AddToCartButton>
            </ProductInfo>
          </Card>
        ))}
      </ProductsGrid>
    </ContainerPrimary>
  );
}

export default ProductList;
