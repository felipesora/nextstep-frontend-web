import styled from "styled-components";

export const ContainerCard = styled.div`
    background: var(--card);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    transition: transform 0.3s, box-shadow 0.3s;
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    }
`
export const CabecalhoCard = styled.div`
    padding: 20px;
    border-bottom: 1px solid #E6E9EF;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 90px;
    h2 {
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 8px;
        color: var(--cor-texto-principal);
    }
    div > span {
        display: inline-block;
        padding: 4px 12px;
        background: rgba(108, 99, 255, 0.1);
        color: var(--cor-secundaria);
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
    }
`
export const Status = styled.span`
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    background: ${({ $ativo }) =>
        $ativo ? "rgba(0, 200, 150, 0.15)" : "rgba(255, 71, 87, 0.15)"};
    color: ${({ $ativo }) =>
        $ativo ? "var(--accent)" : "#FF4757"};
`

export const NivelTrilha = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 12px;
    
    /* Cores baseadas no nível */
    background: ${({ $nivel }) => {
        switch($nivel) {
            case 'INICIANTE':
                return 'rgba(34, 197, 94, 0.15)';
            case 'INTERMEDIARIO':
                return 'rgba(234, 179, 8, 0.15)';
            case 'AVANCADO':
                return 'rgba(239, 68, 68, 0.15)';
            default:
                return 'rgba(108, 99, 255, 0.15)';
        }
    }};
    
    color: ${({ $nivel }) => {
        switch($nivel) {
            case 'INICIANTE':
                return '#22c55e';
            case 'INTERMEDIARIO':
                return '#eab308';
            case 'AVANCADO':
                return '#ef4444';
            default:
                return 'var(--cor-secundaria)';
        }
    }};
    
    i {
        font-size: 0.7rem;
    }
`

export const CorpoCard = styled.div`
    padding: 20px;
    p {
        color: #8C8C9A;
        font-size: 0.95rem;
        line-height: 1.5;
        margin-bottom: 20px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`

export const RodapeCard = styled.div`
    padding: 16px 20px;
    background: rgba(245, 247, 250, 0.5);
    border-top: 1px solid #E6E9EF;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ContainerAvaliacao = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    div {
        color: #FFD700;
        display: flex;
        gap: 2px;
    }
    span {
       font-weight: 700;
        color: var(--cor-texto-principal); 
    }
`
export const ContainerBotaoCard = styled.div`
    button {
        padding: 8px 12px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.85rem;
        background: linear-gradient(135deg, var(--cor-secundaria), #8A84FF);
        color: white;
        &:hover{
            background: linear-gradient(135deg, #5A54FF, #8A84FF);
        }
    }
`