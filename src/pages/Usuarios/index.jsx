import { useEffect, useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import { ConteudoPagina, StatsCards, TabelaUsuarios, UsuariosSection } from "./styles";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";
import { useNavigate } from "react-router-dom";
import { buscarTodosUsuarios, deletarUsuario } from "./services/usuarioService";
import DeleteModal from "../../components/DeleteModal";

const Usuarios = () => {
    useAuthRedirect();
    const navigate = useNavigate();
    const idUsuarioLogado = Number(localStorage.getItem("userId"));
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [solicitacoes, setSolicitacoes] = useState(5); // Mock data
    const [modalOpen, setModalOpen] = useState(false);
    const [loadingDelete, setLoadingDelete] = useState(false);
    const [usuarioSelecionadoId, setUsuarioSelecionadoId] = useState(null);

    useEffect(() => {
        const buscarUsuarios = async () => {
            try {
                const usuariosData = await buscarTodosUsuarios();
                setUsuarios(usuariosData);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
                setUsuarios([]);
            } finally {
                setLoading(false);
            }
        };

        buscarUsuarios();
    }, []);

    const handleExcluirUsuario = async () => {
        setLoadingDelete(true);
        try {
            await deletarUsuario(usuarioSelecionadoId);
            const usuariosAtualizados = await buscarTodosUsuarios();
            setUsuarios(usuariosAtualizados);

        } catch (erro) {
            console.error(erro);

        } finally {
            setLoadingDelete(false);
            setModalOpen(false);
        }
    };

    const handleVerSolicitacoes = () => {
        navigate("/solicitacoes-conta");
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <Cabecalho
                titulo="Gerenciamento de Usuários"
                descricao="Gerencie todos os usuários da plataforma"
                user="AD"
            />

            <ConteudoPagina>
                {/* Cards de Estatísticas */}
                <StatsCards>
                    <div className="stat-card">
                        <div className="stat-info">
                            <h3 className="stat-value">{usuarios.length}</h3>
                            <p className="stat-label">Usuários Cadastrados</p>
                        </div>
                        <div className="stat-icon">
                            <i className="fas fa-users"></i>
                        </div>
                    </div>

                    <div className="stat-card notification-card" onClick={handleVerSolicitacoes}>
                        <div className="stat-info">
                            <h3 className="stat-value">{solicitacoes}</h3>
                            <p className="stat-label">Solicitações de Conta</p>
                        </div>
                        <div className="stat-icon">
                            <i className="fas fa-user-plus"></i>
                        </div>
                    </div>
                </StatsCards>

                {/* Tabela de Usuários */}
                <UsuariosSection>
                    <div className="section-header">
                        <h2 className="section-title">Todos os Usuários</h2>
                    </div>

                    <TabelaUsuarios>
                        <table className="usuarios-table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.length > 0 ? (
                                    usuarios.map((usuario) => (
                                        <tr key={usuario.id_usuario}>
                                            <td>
                                                <div className="user-info">
                                                    <div className="user-avatar">
                                                        {usuario.nome.substring(0, 2).toUpperCase()}
                                                    </div>
                                                    <span className="user-name">{usuario.nome}</span>
                                                </div>
                                            </td>
                                            <td className="user-email">{usuario.email}</td>
                                            <td>
                                                <div className="table-actions">
                                                    <button 
                                                        className="btn-action btn-edit"
                                                        onClick={() => navigate(`/editar-usuario/${usuario.id_usuario}`)}
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </button>
                                                    <button 
                                                        className="btn-action btn-delete"
                                                        onClick={() => {
                                                            if (usuario.id_usuario === idUsuarioLogado) {
                                                                alert("Você não pode excluir sua própria conta.");
                                                                return;
                                                            }
                                                            setUsuarioSelecionadoId(usuario.id_usuario);
                                                            setModalOpen(true);
                                                        }}
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="no-data">
                                            <i className="fas fa-users-slash"></i>
                                            Nenhum usuário cadastrado
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </TabelaUsuarios>
                </UsuariosSection>
            </ConteudoPagina>

            <DeleteModal 
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onConfirm={handleExcluirUsuario}
                titulo={"Excluir Usuário"}
                mensagem={"Tem certeza que deseja excluir este usuário? Esta ação não pode ser desfeita."}
                loading={loadingDelete}
            />
        </>
    );
};

export default Usuarios;