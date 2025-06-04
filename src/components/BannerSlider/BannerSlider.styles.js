import styled from "styled-components";

export const images = [
  "/assets/images/banners/produto1.svg",
  "/assets/images/banners/produto2.svg",
  "/assets/images/banners/produto3.svg",
  "/assets/images/banners/produto4.svg",
];

export const BannerContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  .slick-slide img {
    width: 100%;
    heigth: 400px;
    object-fit: cover;
    border-radius: 12px;
  }

  .slick-dots li button:before {
    color: #999;
  }

  .slick-dots li.slick-active button:before {
    color: #333;
  }
`;
