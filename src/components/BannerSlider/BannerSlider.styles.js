import styled from "styled-components";

export const images = [
  "imagens/produto1.svg",
  "imagens/produto2.svg",
  "imagens/produto3.svg",
  "imagens/produto4.svg",
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
