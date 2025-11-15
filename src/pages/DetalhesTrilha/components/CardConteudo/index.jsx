import { useNavigate } from "react-router-dom";
import { useAuthRedirect } from "../../../../hooks/useAuthRedirect";
import { formartarTipoConteudo } from "../../../../utils/formatarDadosTrilha";
import { ContainerCardConteudo, ContainerEtapa, ConteudoActions, ConteudoCabecalho, ConteudoDescricao, ConteudoLink, TipoConteudo } from "./styles";

const CardConteudo = ({ conteudo, index, onDelete }) => {
    useAuthRedirect();
    const navigate = useNavigate();

    const handleEditarConteudo = (conteudo) => {
        navigate(`/trilha/${conteudo.id_trilha}/editar-conteudo/${conteudo.id_conteudo}`);
    };

    return (
        <ContainerEtapa>
            <div className="step-number">{index + 1}</div>
            <ContainerCardConteudo>

                <ConteudoCabecalho>
                    <div>
                        <h3>{conteudo.titulo}</h3>
                        <TipoConteudo $tipo={conteudo.tipo}>
                            {formartarTipoConteudo(conteudo.tipo)}
                        </TipoConteudo>
                    </div>

                    <ConteudoActions>
                        <button 
                            className="card-btn card-btn-secondary"
                            onClick={() => handleEditarConteudo(conteudo)}
                        >
                            <i className="fas fa-edit"></i>
                        </button>
                        <button 
                            className="card-btn card-btn-danger"
                            onClick={onDelete}
                        >
                            <i className="fas fa-trash"></i>
                        </button>
                    </ConteudoActions>

                </ConteudoCabecalho>

                <ConteudoDescricao>
                    {conteudo.descricao}
                </ConteudoDescricao>

                {conteudo.link && (
                    <ConteudoLink href={conteudo.link} className="conteudo-link" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i>
                        {conteudo.tipo === 'CURSO' && 'Acessar Curso'}
                        {conteudo.tipo === 'ARTIGO' && 'Ler Artigo'}
                        {conteudo.tipo === 'PODCAST' && 'Ouvir Podcast'}
                        {conteudo.tipo === 'VIDEO' && 'Assistir Vídeo'}
                        {conteudo.tipo === 'DESAFIO' && 'Iniciar Desafio'}
                    </ConteudoLink>
                )}

            </ContainerCardConteudo>
        </ContainerEtapa>
    )
}

export default CardConteudo;