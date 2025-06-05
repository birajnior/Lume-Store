import styled from "styled-components";
import Header from "../Header/header";
import Footer from "../Footer/Footer";
import CategoriasBar from "../Categorias/Categorias";
import { Outlet } from "react-router-dom";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

export default function Layout() {
  return (
    <LayoutWrapper>
      <Header />
      <CategoriasBar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutWrapper>
  );
}
