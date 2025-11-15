import { BtnOk, ModalActions, ModalContainer, ModalHeader, ModalMessage, Overlay, ModalIcon } from "./styles";

const AlertModal = ({ isOpen, onClose, titulo, mensagem }) => {
    
    if (!isOpen) return null;

    return (
        <Overlay>
            <ModalContainer>
                <ModalIcon>
                    <i className="fas fa-info-circle"></i>
                </ModalIcon>
                <ModalHeader>{titulo}</ModalHeader>
                <ModalMessage>{mensagem}</ModalMessage>

                <ModalActions>
                    <BtnOk onClick={onClose}>
                        OK
                    </BtnOk>
                </ModalActions>
            </ModalContainer>
        </Overlay>
    );
};

export default AlertModal;