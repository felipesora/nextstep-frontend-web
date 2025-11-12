import styled from "styled-components";

export const ConteudoPagina = styled.div`
    padding: 30px;
    flex: 1;
    @media (max-width: 768px) {
        padding: 20px;
    }
`

export const CardsInformacoes = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`