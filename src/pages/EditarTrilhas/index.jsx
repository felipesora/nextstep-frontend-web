import { useNavigate, useParams } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import { CabecalhoFormulario, ContainerFormulario, ConteudoPagina, FormularioAcoes, FormularioAjuda, FormularioGrid, FormularioGrupo, FormularioInput, FormularioLabel, FormularioSelect, FormularioTextArea, SecaoErro, SecaoSucesso } from "./styles";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";
import { useEffect, useState } from "react";
import { buscarTrilhaPorId, cadastrarTrilha, editarTrilha } from "../../services/trilhasService";

const EditarTrilhas = () => {
    useAuthRedirect();
    const navigate = useNavigate();
    const { id } = useParams();
    const [trilha, setTrilha] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [area, setArea] = useState('');
    const [nivel, setNivel] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        const fetchTrilha = async () => {
            try {
                const dados = await buscarTrilhaPorId(id);
                
                setTrilha(dados)
                setNome(dados.nome);
                setDescricao(dados.descricao);
                setArea(dados.area);
                setNivel(dados.nivel)
                setStatus(dados.status);
            } catch (erro) {
                console.error(erro);
                setError("Erro ao carregar dados da transação.");
            }
        };

        fetchTrilha();
    }, [id]);

    const handleEditar = async (e) => {
        e.preventDefault();

        if (!nome.trim() || !descricao || !area || !nivel || !status) {
            setError("Preencha todos os campos.");
            setSuccess("");
            return;
        }

        if (nome.length < 3 || nome.length > 150) {
            setError("O nome da tarefa deve ter entre 3 e 150 caracteres.");
            setSuccess("");
            return;
        }

        if (descricao.length < 10 || descricao.length > 400) {
            setError("A descrição da tarefa deve ter entre 10 e 400 caracteres.");
            setSuccess("");
            return;
        }

        const trilha = {
            nome: nome,
            descricao: descricao,
            area: area,
            nivel: nivel,
            status: status
        }

        try {
            await editarTrilha(id, trilha);
            setError("");
            setSuccess("Trilha editada com sucesso!");

            setTimeout(() => {
                navigate(`/detalhes-trilha/${id}`);
            }, 1500);

        } catch (error) {
            console.error(error);
            setError("Erro ao editar a trilha. Tente novamente.");
            setSuccess("");
        }
    }

    return (
        <>
            <Cabecalho
                titulo={trilha ? `Editando a Trilha: ${trilha.nome}` : "Edição de Trilha"}
                descricao="Altere os dados necessários e salve as modificações"
                user="FS"
            />

            <ConteudoPagina>
                <ContainerFormulario>

                    <CabecalhoFormulario>
                        <h2>Informações da Trilha</h2>
                        <p>Preencha os dados básicos da nova trilha de aprendizado</p>
                    </CabecalhoFormulario>

                    <form onSubmit={handleEditar}>
                        <FormularioGrid>

                            {/* Nome */}
                            <FormularioGrupo className="full-width">
                                <FormularioLabel>
                                    Nome da Trilha <span className="required">*</span>
                                </FormularioLabel>

                                <FormularioInput 
                                    type="text" 
                                    placeholder="Ex: Frontend com React"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />

                                <FormularioAjuda>
                                    Digite um nome claro e descritivo para a trilha
                                </FormularioAjuda>
                            </FormularioGrupo>

                            {/* Descricao */}
                            <FormularioGrupo className="full-width">
                                <FormularioLabel>
                                    Descrição <span className="required">*</span>
                                </FormularioLabel>

                                <FormularioTextArea 
                                    placeholder="Descreva os objetivos, conteúdos e benefícios desta trilha..."
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                />

                                <FormularioAjuda>
                                    Explique o que os alunos vão aprender e para quem esta trilha é recomendada
                                </FormularioAjuda>
                            </FormularioGrupo>

                            {/* Area */}
                            <FormularioGrupo>
                                <FormularioLabel>
                                    Área <span className="required">*</span>
                                </FormularioLabel>

                                <FormularioSelect value={area} onChange={(e) => setArea(e.target.value)}>
                                    <option value="" disabled>Selecione uma área</option>
                                    <option value="WEB">Desenvolvimento Web</option>
                                    <option value="BACKEND">Backend</option>
                                    <option value="DATA_SCIENCE">Data Science</option>
                                    <option value="MOBILE">Mobile</option>
                                    <option value="DESIGN">Design</option>
                                    <option value="DEVOPS">DevOps</option>
                                    <option value="IA">IA</option>
                                </FormularioSelect>

                                <FormularioAjuda>
                                    Selecione a área de conhecimento principal
                                </FormularioAjuda>
                            </FormularioGrupo>

                            {/* Nivel */}
                            <FormularioGrupo>
                                <FormularioLabel>
                                    Nível <span className="required">*</span>
                                </FormularioLabel>

                                <FormularioSelect value={nivel} onChange={(e) => setNivel(e.target.value)}>
                                    <option value="" disabled>Selecione um nível</option>
                                    <option value="INICIANTE">Iniciante</option>
                                    <option value="INTERMEDIARIO">Intermediário</option>
                                    <option value="AVANCADO">Avançado</option>
                                </FormularioSelect>

                                <FormularioAjuda>
                                    Defina o nível de dificuldade da trilha
                                </FormularioAjuda>
                            </FormularioGrupo>

                            {/* Status */}
                            <FormularioGrupo>
                                <FormularioLabel>
                                    Status <span className="required">*</span>
                                </FormularioLabel>

                                <FormularioSelect value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="" disabled>Selecione um status</option>
                                    <option value="ATIVA">Ativa</option>
                                    <option value="INATIVA">Inativa</option>
                                </FormularioSelect>

                                <FormularioAjuda>
                                    Trilhas inativas não são visíveis para os alunos
                                </FormularioAjuda>
                            </FormularioGrupo>

                        </FormularioGrid>

                        {error && (
                            <SecaoErro>
                                <p>{error}</p>
                            </SecaoErro>
                        )}

                        {success && (
                            <SecaoSucesso>
                                <p>{success}</p>
                            </SecaoSucesso>
                        )}

                        <FormularioAcoes>
                            <button type="button" className="btn-cancelar" onClick={() => navigate(`/detalhes-trilha/${id}`)}>
                                <i className="fas fa-times"></i>
                                Cancelar
                            </button>

                            <button type="submit" className="btn-cadastrar">
                                <i className="fas fa-save"></i>
                                Salvar Trilha
                            </button>
                        </FormularioAcoes>
                    </form>

                </ContainerFormulario>
            </ConteudoPagina>
        </>
        
    );
}

export default EditarTrilhas;