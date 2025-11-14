import { CabecalhoCard, ContainerAvaliacao, ContainerBotaoCard, ContainerCard, CorpoCard, NivelTrilha, RodapeCard, Status } from "./styles";

const CardTrilha = ({ trilha }) => {

    const formatarArea = (area) => {
        switch (area) {
            case "BACKEND":
                return "Backend"
            case "WEB":
                return "Desenvolvimento WEB"
            case "DATA_SCIENCE":
                return "Data Science"
            case "MOBILE":
                return "Desenvolvimento MOBILE"
            case "DESIGN":
                return "Design"
            case "DEVOPS":
                return "DevOps"
            case "IA":
                return "IA"
            default:
                return area
        }
    };

    const formatarNivel = (nivel) => {
        switch (nivel) {
            case "INICIANTE":
                return "Iniciante"
            case "INTERMEDIARIO":
                return "Intermediário"
            case "AVANCADO":
                return "Avançado"
            default:
                return nivel
        }
    };

    const calcularMediaNotas = (notas) => {
        if (!notas || notas.length === 0) return "-";

        const soma = notas.reduce((acc, nota) => acc + nota.valor_nota, 0);
        const media = soma / notas.length;
        return media.toFixed(1);
    };

    const renderizarEstrelas = (media) => {
        if (media === "-" || media === undefined) return null;

        const estrelas = [];
        const valor = parseFloat(media);

        const cheia = Math.floor(valor);         // quantidade de estrelas cheias
        const decimal = valor - cheia;           // parte decimal (0.0 a 1.0)

        for (let i = 0; i < 5; i++) {
            if (i < cheia) {
                // estrela cheia
                estrelas.push(<i key={i} className="fas fa-star"></i>);
            } else if (i === cheia && decimal >= 0.5) {
                // meia estrela
                estrelas.push(<i key={i} className="fas fa-star-half-alt"></i>);
            } else {
                // estrela vazia
                estrelas.push(<i key={i} className="far fa-star"></i>);
            }
        }

        return estrelas;
    };

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
                </ContainerAvaliacao>

                <ContainerBotaoCard>
                    <button>Ver Detalhes</button>
                </ContainerBotaoCard>
            </RodapeCard>
        </ContainerCard>
    )
}

export default CardTrilha;