import styled from "styled-components";

export const ContainerCard = styled.div`
    background: var(--card);
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
    transition: transform 0.3s, box-shadow 0.3s;
    &:hover {
        box-shadow: 0 8px 16px rgba(0,0,0,0.08);
    }
`

export const CabecalhoCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
`

export const TituloCard = styled.div`
    font-size: 0.95rem;
    color: #8C8C9A;
    font-weight: 500;
`

export const IconeCard = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
`

export const ValorCard = styled.div`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 8px;
`
