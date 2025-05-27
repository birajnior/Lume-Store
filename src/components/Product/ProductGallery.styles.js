import styled from "styled-components";

export const GalleryWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
`;

export const MainImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  object-fit: cover;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Thumbnails = styled.div`
  display: flex;
  gap: 0.5rem;

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius};
    cursor: pointer;
    opacity: 0.6;
    border: 2px solid transparent;
    transition: border 0.3s ease, opacity 0.3s ease;

    &.active {
      opacity: 1;
      border-color: ${({ theme }) => theme.colors.primary};
    }

    &:hover {
      opacity: 1;
    }
  }
`;
