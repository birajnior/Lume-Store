import styled from "styled-components";

export const CategoriasWrapper = styled.nav`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: ${({ theme }) => theme.spacing.md};
  }
`;

export const CategoriasLink = styled.a`
  font-weight: 600;
  font-size: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  padding-bottom: 4px;
  position: relative;
  transition: color 0.3s ease, border-bottom 0.3s ease;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.primary};

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.colors.primary};
      transition: width 0.3s ease;
    }
  }
`;
