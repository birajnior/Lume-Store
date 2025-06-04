// src/components/Cards/RelatedProductsSection.jsx
import {
  ProductsGrid,
  RelatedSection,
  SectionTitle,
} from "./RelatedProductsSection.style";
import ProductCardItem from "./ProductCardItem";

const RelatedProductsSection = ({ products = [] }) => {
  return (
    <RelatedSection>
      <SectionTitle>Produtos Relacionados</SectionTitle>
      <ProductsGrid>
        {products.map((product) => (
          <ProductCardItem key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </RelatedSection>
  );
};

export default RelatedProductsSection;
