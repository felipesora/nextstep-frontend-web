import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(30, 30, 42, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    padding: 20px;
`;

export const ModalContainer = styled.div`
    background: var(--card);
    padding: 32px;
    border-radius: 16px;
    width: 100%;
    max-width: 440px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    border: 1px solid var(--light-gray);
    text-align: center;
`;

export const ModalHeader = styled.h3`
    margin: 0 0 12px 0;
    font-size: 22px;
    font-weight: 700;
    color: var(--cor-texto-principal);
    line-height: 1.3;
`;

export const ModalMessage = styled.p`
    margin: 0;
    color: var(--gray);
    font-size: 15px;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 20px;
`;

export const ModalActions = styled.div`
    margin-top: 28px;
    display: flex;
    justify-content: center;
    gap: 12px;

    @media (max-width: 480px) {
        flex-direction: column-reverse;
        gap: 10px;
    }
`;

export const BtnCancelar = styled.button`
    background: transparent;
    border: 2px solid var(--light-gray);
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    color: var(--gray);
    transition: all 0.2s ease;
    min-width: 100px;

    &:hover:not(:disabled) {
        background: var(--light-gray);
        border-color: var(--gray);
        color: var(--cor-texto-principal);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    @media (max-width: 480px) {
        min-width: 100%;
    }
`;

export const BtnConfirmar = styled.button`
    background: linear-gradient(135deg, var(--cor-principal), var(--cor-secundaria));
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.2s ease;
    min-width: 100px;

    &:hover:not(:disabled) {
        background: linear-gradient(135deg, #0066d4, #5a52ff);
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    @media (max-width: 480px) {
        min-width: 100%;
    }
`;

export const FormGrupo = styled.div`
    margin-bottom: 20px;
    text-align: left;
`;

export const FormLabel = styled.label`
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--cor-texto-principal);
    font-size: 14px;
`;

export const InputGrupo = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const InputIcon = styled.i`
    position: absolute;
    left: 12px;
    color: var(--gray);
    font-size: 14px;
    z-index: 1;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px 12px 12px 40px;
    border: 2px solid var(--light-gray);
    border-radius: 8px;
    font-size: 14px;
    transition: all 0.2s ease;
    background: var(--card);
    color: var(--cor-texto-principal);

    &:focus {
        outline: none;
        border-color: var(--cor-principal);
        box-shadow: 0 0 0 3px rgba(0, 120, 255, 0.1);
    }

    &:disabled {
        background: var(--light-gray);
        cursor: not-allowed;
        opacity: 0.7;
    }

    &::placeholder {
        color: var(--gray);
    }

    /* Estilo específico para textarea */
    ${props => props.as === 'textarea' && `
        min-height: 100px;
        resize: vertical;
        padding-top: 12px;
        padding-bottom: 12px;
        line-height: 1.5;
    `}
`;

export const SecaoSucesso = styled.div`
    background: rgba(0, 200, 150, 0.1);
    border: 1px solid rgba(0, 200, 150, 0.3);
    border-radius: 8px;
    padding: 12px 16px;
    margin: 16px 0;
    
    p {
        color: var(--cor-texto-enfase);
        margin: 0;
        font-size: 0.9rem;
        font-weight: 500;
    }
`;

export const SecaoErro = styled.div`
    background: rgba(255, 71, 87, 0.1);
    border: 1px solid rgba(255, 71, 87, 0.3);
    border-radius: 8px;
    padding: 12px 16px;
    margin: 16px 0;
    
    p {
        color: #FF4757;
        margin: 0;
        font-size: 0.9rem;
        font-weight: 500;
    }
`;

export const BtnOk = styled.button`
    background: linear-gradient(135deg, var(--cor-principal), var(--cor-secundaria));
    color: white;
    border: none;
    padding: 10px 30px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.2s ease;
    min-width: 100px;

    &:hover {
        background: linear-gradient(135deg, #0066d4, #5a52ff);
        transform: translateY(-1px);
    }

    @media (max-width: 480px) {
        min-width: 100%;
    }
`;