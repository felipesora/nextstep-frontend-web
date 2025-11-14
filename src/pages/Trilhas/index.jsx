import { useEffect, useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import CardTrilha from "./components/CardTrilha";
import { ContainerBotaoAdicionar, ContainerBotoesFiltro, ContainerCards, ContainerFiltro, ConteudoPagina, FiltroInput, FiltroSelects } from "./styles";
import { buscarTodasTrilhas } from "../../services/trilhasService"
import { useAuthRedirect } from "../../hooks/useAuthRedirect";

const Trilhas = () => {
    useAuthRedirect();
    const [trilhas, setTrilhas] = useState([]);
    const [busca, setBusca] = useState("");
    const [categoria, setCategoria] = useState("TODOS");
    const [status, setStatus] = useState("TODOS");
    const [trilhasFiltradas, setTrilhasFiltradas] = useState([]);

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

        buscarTrilhas();
    }, []);

    useEffect(() => {
        let filtradas = trilhas;

        // filtro por texto
        if (busca.trim() !== "") {
            filtradas = filtradas.filter(t =>
                t.nome.toLowerCase().includes(busca.toLowerCase())
            );
        }

        // filtro por categoria
        if (categoria !== "TODOS") {
            filtradas = filtradas.filter(t => t.area === categoria);
        }

        // filtro por status
        if (status !== "TODOS") {
            filtradas = filtradas.filter(t => t.status === status);
        }

        setTrilhasFiltradas(filtradas);
    }, [busca, categoria, status, trilhas]);

    return(
        <>
            <Cabecalho
                titulo="Trilhas de Aprendizado"
                descricao="Gerencie todas as trilhas da plataforma"
                user="FS"
            />
            <ConteudoPagina>
                <ContainerFiltro>
                    <FiltroInput>
                        <i className="fas fa-search" style={{ color: "#8C8C9A" }}></i>
                        <input 
                            type="text" 
                            placeholder="Buscar trilhas..." 
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                        />
                    </FiltroInput>

                    <FiltroSelects>
                        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                            <option value="TODOS">Todas as Categorias</option>
                            <option value="WEB">Desenvolvimento Web</option>
                            <option value="BACKEND">Backend</option>
                            <option value="DATA_SCIENCE">Data Science</option>
                            <option value="MOBILE">Mobile</option>
                            <option value="DESIGN">Design</option>
                            <option value="DEVOPS">DevOps</option>
                            <option value="IA">IA</option>
                        </select>
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="TODOS">Todos os Status</option>
                            <option value="ATIVA">Ativas</option>
                            <option value="INATIVA">Inativas</option>
                        </select>
                    </FiltroSelects>
                </ContainerFiltro>

                <ContainerBotoesFiltro>
                    <button 
                        className="btn btn_limpar_filtro"
                        onClick={() => {
                            setBusca("");
                            setCategoria("TODOS");
                            setStatus("TODOS");
                        }}
                    >
                        <i className="fas fa-eraser"></i>
                        Limpar Filtro
                    </button>

                    {/* <button className="btn btn_filtrar">
                        <i className="fas fa-filter"></i>
                        Filtrar
                    </button> */}
                </ContainerBotoesFiltro>

                <ContainerBotaoAdicionar>
                    <button className="btn btn_adicionar">
                        <i className="fas fa-plus-circle"></i>
                        Nova Trilha
                    </button>
                </ContainerBotaoAdicionar>

                <ContainerCards>
                    {trilhasFiltradas.length > 0 ? (
                        trilhasFiltradas.map((trilha) => (
                            <CardTrilha key={trilha.id_trilha} trilha={trilha} />
                        ))
                    ) : (
                        <p>Nenhuma trilha cadastrada</p>
                    )}
                </ContainerCards>
            </ConteudoPagina>
        </>
    )
};

export default Trilhas;