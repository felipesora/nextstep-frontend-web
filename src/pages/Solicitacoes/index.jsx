import { useEffect, useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import { ConteudoPagina, StatsCards, TabelaUsuarios, UsuariosSection } from "./styles";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal";
import { buscarTodasSolicitacoes, deletarSolicitacao } from "../../services/solicitacaoService";
import ConfirmModal from "../../components/ConfirmModal";
import { cadastrarUsuario } from "../../services/usuarioService";

const Solicitacoes = () => {
    useAuthRedirect();
    const navigate = useNavigate();
    const [solicitacoes, setSolicitacoes] = useState([]);
    const [qntSolicitacoes, setQntSolicitacoes] = useState(0);
    const [loading, setLoading] = useState(true);
    const [modalAprovarOpen, setModalAprovarOpen] = useState(false);
    const [modalRemoverOpen, setModalRemoverOpen] = useState(false);
    const [loadingAcao, setLoadingAcao] = useState(false);
    const [solicitacaoSelecionada, setSolicitacaoSelecionada] = useState(null);

    useEffect(() => {
        const buscarSolicitacoes = async () => {
            try {
                const solicatoesData = await buscarTodasSolicitacoes();
                setSolicitacoes(solicatoesData);
                setQntSolicitacoes(solicatoesData.length);
            } catch (error) {
                console.error("Erro ao buscar solicitações:", error);
                setSolicitacoes([]);
            } finally {
                setLoading(false);
            }
        };

        buscarSolicitacoes();
    }, []);

    const handleAprovarSolicitacao = async () => {
        setLoadingAcao(true);
        try {
            // Primeiro cadastra o usuário
            await cadastrarUsuario(solicitacaoSelecionada);
            console.log("Aprovando solicitação:", solicitacaoSelecionada.id_solicitacao);

            // Depois tenta deletar a solicitação
            await deletarSolicitacao(solicitacaoSelecionada.id_solicitacao);

            // Atualiza lista
            const solicitacoesAtualizadas = await buscarTodasSolicitacoes();
            setSolicitacoes(solicitacoesAtualizadas);
            setQntSolicitacoes(solicitacoesAtualizadas.length);

        } catch (erro) {
            console.error("Erro ao aprovar solicitação:", erro);
        } finally {
            setLoadingAcao(false);
            setModalAprovarOpen(false);
        }
    };

    const handleRemoverSolicitacao = async () => {
        setLoadingAcao(true);
        try {
            await deletarSolicitacao(solicitacaoSelecionada.id_solicitacao);
            
            // Atualizar a lista de solicitações
            const solicitacoesAtualizadas = await buscarTodasSolicitacoes();
            setSolicitacoes(solicitacoesAtualizadas);
            setQntSolicitacoes(solicitacoesAtualizadas.length);

        } catch (erro) {
            console.error("Erro ao remover solicitação:", erro);
        } finally {
            setLoadingAcao(false);
            setModalRemoverOpen(false);
        }
    };

    const handleAprovarClick = (solicitacao) => {
        setSolicitacaoSelecionada(solicitacao);
        setModalAprovarOpen(true);
    };

    const handleRemoverClick = (solicitacao) => {
        setSolicitacaoSelecionada(solicitacao);
        setModalRemoverOpen(true);
    };

    return (
        <>
            <Cabecalho
                titulo="Solicitações de Conta"
                descricao="Gerencie e aprove novas solicitações de criação de conta enviadas pelos usuários"
            />

            <ConteudoPagina>
                {/* Cards de Estatísticas */}
                <StatsCards>
                    <div className="stat-card">
                        <div className="stat-info">
                            <h3 className="stat-value">{qntSolicitacoes}</h3>
                            <p className="stat-label">Solicitações Pendentes</p>
                        </div>
                        <div className="stat-icon">
                            <i className="fas fa-user-clock"></i>
                        </div>
                    </div>
                </StatsCards>

                {/* Tabela de Solicitações */}
                <UsuariosSection>
                    <div className="section-header">
                        <h2 className="section-title">Todas as Solicitações</h2>
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
                                {solicitacoes.length > 0 ? (
                                    solicitacoes.map((solicitacao) => (
                                        <tr key={solicitacao.id_solicitacao}>
                                            <td>
                                                <div className="user-info">
                                                    <div className="user-avatar">
                                                        {solicitacao.nome.substring(0, 2).toUpperCase()}
                                                    </div>
                                                    <span className="user-name">{solicitacao.nome}</span>
                                                </div>
                                            </td>
                                            <td className="user-email">{solicitacao.email}</td>
                                            <td>
                                                <div className="table-actions">
                                                    <button 
                                                        className="btn-action btn-approve"
                                                        onClick={() => handleAprovarClick(solicitacao)}
                                                    >
                                                        <i className="fas fa-user-check"></i>
                                                        Aprovar
                                                    </button>
                                                    <button 
                                                        className="btn-action btn-delete"
                                                        onClick={() => handleRemoverClick(solicitacao)}
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                        Remover
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="no-data">
                                            <i className="fas fa-users-slash"></i>
                                            Nenhuma solicitação cadastrada
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </TabelaUsuarios>
                </UsuariosSection>
            </ConteudoPagina>

            {/* Modal para Aprovar Solicitação */}
            <ConfirmModal
                isOpen={modalAprovarOpen}
                onClose={() => setModalAprovarOpen(false)}
                onConfirm={handleAprovarSolicitacao}
                titulo="Aprovar Solicitação"
                mensagem={`Tem certeza que deseja aprovar a solicitação de ${solicitacaoSelecionada?.nome}? Este usuário terá acesso completo ao sistema.`}
                loading={loadingAcao}
                tipo="success"
                textoConfirmar="Aprovar"
            />

            {/* Modal para Remover Solicitação */}
            <DeleteModal
                isOpen={modalRemoverOpen}
                onClose={() => setModalRemoverOpen(false)}
                onConfirm={handleRemoverSolicitacao}
                titulo="Remover Solicitação"
                mensagem={`Tem certeza que deseja remover a solicitação de ${solicitacaoSelecionada?.nome}? Esta ação não pode ser desfeita.`}
                loading={loadingAcao}
            />
        </>
    );
};

export default Solicitacoes;