import { BtnCancelar, BtnConfirmar, ModalActions, ModalContainer, ModalHeader, ModalMessage, Overlay, ModalIcon } from "./styles";

const DeleteModal = ({ isOpen, onClose, onConfirm, titulo, mensagem, loading }) => {
    
    if (!isOpen) return null;

    return (
        <Overlay>
            <ModalContainer>
                <ModalIcon>
                    <i className="fas fa-exclamation-triangle"></i>
                </ModalIcon>
                <ModalHeader>{titulo}</ModalHeader>
                <ModalMessage>{mensagem}</ModalMessage>

                <ModalActions>
                    <BtnCancelar onClick={onClose} disabled={loading}>
                        Cancelar
                    </BtnCancelar>
                    <BtnConfirmar onClick={onConfirm} disabled={loading}>
                        {loading ? (
                            <>
                                Excluindo...
                            </>
                        ) : (
                            <>
                                Excluir
                            </>
                        )}
                    </BtnConfirmar>
                </ModalActions>
            </ModalContainer>
        </Overlay>
    );
};

export default DeleteModal;