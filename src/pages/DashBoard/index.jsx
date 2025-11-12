import { useEffect, useState } from "react"
import Cabecalho from "../../components/Cabecalho"
import CardPequeno from "./components/CardPequeno"
import CardTabela from "./components/CardTabela"
import { CardsInformacoes, ConteudoPagina } from "./styles"
import { buscarTodasTrilhas } from "../../services/trilhasService"

const DashBoard = () => {
    const [qntTrilhas, setQntTrilhas] = useState(0);
    const [trilhas, setTrilhas] = useState([]);

    useEffect(() => {
        const buscarTrilhas = async () => {
            try {
                const trilhasCadastradas = await buscarTodasTrilhas();
                setQntTrilhas(trilhasCadastradas.length);
                setTrilhas(trilhasCadastradas);
            } catch (error) {
                console.error("Erro ao buscar trilhas:", error);
                setQntTrilhas(0);
                setTrilhas([]);
            }
        };

        buscarTrilhas();
    }, []);

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
                        valor={qntTrilhas}
                        style={{
                            background: "rgba(108, 99, 255, 0.1)",
                            color: "var(--cor-secundaria)"
                        }}
                    />
                </CardsInformacoes>

                <CardTabela titulo="Trilhas com Melhores Notas" trilhas={trilhas} />
            </ConteudoPagina>
        </>
    )
}

export default DashBoard