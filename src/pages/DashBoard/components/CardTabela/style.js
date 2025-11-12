import styled from "styled-components";

export const ContainerCard = styled.div`
    background: var(--card);
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    margin-bottom: 24px;
    transition: transform 0.3s, box-shadow 0.3s;
    &:hover {
        box-shadow: 0 8px 16px rgba(0,0,0,0.08);
    }
`

export const CabecalhoCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

export const TituloCard = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
`

export const Tabela = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    th, td {
        padding: 14px 12px;
        text-align: left;
        border-bottom: 1px solid #E6E9EF;
    }
    th {
        background: rgba(245, 247, 250, 0.7);
        font-weight: 600;
        color: var(--cor-texto-principal);
        font-size: 0.9rem;
    }
    tr:last-child td {
        border-bottom: none;
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
`;