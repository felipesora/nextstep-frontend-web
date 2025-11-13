import { CabecalhoCard, ContainerCard, Status, Tabela, TituloCard } from "./style"

const CardTabela = ({ titulo, trilhas }) => {

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
    }

    const calcularMediaNotas = (notas) => {
        if (!notas || notas.length === 0) return "-";

        const soma = notas.reduce((acc, nota) => acc + nota.valor_nota, 0);
        const media = soma / notas.length;
        return media.toFixed(1);
    };
    
    return(
        <ContainerCard>
            <CabecalhoCard>
                <TituloCard>{titulo}</TituloCard>
            </CabecalhoCard>

            <Tabela>
                <thead>
                    <tr>
                        <th>Nome da Trilha</th>
                        <th>Categoria</th>
                        <th>Nota Média</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {trilhas.length > 0 ? (
                        trilhas.map((trilha) => (
                        <tr key={trilha.id_trilha}>
                            <td>{trilha.nome}</td>
                            <td>{formatarArea(trilha.area)}</td>
                            <td>{calcularMediaNotas(trilha.notas)}</td>
                            <td>
                            {trilha.status == "ATIVA" ?
                                <Status $ativo={true}>Ativa</Status>
                                :
                                <Status $ativo={false}>Inativa</Status>
                            }
                            
                            </td>
                        </tr>
                        ))
                    ) : (
                        <tr>
                        <td colSpan="4" style={{ textAlign: "center", padding: "15px" }}>
                            Nenhuma trilha cadastrada.
                        </td>
                        </tr>
                    )}
                </tbody>
            </Tabela>
        </ContainerCard>
    )
}

export default CardTabela