import styled from "styled-components";

export const ContainerBarraLateral = styled.div`
    width: 260px;
    background: var(--card);
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
    padding: 25px 0;
    transition: all 0.3s;
    z-index: 100;
    @media (max-width: 1024px) {
        width: 80px;
    }
`

export const LogoContainer = styled.div`
    padding: 0 25px 25px;
    border-bottom: 1px solid #E6E9EF;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    gap: 12px;
    img {
        width: 150px;
        height: auto;
    }
    @media (max-width: 1024px) {
        justify-content: center;
        padding: 0 15px 25px;
    }
`

export const MenuBarraLateral = styled.ul`
    list-style: none;
    padding: 0 15px;
`

export const ItemMenu = styled.li`
    padding: 0;
    list-style: none;

    a {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px 15px;
        border-radius: 8px;
        color: var(--cor-texto-principal);
        font-weight: 500;
        text-decoration: none;
        transition: all 0.3s;

        &:hover {
            background: rgba(0, 120, 255, 0.08);
            color: var(--cor-principal);
        }

        i {
            width: 20px;
            text-align: center;
        }
    }
`;