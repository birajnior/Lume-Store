// src/components/Cards/ProductCardItem.jsx
import {
  AddToCartButton,
  Card,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
} from "./ProductCard.style";

export default function ProductCardItem({ product }) {
  if (!product) return null; // segurança extra
  return (
    <Card>
      <ProductInfo>
        <ProductImage src={product.image} alt={product.name} />
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
        <AddToCartButton>
          Adicionar ao carrinho <i className="bi bi-cart-check"></i>
        </AddToCartButton>
      </ProductInfo>
    </Card>
  );
}
