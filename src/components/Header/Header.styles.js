import styled from "styled-components";

export const HeaderWrapper = styled.nav`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
  padding: 0 2rem; // isso define a margem lateral externa total
  gap: 1rem; /* ajuda no respiro geral */
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const Brand = styled.a`
  font-size: ${({ theme }) => theme.spacing.xl};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const SearchForm = styled.form`
  flex-grow: 1;
  max-width: 600px;
  margin: 0 auto; /* ← centraliza dentro do container */
  flex-grow: 1; /* ← ocupa espaço sem empurrar os outros */
  padding: 0 2rem; /* ← respiro lateral */

  input {
    flex: 1;
    min-width: 0;
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
  }

  button {
    border-color: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.primary};
    white-space: nowrap;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.buttonHover};
      color: ${({ theme }) => theme.colors.textLight};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: 0;
  }
`;

export const UserActions = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-shrink: 0;
`;

export const ActionLink = styled.a`
  font-size: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;

export const CartLink = styled(ActionLink)`
  position: relative;
  display: flex;
  align-items: center;
`;

export const CartCount = styled.span`
  font-size: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  margin-left: 4px;
`;
