import { CabecalhoCard, ContainerCard, Status, Tabela, TituloCard } from "./style"
import { calcularMediaNotas, formatarArea } from "../../../../utils/formatarDadosTrilha.jsx";

const CardTabela = ({ titulo, trilhas }) => {
    
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