import styled from "styled-components";

export const CabecalhoContainer = styled.header`
    background: var(--card);
    padding: 21px 30px;
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
    gap: 12px;
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

export const LogoutButton = styled.button`
    width: 38px;
    height: 38px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: var(--gray);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    font-size: 1.1rem;

    &:hover {
        background: rgba(255, 71, 87, 0.1);
        color: #FF4757;
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }
`