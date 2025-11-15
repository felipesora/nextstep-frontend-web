import { useState } from "react";
import { 
    Overlay, 
    ModalContainer, 
    ModalHeader, 
    ModalMessage, 
    ModalActions, 
    BtnCancelar, 
    BtnConfirmar,
    FormGrupo,
    FormLabel,
    InputGrupo,
    InputIcon,
    Input,
    SecaoSucesso,
    SecaoErro
} from "./styles";
import { cadastrarSolicitacao } from "../../../../services/solicitacaoService";

const ContactAdminModal = ({ isOpen, onClose }) => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (!nome.trim() || !email || !senha) {
            setError("Preencha todos os campos.");
            setLoading(false);
            return;
        }

        if (nome.length < 3 || nome.length > 150) {
            setError("O nome deve ter entre 3 e 150 caracteres.");
            setLoading(false);
            return;
        }

        if (email.length < 3 || email.length > 150) {
            setError("O email deve ter entre 3 e 150 caracteres.");
            setLoading(false);
            return;
        }

        if (senha.length < 6) {
            setError("A senha deve possuir no mínimo 6 caracteres.");
            setLoading(false);
            return;
        }

        const solicitacao = {
            nome: nome,
            email: email,
            senha: senha
        }

        try {
            // Simular envio da solicitação
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            await cadastrarSolicitacao(solicitacao);
            
            setSuccess(true);
            setTimeout(() => {
                onClose();
                setSuccess(false);
                setNome("");
                setEmail("");
                setSenha("");
            }, 2000);
        } catch (erro) {
            setError("Erro ao enviar solicitação. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        if (!loading) {
            onClose();
            setNome("");
            setEmail("");
            setSenha("");
            setError("");
            setSuccess(false);
        }
    };

    if (!isOpen) return null;

    return (
        <Overlay>
            <ModalContainer style={{ maxWidth: "500px" }}>
                {!success ? (
                    <>
                        <ModalHeader>Enviar Solicitação</ModalHeader>
                        <ModalMessage>
                            Descreva o problema de acesso que está enfrentando. Um administrador entrará em contato em breve.
                        </ModalMessage>

                        <form onSubmit={handleSubmit}>
                            <FormGrupo>
                                <FormLabel>Nome</FormLabel>
                                <InputGrupo>
                                    <InputIcon className="fas fa-user" />
                                    <Input
                                        type="text"
                                        placeholder="Seu nome completo"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        disabled={loading}
                                    />
                                </InputGrupo>
                            </FormGrupo>

                            <FormGrupo>
                                <FormLabel>E-mail</FormLabel>
                                <InputGrupo>
                                    <InputIcon className="fas fa-envelope" />
                                    <Input
                                        type="email"
                                        placeholder="seu@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={loading}
                                    />
                                </InputGrupo>
                            </FormGrupo>

                             <FormGrupo>
                                <FormLabel>Senha</FormLabel>
                                <InputGrupo>
                                    <InputIcon className="fas fa-lock" />
                                    <Input
                                        type="password"
                                        placeholder="Sua senha"
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                        disabled={loading}
                                    />
                                </InputGrupo>
                            </FormGrupo>

                            {error && (
                                <SecaoErro>
                                    <p>{error}</p>
                                </SecaoErro>
                            )}

                            <ModalActions>
                                <BtnCancelar type="button" onClick={handleClose} disabled={loading}>
                                    Cancelar
                                </BtnCancelar>
                                <BtnConfirmar type="submit" disabled={loading}>
                                    {loading ? "Enviando..." : "Enviar Solicitação"}
                                </BtnConfirmar>
                            </ModalActions>
                        </form>
                    </>
                ) : (
                    <>
                        <ModalHeader style={{ color: "var(--cor-texto-enfase)" }}>
                            <i className="fas fa-check-circle" style={{ 
                                fontSize: "3rem", 
                                color: "var(--cor-texto-enfase)",
                                marginBottom: "15px",
                                display: "block"
                            }}></i>
                            Solicitação Enviada!
                        </ModalHeader>
                        <ModalMessage>
                            Sua solicitação foi enviada com sucesso. Os administradores foram notificados e entrarão em contato em breve.
                        </ModalMessage>
                        <ModalActions>
                            <BtnConfirmar onClick={handleClose}>
                                OK
                            </BtnConfirmar>
                        </ModalActions>
                    </>
                )}
            </ModalContainer>
        </Overlay>
    );
};

export default ContactAdminModal;