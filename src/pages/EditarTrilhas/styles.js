import styled from "styled-components";

export const ConteudoPagina = styled.div`
    padding: 30px;
    flex: 1;
    @media (max-width: 768px) {
        padding: 20px;
    }
`

export const ContainerFormulario = styled.div`
    background: var(--card);
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    max-width: 100%;
    margin: 0 auto;
`

export const CabecalhoFormulario = styled.div`
    margin-bottom: 30px;
    h2 {
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 8px;
        color: var(--cor-texto-principal);
    }
    p {
        color: var(--gray);
        font-size: 1rem;
    }
`

export const FormularioGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    margin-bottom: 30px;
`

export const FormularioGrupo = styled.div`
    display: flex;
    flex-direction: column;
    &.full-width {
        grid-column: 1 / -1;
    }
`

export const FormularioLabel = styled.label`
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--cor-texto-principal);
    font-size: 0.95rem;
    .required {
        color: #FF4757;
    }
`

export const FormularioInput = styled.input`
    width: 100%;
    padding: 12px 16px;
    border: 2px solid var(--light-gray);
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s;
    background: var(--card);
    color: var(--cor-texto-principal);
    font-family: var(--fonte-principal);
    box-sizing: border-box;
    &:focus {
        outline: none;
        border-color: var(--cor-principal);
        box-shadow: 0 0 0 3px rgba(0, 120, 255, 0.1);
    }
`

export const FormularioSelect = styled.select`
    width: 100%;
    padding: 12px 16px;
    border: 2px solid var(--light-gray);
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s;
    background: var(--card);
    color: var(--cor-texto-principal);
    font-family: var(--fonte-principal);
    box-sizing: border-box;
    &:focus {
        outline: none;
        border-color: var(--cor-principal);
        box-shadow: 0 0 0 3px rgba(0, 120, 255, 0.1);
    }
`

export const FormularioTextArea = styled.textarea`
    width: 100%;
    padding: 12px 16px;
    border: 2px solid var(--light-gray);
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s;
    background: var(--card);
    color: var(--cor-texto-principal);
    box-sizing: border-box;
    resize: vertical;
    min-height: 120px;
    font-family: inherit;
    &:focus {
        outline: none;
        border-color: var(--cor-principal);
        box-shadow: 0 0 0 3px rgba(0, 120, 255, 0.1);
    }
`

export const FormularioAjuda = styled.div`
    color: var(--gray);
    font-size: 0.85rem;
    margin-top: 6px;
`

export const FormularioAcoes = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 15px;
    margin-top: 40px;
    padding-top: 25px;
    border-top: 1px solid var(--light-gray);
    button {
        padding: 12px 24px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 0.95rem;
    }
    .btn-cadastrar {
        background: var(--cor-principal);
        color: white;
        &:hover {
            background: #0066d4;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 120, 255, 0.3);
        }
    }
    .btn-cancelar {
        background: rgba(108, 99, 255, 0.1);
        color: var(--cor-secundaria);
        &:hover {
            background: rgba(108, 99, 255, 0.2);
        }
    }
`

export const SecaoErro = styled.div`
    text-align: left;
    margin: 0 0 10px 0;
    p {
        color: var(--erro);
        font-weight: 500;
    }
`

export const SecaoSucesso = styled.div`
    text-align: left;
    margin: 0 0 10px 0;
    p {
        color: var(--cor-texto-enfase);
        font-weight: 500;
    }
`
