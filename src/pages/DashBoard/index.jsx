import { useEffect, useState } from "react"
import Cabecalho from "../../components/Cabecalho"
import CardPequeno from "./components/CardPequeno"
import CardTabela from "./components/CardTabela"
import { CardsInformacoes, ConteudoPagina } from "./styles"
import { buscarTodasTrilhas, buscarTrilhasAtivas } from "../../services/trilhasService"
import { buscarTodosUsuariosFinais } from "./services/usuarioFinalService"
import { useAuthRedirect } from "../../hooks/useAuthRedirect.js"

const DashBoard = () => {
    useAuthRedirect();
    const [qntTrilhas, setQntTrilhas] = useState(0);
    const [qntUsuariosFinais, setQntUsuariosFinais] = useState(0);
    const [trilhas, setTrilhas] = useState([]);

    useEffect(() => {
        const buscarTrilhas = async () => {
            try {
                const trilhasCadastradas = await buscarTodasTrilhas();
                setTrilhas(trilhasCadastradas);
            } catch (error) {
                console.error("Erro ao buscar trilhas:", error);
                setTrilhas([]);
            }
        };

        const buscarTrilhasAtivasCadastradas = async () => {
            try {
                const trilhasAtivas = await buscarTrilhasAtivas();
                setQntTrilhas(trilhasAtivas.length);
            } catch (error) {
                console.error("Erro ao buscar trilhas ativas:", error);
                setQntTrilhas(0);
            }
        };

        const buscarUsuariosFinais = async () => {
            try {
                const usuariosFinaisCadastradas = await buscarTodosUsuariosFinais();
                setQntUsuariosFinais(usuariosFinaisCadastradas.length);
            } catch (error) {
                console.error("Erro ao buscar usuários finais:", error);
                setQntUsuariosFinais(0);
            }
        };

        buscarTrilhas();
        buscarTrilhasAtivasCadastradas();
        buscarUsuariosFinais();
    }, []);

    return(
        <>
            <Cabecalho
                titulo="Dashboard"
                descricao="Visão geral do sistema NextStep"
            />
            <ConteudoPagina>
                <CardsInformacoes>
                    <CardPequeno 
                        titulo="Total de Alunos"
                        icone="fas fa-users"
                        valor={qntUsuariosFinais}
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