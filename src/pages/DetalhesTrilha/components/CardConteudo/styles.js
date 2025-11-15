import styled from "styled-components";

export const ContainerEtapa = styled.div`
    position: relative;
    margin-bottom: 30px;
    padding-left: 40px;
    .step-number {
        position: absolute;
        left: 0;
        top: 0;
        width: 30px;
        height: 30px;
        background: var(--cor-principal);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 0.9rem;
    }
`

export const ContainerCardConteudo = styled.div`
    background: var(--card);
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    transition: transform 0.3s, box-shadow 0.3s;
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 16px rgba(0,0,0,0.1);
    }
`

export const ConteudoCabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;
    h3 {
        font-size: 1.3rem;
        font-weight: 700;
        margin-bottom: 8px;
        color: var(--cor-texto-principal);
    }
    .conteudo-type {
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
    }

    .type-curso {
        background: rgba(0, 120, 255, 0.1);
        color: var(--primary);
    }

    .type-artigo {
        background: rgba(108, 99, 255, 0.1);
        color: var(--secondary);
    }

    .type-podcast {
        background: rgba(0, 200, 150, 0.1);
        color: var(--accent);
    }

    .type-video {
        background: rgba(255, 71, 87, 0.1);
        color: #FF4757;
    }

    .type-desafio {
        background: rgba(255, 159, 28, 0.1);
        color: #FF9F1C;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 15px;
    }
`

export const TipoConteudo = styled.span`
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    
    /* Cores baseadas no nível */
    background: ${({ $tipo }) => {
        switch($tipo) {
            case 'CURSO':
                return 'rgba(0, 120, 255, 0.1)';
            case 'ARTIGO':
                return 'rgba(108, 99, 255, 0.1)';
            case 'PODCAST':
                return 'rgba(0, 200, 150, 0.1)';
            case 'VIDEO':
                return 'rgba(255, 71, 87, 0.1)';
            case 'DESAFIO':
                return 'rgba(255, 159, 28, 0.1)';
            default:
                return 'rgba(108, 99, 255, 0.15)';
        }
    }};
    
    color: ${({ $tipo }) => {
        switch($tipo) {
            case 'CURSO':
                return 'var(--cor-principal)';
            case 'ARTIGO':
                return 'var(--cor-secundaria)';
            case 'PODCAST':
                return 'var(--accent)';
            case 'VIDEO':
                return '#FF4757';
            case 'DESAFIO':
                return '#FF9F1C';
            default:
                return 'var(--cor-secundaria)';
        }
    }};
`

export const ConteudoActions = styled.div`
    display: flex;
    gap: 8px;
    .card-btn {
        padding: 6px 12px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.8rem;
    }

    .card-btn-secondary {
        background: rgba(108, 99, 255, 0.1);
        color: var(--cor-secundaria);
    }

    .card-btn-secondary:hover {
        background: rgba(108, 99, 255, 0.2);
    }

    .card-btn-danger {
        background: rgba(255, 71, 87, 0.1);
        color: #FF4757;
    }

    .card-btn-danger:hover {
        background: rgba(255, 71, 87, 0.2);
    }

    @media (max-width: 768px) {
        width: 100%;
        justify-content: flex-end;
    }
`

export const ConteudoDescricao = styled.p`
    color: var(--gray);
    line-height: 1.6;
    margin-bottom: 15px;
`

export const ConteudoLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--cor-principal);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: color 0.3s;
    &:hover {
        color: var(--cor-secundaria);
    }
`