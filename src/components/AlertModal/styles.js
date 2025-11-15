import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

export const ModalContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 400px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const ModalIcon = styled.div`
    font-size: 40px;
    color: var(--cor-principal);
`;

export const ModalHeader = styled.h2`
    font-size: 20px;
    font-weight: 600;
`;

export const ModalMessage = styled.p`
    font-size: 16px;
    color: #555;
`;

export const ModalActions = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
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
