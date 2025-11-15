import { BtnCancelar, BtnConfirmar, ModalActions, ModalContainer, ModalHeader, ModalMessage, Overlay, ModalIcon } from "./styles";

const LogoutModal = ({ isOpen, onClose, onConfirm, loading }) => {
    
    if (!isOpen) return null;

    return (
        <Overlay>
            <ModalContainer>
                <ModalIcon>
                    <i className="fas fa-sign-out-alt"></i>
                </ModalIcon>
                <ModalHeader>Sair do Sistema</ModalHeader>
                <ModalMessage>Tem certeza que deseja sair? Você precisará fazer login novamente para acessar o sistema.</ModalMessage>

                <ModalActions>
                    <BtnCancelar onClick={onClose} disabled={loading}>
                        Cancelar
                    </BtnCancelar>
                    <BtnConfirmar onClick={onConfirm} disabled={loading}>
                        {loading ? "Saindo..." : "Sair"}
                    </BtnConfirmar>
                </ModalActions>
            </ModalContainer>
        </Overlay>
    );
};

export default LogoutModal;