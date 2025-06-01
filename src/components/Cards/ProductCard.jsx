import {
  ProductsGrid,
  RelatedSection,
  SectionTitle,
} from "./ProductCard.style";
import ProductShowCase from "./ProductShowCase";

const RelatedProduct = ({ products = [] }) => {
  return (
    <RelatedSection>
      <SectionTitle>Produtos Relacionados</SectionTitle>
      <ProductsGrid>
        {products.map((product) => (
          <ProductShowCase key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </RelatedSection>
  );
};
 
export default RelatedProduct;
