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
} from "./ProductShowCase.style";

import exemplo from "../../assets/products/exemplo.jpg";

const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Produto ${i + 1}`,
  price: `R$ ${(i + 1) * 10},00`,
  image: exemplo,
  //   image: `https://via.placeholder.com/300x300.png?text=Produto+${i + 1}`,
}));

function ProductShowCase() {
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

export default ProductShowCase;
