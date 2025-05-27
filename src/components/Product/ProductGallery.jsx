import { useState } from "react";
import { GalleryWrapper, MainImage, Thumbnails } from "./ProductGallery.styles";
import vela1 from "../../images/vela1.jpg";
import vela2 from "../../images/vela2.jpg";
import vela3 from "../../images/vela3.jpg";


const images = [
  { src: vela1, alt: "Vela aromática" },
  { src: vela2, alt: "Vela aromática" },
  { src: vela3, alt: "Vela aromática" },
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
