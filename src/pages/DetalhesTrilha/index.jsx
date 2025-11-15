import { useEffect, useState } from "react";
import { ContainerAvaliacao, ConteudoPagina, ConteudoSecao, ConteudoSecaoCabecalho, TrilhaActions, TrilhaCabecalho, TrilhaDescricao, TrilhaInfo } from "./styles";
import { buscarTrilhaPorId, deletarTrilha } from "../../services/trilhasService";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";
import { useParams, useNavigate } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import { calcularMediaNotas, formatarArea, formatarNivel, renderizarEstrelas } from "../../utils/formatarDadosTrilha.jsx";
import CardConteudo from "./components/CardConteudo/index.jsx";
import DeleteModal from "../../components/DeleteModal/index.jsx";
import { deletarConteudo } from "../../services/conteudoService.js";

const DetalhesTrilha = () => {
    useAuthRedirect();
    const { id } = useParams();
    const navigate = useNavigate();
    const [trilha, setTrilha] = useState(null);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTipo, setModalTipo] = useState(""); // "trilha" ou "conteudo"
    const [idConteudoExcluir, setIdConteudoExcluir] = useState(null);
    const [loadingDelete, setLoadingDelete] = useState(false)

    useEffect(() => {
        const buscarTrilha = async () => {
            try {
                if (id) {
                    const trilhaData = await buscarTrilhaPorId(id);
                    setTrilha(trilhaData);
                }
            } catch (error) {
                console.error("Erro ao buscar trilha:", error);
            } finally {
                setLoading(false);
            }
        };

        buscarTrilha();
    }, [id]);

    const handleConfirmDelete = async () => {
        setLoadingDelete(true);
        try {
            if (modalTipo === "trilha") {
                await deletarTrilha(id);
                navigate("/trilhas");
            } 
            else if (modalTipo === "conteudo") {
                await deletarConteudo(idConteudoExcluir);
                const atualizada = await buscarTrilhaPorId(id);
                setTrilha(atualizada);
            }
        } catch (erro) {
            console.error(erro);
        } finally {
            setLoadingDelete(false);
            setModalOpen(false);
        }
    };

    const abrirModalDeleteConteudo = (idConteudo) => {
        setIdConteudoExcluir(idConteudo);
        setModalTipo("conteudo");
        setModalOpen(true);
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!trilha) {
        return <div>Trilha não encontrada</div>;
    }

    return (
        <>
            <Cabecalho
                titulo="Detalhes da Trilha"
                descricao="Gerencie os detalhes e conteúdos desta trilha"
            />
            <ConteudoPagina>
                {/* Detalhes da Trilha */}
                <div className="trilha-details">
                    <TrilhaCabecalho>
                        <TrilhaInfo>
                            <h1>{trilha.nome}</h1>
                            <div className="trilha-meta">
                                <span className="category-badge">{formatarArea(trilha.area)}</span>
                                <span className={`status-badge ${trilha.status === 'ATIVA' ? 'status-active' : 'status-inactive'}`}>
                                    {trilha.status === 'ATIVA' ? 'Ativa' : 'Inativa'}
                                </span>
                                <div className="meta-item">
                                    <i className="fas fa-chart-line"></i>
                                    <span>Nível: {formatarNivel(trilha.nivel)}</span>
                                </div>
                                <ContainerAvaliacao>
                                    <div className="stars">
                                        {renderizarEstrelas(calcularMediaNotas(trilha.notas))}
                                    </div>
                                    <span className="rating-value">{calcularMediaNotas(trilha.notas)}</span>
                                    {trilha.notas.length > 0 && (
                                        <span className="quantidade-avaliacoes">({trilha.notas.length})</span>
                                    )}
                                </ContainerAvaliacao>
                            </div>
                        </TrilhaInfo>
                        <TrilhaActions>
                            <button className="btn btn-secondary" onClick={() => navigate(`/editar-trilha/${id}`)}>
                                <i className="fas fa-edit"></i>
                                Editar Trilha
                            </button>
                            <button className="btn btn-danger" 
                            onClick={() => {
                                setModalTipo("trilha");
                                setModalOpen(true);
                            }}>
                                <i className="fas fa-trash"></i>
                                Excluir Trilha
                            </button>
                        </TrilhaActions>
                    </TrilhaCabecalho>

                    <TrilhaDescricao>
                        {trilha.descricao}
                    </TrilhaDescricao>
                </div>

                {/* Conteúdos da Trilha */}
                <ConteudoSecao>
                    <ConteudoSecaoCabecalho>
                        <h2 className="section-title">Conteúdos da Trilha</h2>
                        <button className="btn btn-primary" onClick={() => navigate(`/trilha/${id}/cadastro-conteudo`)}>
                            <i className="fas fa-plus"></i>
                            Adicionar Conteúdo
                        </button>
                    </ConteudoSecaoCabecalho>

                    {trilha.conteudos && trilha.conteudos.length > 0 ? (
                        trilha.conteudos.map((conteudo, index) => (
                            <CardConteudo 
                                key={index} 
                                conteudo={conteudo} 
                                index={index}
                                onDelete={() => abrirModalDeleteConteudo(conteudo.id_conteudo)}
                            />
                        ))
                    ) : (
                        <p>Nenhum conteúdo cadastrado para esta trilha.</p>
                    )}
                </ConteudoSecao>
            </ConteudoPagina>

            <DeleteModal 
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onConfirm={handleConfirmDelete}
                titulo={modalTipo === "trilha" ? "Excluir Trilha" : "Excluir Conteúdo"}
                mensagem={modalTipo === "trilha"
                    ? "Tem certeza que deseja excluir esta trilha? Esta ação não pode ser desfeita."
                    : "Tem certeza que deseja excluir este conteúdo? Esta ação não pode ser desfeita."
                }
                loading={loadingDelete}
            />
        </>
    );
};

export default DetalhesTrilha;