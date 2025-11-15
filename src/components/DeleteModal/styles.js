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

export const ModalIcon = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, #FF4757, #FF6B7A);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    color: white;
    font-size: 1.5rem;
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

    i {
        padding-right: 10px;
    }

    @media (max-width: 480px) {
        min-width: 100%;
    }
`;

export const BtnConfirmar = styled.button`
    background: linear-gradient(135deg, #FF4757, #FF6B7A);
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
        background: linear-gradient(135deg, #E03E4C, #FF5A6B);
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    @media (max-width: 480px) {
        min-width: 100%;
    }
`;