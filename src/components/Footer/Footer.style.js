// src/styles/FooterStyles.js
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.button};
  padding: 3rem 0 1rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.text};

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  h5 {
    font-size: 1.1rem;
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const BottomBar = styled.div``;

export const LinkList = styled.div``;
