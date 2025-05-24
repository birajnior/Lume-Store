import Slider from "react-slick";
import { BannerContainer, images } from "./BannerSlider.styles";

export const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <BannerContainer style={{ maxWidth: '1480px' }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index + 1}`}/>
          </div>
        ))}
      </Slider>
    </BannerContainer>
  );
};
