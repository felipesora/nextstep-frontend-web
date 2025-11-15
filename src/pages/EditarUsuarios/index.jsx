import { useNavigate, useParams } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import { CabecalhoFormulario, ContainerFormulario, ConteudoPagina, FormularioAcoes, FormularioAjuda, FormularioGrid, FormularioGrupo, FormularioInput, FormularioLabel, FormularioSelect, FormularioTextArea, SecaoErro, SecaoSucesso } from "./styles";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";
import { useEffect, useState } from "react";
import { buscarUsuarioPorId, editarUsuario } from "../../services/usuarioService";

const EditarUsuarios = () => {
    useAuthRedirect();
    const navigate = useNavigate();
    const { id } = useParams();
    const [usuario, setUsuario] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                const dados = await buscarUsuarioPorId(id);
                
                setUsuario(dados)
                setNome(dados.nome);
                setEmail(dados.email);
            } catch (erro) {
                console.error(erro);
                setError("Erro ao carregar dados do usuário.");
            }
        };

        fetchUsuario();
    }, [id]);

    const handleEditar = async (e) => {
        e.preventDefault();

        if (!nome.trim() || !email || !senha) {
            setError("Preencha todos os campos.");
            setSuccess("");
            return;
        }

        if (nome.length < 3 || nome.length > 150) {
            setError("O nome do usuário deve ter entre 3 e 150 caracteres.");
            setSuccess("");
            return;
        }

        if (email.length < 3 || email.length > 150) {
            setError("O email do usuário deve ter entre 3 e 150 caracteres.");
            setSuccess("");
            return;
        }

        if (senha.length < 6) {
            setError("A senha do usuário deve ter no mínimo 6 caracteres.");
            setSuccess("");
            return;
        }

        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        }

        try {
            await editarUsuario(id, usuario);
            setError("");
            setSuccess("Usuário editado com sucesso!");

            setTimeout(() => {
                navigate("/usuarios");
            }, 1500);

        } catch (error) {
            console.error(error);
            setError("Erro ao editar o usuário. Tente novamente.");
            setSuccess("");
        }
    }

    return (
        <>
            <Cabecalho
                titulo={usuario ? `Editando o Usuário: ${usuario.nome}` : "Edição de Usuário"}
                descricao="Modifique as informações do usuário e salve as alterações"
            />

            <ConteudoPagina>
                <ContainerFormulario>

                    <CabecalhoFormulario>
                        <h2>Informações do Usuário</h2>
                        <p>Altere os dados necessários e salve as modificações</p>
                    </CabecalhoFormulario>

                    <form onSubmit={handleEditar}>
                        <FormularioGrid>

                            {/* Nome */}
                            <FormularioGrupo className="full-width">
                                <FormularioLabel>
                                    Nome do Usuário <span className="required">*</span>
                                </FormularioLabel>

                                <FormularioInput 
                                    type="text" 
                                    placeholder="Digite o nome completo"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />

                                <FormularioAjuda>
                                    Informe o nome completo do usuário para identificação no sistema.
                                </FormularioAjuda>
                            </FormularioGrupo>

                            {/* Email */}
                            <FormularioGrupo className="full-width">
                                <FormularioLabel>
                                    Email <span className="required">*</span>
                                </FormularioLabel>

                                <FormularioInput 
                                    placeholder="Digite o email do usuário"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <FormularioAjuda>
                                    Informe um email válido. Ele será usado para login e comunicação.
                                </FormularioAjuda>
                            </FormularioGrupo>

                            {/* Senha */}
                            <FormularioGrupo className="full-width">
                                <FormularioLabel>
                                    Senha <span className="required">*</span>
                                </FormularioLabel>

                                <FormularioInput 
                                    placeholder="Digite a senha do usuário"
                                    type="password"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />

                                <FormularioAjuda>
                                    Use uma combinação de letras, números e símbolos para maior segurança.
                                </FormularioAjuda>
                            </FormularioGrupo>


                        </FormularioGrid>

                        {error && (
                            <SecaoErro>
                                <p>{error}</p>
                            </SecaoErro>
                        )}

                        {success && (
                            <SecaoSucesso>
                                <p>{success}</p>
                            </SecaoSucesso>
                        )}

                        <FormularioAcoes>
                            <button type="button" className="btn-cancelar" onClick={() => navigate("/usuarios")}>
                                <i className="fas fa-times"></i>
                                Cancelar
                            </button>

                            <button type="submit" className="btn-cadastrar">
                                <i className="fas fa-save"></i>
                                Salvar Usuário
                            </button>
                        </FormularioAcoes>
                    </form>

                </ContainerFormulario>
            </ConteudoPagina>
        </>
        
    );
}

export default EditarUsuarios;