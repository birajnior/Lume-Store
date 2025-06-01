import styled from "styled-components";

export const TabsContainer = styled.div`
  margin-top: 3rem;
  border-top: 1px solid #ddd;
`;

export const TabButtons = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
`;

export const TabButton = styled.button`
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "#222" : "#777")};
  border-color: ${({ $active }) => ($active ? "#222" : "transparent")};
  transition: all 0.3s ease;

  &:hover {
    color: #000;
  }
`;

export const TabContent = styled.div`
  padding: 1rem 0;
  line-height: 1.6;
`;
