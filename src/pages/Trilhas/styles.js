import styled from "styled-components";

export const ConteudoPagina = styled.div`
    padding: 30px;
    flex: 1;
    @media (max-width: 768px) {
        padding: 20px;
    }
`

export const ContainerFiltro = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 15px;
        align-items: stretch;
    }
`

export const FiltroInput = styled.div`  
    display: flex;
    align-items: center;
    background: var(--card);
    border-radius: 8px;
    padding: 8px 16px;
    width: 300px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    input {
        border: none;
        background: transparent;
        padding: 8px;
        width: 100%;
        outline: none;
        color: var(--cor-texto-principal);
        @media (max-width: 768px) {
            width: 100%;
        }
    }
`

export const FiltroSelects = styled.div`
    display: flex;
    gap: 12px;
    select {
        padding: 10px 16px;
        border: 1px solid #E6E9EF;
        border-radius: 8px;
        background: var(--card);
        color: var(--cor-texto-principal);
        outline: none;
        cursor: pointer;
        @media (max-width: 768px) {
            justify-content: space-between;
        }
    }
`

export const ContainerBotoesFiltro = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 24px;
    gap: 10px;
    
    .btn{
        padding: 10px 20px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 0.95rem;
        font-family: var(--fonte-principal);
    }
    
    .btn_filtrar {
        background: var(--cor-principal);
        color: white;
        box-shadow: 0 2px 8px rgba(0, 120, 255, 0.2);
        
        &:hover{
            background: #0066d4;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 120, 255, 0.3);
        }
        
        &:active {
            transform: translateY(0);
            box-shadow: 0 2px 4px rgba(0, 120, 255, 0.2);
        }
    }
    
    .btn_limpar_filtro {
        background: transparent;
        border: 2px solid #E6E9EF;
        color: #6B7280;
        font-weight: 500;
        
        &:hover {
            background: #F8FAFC;
            border-color: #CBD5E1;
            color: #475569;
            transform: translateY(-1px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        &:active {
            transform: translateY(0);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
    }
`

export const ContainerBotaoAdicionar = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 24px;
    gap: 10px;
    
    .btn{
        padding: 12px 20px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 0.95rem;
        font-family: var(--fonte-principal);
    }
    
    .btn_adicionar {
        background: linear-gradient(135deg, var(--cor-secundaria), #8A84FF);
        color: white;
        box-shadow: 0 4px 12px rgba(108, 99, 255, 0.3);
        
        &:hover{
            background: linear-gradient(135deg, #5A54FF, #8A84FF);
            transform: translateY(-1px);
            box-shadow: 0 8px 20px rgba(108, 99, 255, 0.4);
        }
        
        &:active {
            transform: translateY(-1px) scale(1.01);
            box-shadow: 0 4px 12px rgba(108, 99, 255, 0.3);
        }
    }
`

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`