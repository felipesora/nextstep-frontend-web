import { useNavigate } from "react-router-dom";
import { CabecalhoCard, ContainerAvaliacao, ContainerBotaoCard, ContainerCard, CorpoCard, NivelTrilha, RodapeCard, Status } from "./styles";
import { calcularMediaNotas, formatarArea, formatarNivel, renderizarEstrelas } from "../../../../utils/formatarDadosTrilha.jsx";

const CardTrilha = ({ trilha }) => {
    const navigate = useNavigate();

    return(
        <ContainerCard>
            <CabecalhoCard>
                <div>
                    <h2>{trilha.nome}</h2>
                    <span>{formatarArea(trilha.area)}</span>
                </div>
                {trilha.status == "ATIVA" ?
                    <Status $ativo={true}>Ativa</Status>
                    :
                    <Status $ativo={false}>Inativa</Status>
                }
            </CabecalhoCard>

            <CorpoCard>

                <NivelTrilha $nivel={trilha.nivel}>
                    <i className="fas fa-chart-line"></i>
                    <span>{formatarNivel(trilha.nivel)}</span>
                </NivelTrilha>

                <p>
                    {trilha.descricao}
                </p>
            </CorpoCard>

            <RodapeCard>
                <ContainerAvaliacao>
                    <div>
                        {renderizarEstrelas(calcularMediaNotas(trilha.notas))}
                    </div>
                    <span>{calcularMediaNotas(trilha.notas)}</span>
                    {trilha.notas.length > 0 && (
                        <span className="quantidade-avaliacoes">({trilha.notas.length})</span>
                    )}
                </ContainerAvaliacao>

                <ContainerBotaoCard>
                    <button onClick={() => navigate(`/detalhes-trilha/${trilha.id_trilha}`)}>Ver Detalhes</button>
                </ContainerBotaoCard>
            </RodapeCard>
        </ContainerCard>
    )
}

export default CardTrilha;