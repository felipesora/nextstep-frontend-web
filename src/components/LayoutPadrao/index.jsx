import styled from "styled-components";
import { Outlet } from "react-router-dom";
import BarraLateral from "../BarraLateral";

const Container = styled.div`
    display: flex;
    min-height: 100vh;
`;

const Conteudo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const LayoutPadrao = () => {
  return (
    <Container>
      <BarraLateral />
      <Conteudo>
        {/* Onde as páginas internas serão renderizadas */}
        <Outlet />
      </Conteudo>
    </Container>
  );
};

export default LayoutPadrao;