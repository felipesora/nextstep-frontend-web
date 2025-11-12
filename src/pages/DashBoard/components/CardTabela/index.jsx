import { CabecalhoCard, ContainerCard, Status, Tabela, TituloCard } from "./style"

const CardTabela = ({ titulo }) => {
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
                    <tr>
                        <td>Frontend com React</td>
                        <td>Desenvolvimento Web</td>
                        <td>4.8</td>
                        <td><Status $ativo={true}>Ativa</Status></td>
                    </tr>
                    <tr>
                        <td>Python para Data Science</td>
                        <td>Data Science</td>
                        <td>4.7</td>
                        <td><Status $ativo={false}>Inativa</Status></td>
                    </tr>
                </tbody>
            </Tabela>
        </ContainerCard>
    )
}

export default CardTabela