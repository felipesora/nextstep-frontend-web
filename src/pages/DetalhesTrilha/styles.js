import styled from "styled-components";

export const ConteudoPagina = styled.div`
    padding: 30px;
    flex: 1;

    .trilha-details {
        background: var(--card);
        border-radius: 12px;
        padding: 30px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        margin-bottom: 30px;
    }

    .btn {
        padding: 10px 20px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      padding: 20px;
    }
`;

export const TrilhaCabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 25px;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`

export const TrilhaInfo = styled.div`
    h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--cor-texto-principal);
  }

  .trilha-meta {
    display: flex;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--gray);
    font-size: 0.9rem;
  }

  .category-badge {
    padding: 6px 16px;
    background: rgba(108, 99, 255, 0.1);
    color: var(--cor-secundaria);
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
  }

  .status-badge {
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
  }

  .status-active {
    background: rgba(0, 200, 150, 0.15);
    color: var(--accent);
  }

  .status-inactive {
    background: rgba(255, 71, 87, 0.15);
    color: #FF4757;
  }
`

export const ContainerAvaliacao = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    .stars {
        color: #FFD700;
        display: flex;
        gap: 2px;
    }
    .rating-value {
       font-weight: 700;
        color: var(--cor-texto-principal); 
    }
    .quantidade-avaliacoes {
        font-weight: 500;
        color: var(--gray); 
    }
`

export const TrilhaActions = styled.div`
    display: flex;
    gap: 12px;

    .btn-secondary {
        background: rgba(108, 99, 255, 0.1);
        color: var(--cor-secundaria);
    }

    .btn-secondary:hover {
        background: rgba(108, 99, 255, 0.2);
    }

    .btn-danger {
        background: rgba(255, 71, 87, 0.1);
        color: #FF4757;
    }

    .btn-danger:hover {
        background: rgba(255, 71, 87, 0.2);
    }

    @media (max-width: 768px) {
        width: 100%;
        justify-content: flex-end;
    }
`

export const TrilhaDescricao = styled.p`
    color: var(--cor-texto-principal);
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 25px;
`

export const ConteudoSecao = styled.div`
    margin-top: 40px;
`

export const ConteudoSecaoCabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

    .btn-primary {
        background: var(--cor-principal);
        color: white;
    }

    .btn-primary:hover {
        background: #0066d4;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 120, 255, 0.3);
    }

    .section-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--cor-texto-principal);
    }
`