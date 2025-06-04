import {
  ProductsGrid,
  RelatedSection,
  SectionTitle,
} from "./RelatedProductsSection.style";
import ProductCard from "./ProductCard";

const RelatedProductsSection = ({ products = [] }) => {
  return (
    <RelatedSection>
      <SectionTitle>Produtos Relacionados</SectionTitle>
      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </RelatedSection>
  );
};

export default RelatedProductsSection;
