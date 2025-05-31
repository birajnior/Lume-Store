import ProductInfo from "../components/Product/ProductInfo";

import ProductGallery from "../components/Product/ProductGallery";
// import RatingStars from "../components/Product/RatingStars";
import ProductTabs from "../components/Product/ProductTabs";

function Product() {
  return (
    <main className="container py-5">
      <section className="row gx-5">
        {/* Coluna da galeria de imagens */}
        <div className="col-md-6 mb-4">
          <ProductGallery />
        </div>

        {/* Coluna das informações do produto */}
        <div className="col-md-6">
          <ProductInfo />

          {/* Avaliação do produto */}
          {/* <div className="mt-3">
            <RatingStars rating={4.5} totalReviews={132} />
          </div> */}
        </div>

        <ProductTabs />
      </section>
    </main>
  );
}

export default Product;
