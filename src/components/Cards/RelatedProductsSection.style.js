import styled from "styled-components";

export const RelatedSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xxxl};
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  background-color: ${({theme}) => theme.colors.background};
  border-top: 1px solid #ddd;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;