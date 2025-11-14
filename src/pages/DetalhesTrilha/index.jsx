import { useEffect, useState } from "react";
import { ContainerAvaliacao, ConteudoPagina, ConteudoSecao, ConteudoSecaoCabecalho, TrilhaActions, TrilhaCabecalho, TrilhaDescricao, TrilhaInfo } from "./styles";
import { buscarTrilhaPorId } from "../../services/trilhasService";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";
import { useParams, useNavigate } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import { calcularMediaNotas, formatarArea, formatarNivel, renderizarEstrelas } from "../../utils/formatarDadosTrilha.jsx";
import CardConteudo from "./components/CardConteudo/index.jsx";

const DetalhesTrilha = () => {
    useAuthRedirect();
    const { id } = useParams();
    const navigate = useNavigate();
    const [trilha, setTrilha] = useState(null);
    const [loading, setLoading] = useState(true);

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

    const handleEditarTrilha = () => {
        navigate(`/editar-trilha/${id}`);
    };

    const handleExcluirTrilha = async () => {
        if (window.confirm("Tem certeza que deseja excluir esta trilha?")) {
            try {
                // await excluirTrilha(id);
                navigate("/trilhas");
            } catch (error) {
                console.error("Erro ao excluir trilha:", error);
            }
        }
    };

    const handleAdicionarConteudo = () => {
        navigate(`/cadastro-conteudo/${id}`);
    };

    const handleEditarConteudo = (conteudoId) => {
        navigate(`/editar-conteudo/${conteudoId}`);
    };

    const handleExcluirConteudo = async (conteudoId) => {
        if (window.confirm("Tem certeza que deseja excluir este conteúdo?")) {
            try {
                // await excluirConteudo(conteudoId);
                // Recarregar os dados da trilha
            } catch (error) {
                console.error("Erro ao excluir conteúdo:", error);
            }
        }
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
                user="FS"
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
                                </ContainerAvaliacao>
                            </div>
                        </TrilhaInfo>
                        <TrilhaActions>
                            <button className="btn btn-secondary" onClick={handleEditarTrilha}>
                                <i className="fas fa-edit"></i>
                                Editar Trilha
                            </button>
                            <button className="btn btn-danger" onClick={handleExcluirTrilha}>
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
                        <button className="btn btn-primary" onClick={handleAdicionarConteudo}>
                            <i className="fas fa-plus"></i>
                            Adicionar Conteúdo
                        </button>
                    </ConteudoSecaoCabecalho>

                    {trilha.conteudos && trilha.conteudos.length > 0 ? (
                        trilha.conteudos.map((conteudo, index) => (
                            // <div className="conteudo-step" key={conteudo.id_conteudo}>
                            //     <div className="step-number">{index + 1}</div>
                            //     <div className="conteudo-card">
                            //         <div className="conteudo-header">
                            //             <div>
                            //                 <h3 className="conteudo-title">{conteudo.titulo}</h3>
                            //                 <span className={`conteudo-type type-${conteudo.tipo.toLowerCase()}`}>
                            //                     {conteudo.tipo}
                            //                 </span>
                            //             </div>
                            //             <div className="conteudo-actions">
                            //                 <button 
                            //                     className="card-btn card-btn-secondary"
                            //                     onClick={() => handleEditarConteudo(conteudo.id_conteudo)}
                            //                 >
                            //                     <i className="fas fa-edit"></i>
                            //                 </button>
                            //                 <button 
                            //                     className="card-btn card-btn-danger"
                            //                     onClick={() => handleExcluirConteudo(conteudo.id_conteudo)}
                            //                 >
                            //                     <i className="fas fa-trash"></i>
                            //                 </button>
                            //             </div>
                            //         </div>
                            //         <p className="conteudo-description">
                            //             {conteudo.descricao}
                            //         </p>
                            //         {conteudo.link && (
                            //             <a href={conteudo.link} className="conteudo-link" target="_blank" rel="noopener noreferrer">
                            //                 <i className="fas fa-external-link-alt"></i>
                            //                 {conteudo.tipo === 'CURSO' && 'Acessar Curso'}
                            //                 {conteudo.tipo === 'ARTIGO' && 'Ler Artigo'}
                            //                 {conteudo.tipo === 'PODCAST' && 'Ouvir Podcast'}
                            //                 {conteudo.tipo === 'VIDEO' && 'Assistir Vídeo'}
                            //                 {conteudo.tipo === 'DESAFIO' && 'Iniciar Desafio'}
                            //             </a>
                            //         )}
                            //     </div>
                            // </div>
                            <CardConteudo conteudo={conteudo} index={index}/>
                        ))
                    ) : (
                        <p>Nenhum conteúdo cadastrado para esta trilha.</p>
                    )}
                </ConteudoSecao>
            </ConteudoPagina>
        </>
    );
};

export default DetalhesTrilha;