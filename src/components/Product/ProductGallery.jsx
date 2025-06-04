import { useState } from "react";
import { GalleryWrapper, MainImage, Thumbnails } from "./ProductGallery.styles";
import { productImages } from "../../utils/images";

const images = [
  { src: productImages.vela1, alt: "Vela aromática" },
  { src: productImages.vela2, alt: "Vela aromática" },
  { src: productImages.vela3, alt: "Vela aromática" },
];

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <GalleryWrapper>
      <MainImage
        src={selectedImage.src}
        alt={selectedImage.alt}
        loading="lazy"
      />
      <Thumbnails>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => setSelectedImage(image)}
            className={selectedImage.src === image.src ? "active" : ""}
          />
        ))}
      </Thumbnails>
    </GalleryWrapper>
  );
}
