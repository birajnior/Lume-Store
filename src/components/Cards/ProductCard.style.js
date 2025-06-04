import styled from "styled-components";

export const ContainerPrimary = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.spacing.lg};
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem 1rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Card = styled.article`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProductName = styled.h3`
  font-size: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const AddToCartButton = styled.button`
  max-width: 250px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background-color 0.3s ease;
  margin: 0 auto;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
