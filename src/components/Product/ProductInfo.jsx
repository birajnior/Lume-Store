import { ArrowCounterclockwise, Truck } from "react-bootstrap-icons";
import {
  ActionButtons,
  DetailInfo,
  InfoContainer,
  ProductPrice,
  ProductTitle,
} from "./ProductInfo.styles";
import RatingStars from "./RatingStars";
import Button from "react-bootstrap/Button";

export default function ProductInfo() {
  return (
    <InfoContainer aria-label="product-info-title">
      <ProductTitle id="product-info-title">
        Vela Aromática FAN LISE - Sândalo e Camomila
      </ProductTitle>

      <RatingStars rating={4.5} totalReviews={132} />
      {/* Preço em destaque */}
      <ProductPrice>R$ 59,90</ProductPrice>

      {/* Informações adicionais do produto */}
      <DetailInfo>
        <Truck />
        Frete grátis para todo o Brasil
      </DetailInfo>

      <DetailInfo>
        <ArrowCounterclockwise />
        Devolução gratuita em até 7 dias
      </DetailInfo>

      <DetailInfo>
        <strong>Estoque:</strong> Disponível
      </DetailInfo>

      {/* Botões de ação */}
      <ActionButtons>
        <Button variant="dark">Comprar agora</Button>
        <Button variant="outline-dark">Adicionar ao carrinho</Button>
      </ActionButtons>
    </InfoContainer>
  );
}
