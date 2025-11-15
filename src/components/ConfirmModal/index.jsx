import { BtnCancelar, BtnConfirmar, ModalActions, ModalContainer, ModalHeader, ModalIcon, ModalMessage, Overlay } from "./styles";

const ConfirmModal = ({ isOpen, onClose, onConfirm, titulo, mensagem, loading, tipo = "success", textoConfirmar = "Confirmar" }) => {
    
    if (!isOpen) return null;

    const getIcon = () => {
        switch (tipo) {
            case "success":
                return "fas fa-check-circle";
            case "warning":
                return "fas fa-exclamation-triangle";
            case "info":
                return "fas fa-info-circle";
            default:
                return "fas fa-check-circle";
        }
    };

    const getIconColor = () => {
        switch (tipo) {
            case "success":
                return "linear-gradient(135deg, var(--cor-texto-enfase), #00E6A4)";
            case "warning":
                return "linear-gradient(135deg, #FFA726, #FFB74D)";
            case "info":
                return "linear-gradient(135deg, var(--cor-principal), var(--cor-secundaria))";
            default:
                return "linear-gradient(135deg, var(--cor-texto-enfase), #00E6A4)";
        }
    };

    return (
        <Overlay>
            <ModalContainer>
                <ModalIcon style={{ background: getIconColor() }}>
                    <i className={getIcon()}></i>
                </ModalIcon>
                <ModalHeader>{titulo}</ModalHeader>
                <ModalMessage>{mensagem}</ModalMessage>

                <ModalActions>
                    <BtnCancelar onClick={onClose} disabled={loading}>
                        Cancelar
                    </BtnCancelar>
                    <BtnConfirmar onClick={onConfirm} disabled={loading} style={{ background: getIconColor() }}>
                        {loading ? "Processando..." : textoConfirmar}
                    </BtnConfirmar>
                </ModalActions>
            </ModalContainer>
        </Overlay>
    );
};

export default ConfirmModal;