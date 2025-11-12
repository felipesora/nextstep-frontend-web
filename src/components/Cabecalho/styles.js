import styled from "styled-components";

export const CabecalhoContainer = styled.header`
    background: var(--card);
    padding: 18px 30px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CabecalhoConteudoPagina = styled.div`
    h1 {
        font-size: 1.5rem;
        font-weight: 700;
    }
     p {
        color: #8C8C9A;
        font-size: 0.9rem;
        margin-top: 4px;
    }
`

export const ContainerUserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const UserAvatar = styled.div`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: var(--cor-principal);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
`