import Cabecalho from "../../components/Cabecalho"
import CardPequeno from "./components/CardPequeno"
import { CardsInformacoes, ConteudoPagina } from "./styles"

const DashBoard = () => {
    return(
        <>
            <Cabecalho
                titulo="Dashboard"
                descricao="Visão geral do sistema NextStep"
                user="FS"
            />
            <ConteudoPagina>
                <CardsInformacoes>
                    <CardPequeno 
                        titulo="Total de Alunos"
                        icone="fas fa-users"
                        valor="1,246"
                        style={{
                            background: "rgba(0, 120, 255, 0.1)",
                            color: "var(--cor-principal)"
                        }}
                    />

                    <CardPequeno 
                        titulo="Trilhas Ativas"
                        icone="fas fa-map-signs"
                        valor="24"
                        style={{
                            background: "rgba(108, 99, 255, 0.1)",
                            color: "var(--cor-secundaria)"
                        }}
                    />
                </CardsInformacoes>
            </ConteudoPagina>
        </>
    )
}

export default DashBoard