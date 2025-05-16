import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem 0;
  box-shadow: 0 2px 4px rbga(0, 0, 0, 0.5);
`;

export const Brand = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const NavLinkWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style-type: none;
  margin: 10px;
  padding: 0;
  height: 100%;

  .nav-link {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 0.5rem;

  input {
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 0.5rem;
    borde: 1px solid ${({ theme }) => theme.colors.border};
  }
  button {
    border-color: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.buttonHover};
      color: ${({ theme }) => theme.colors.textLight};
    }
  }
`;
