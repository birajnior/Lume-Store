import styled from "styled-components";

// Container principal com espaçamento, sombra e cantos arredondados
export const InfoContainer = styled.section`
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

// Título principal do produto
export const ProductTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primaryDark || "#333"};
`;

// Preço destacado com tamanho grande
export const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary || "#222"};
  margin: 1rem 0;
`;


// Blocos de informação sobre envio, estoque etc.
export const DetailInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #444;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;

  svg {
    color: #6c757d;
  }
`;

// Área de botões de ação
export const ActionButtons = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  button {
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 0.5rem;
  }
`;
