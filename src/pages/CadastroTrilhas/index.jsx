import { useNavigate } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import { 
    CabecalhoFormulario, 
    ContainerFormulario, 
    ConteudoPagina, 
    FormularioAcoes, 
    FormularioAjuda, 
    FormularioGrid, 
    FormularioGrupo, 
    FormularioInput, 
    FormularioLabel, 
    FormularioSelect, 
    FormularioTextArea, 
    SecaoErro, 
    SecaoSucesso,
    BotaoAjudaIA,
    StatusGeracao,
    LoadingSpinner,
    SugestaoContainer
} from "./styles";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";
import { useState } from "react";
import { cadastrarTrilha } from "../../services/trilhasService";
import { resumirTrilha } from "../../services/resumoIAService";

const CadastroTrilhas = () => {
    useAuthRedirect();
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [area, setArea] = useState('');
    const [nivel, setNivel] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [erroResumo, setErroResumo] = useState("");
    const [successoResumo, setSuccessoResumo] = useState("");
    const [gerandoResumo, setGerandoResumo] = useState(false);

    const handleCadastrar = async (e) => {
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
            await cadastrarTrilha(trilha);
            setError("");
            setSuccess("Trilha cadastrada com sucesso!");

            setTimeout(() => {
                navigate("/trilhas");
            }, 1500);

        } catch (error) {
            console.error(error);
            setError("Erro ao cadastrar a trilha. Tente novamente.");
            setSuccess("");
        }
    }

    const pedirAjuda = async () => {
        if (!nome.trim()) {
            setErroResumo("Digite o nome da trilha para gerar uma descrição com a IA.");
            setSuccessoResumo("");
            return;
        }

        setErroResumo("");
        setSuccessoResumo("");
        setGerandoResumo(true);

        try {
            const resumo = await resumirTrilha(nome);
            console.log(resumo.resposta);
            
            setDescricao(resumo.resposta);
            setSuccessoResumo("Descrição gerada com sucesso! Revise e ajuste se necessário.");

        } catch (erro) {
            console.error(erro);
            setErroResumo("Erro ao gerar descrição. Verifique sua conexão e tente novamente.");
            setSuccessoResumo("");
        } finally {
            setGerandoResumo(false);
        }
    };

    const usarSugestao = () => {
        setSuccessoResumo("");
    };

    const descartarSugestao = () => {
        setDescricao("");
        setSuccessoResumo("");
    };

    return (
        <>
            <Cabecalho
                titulo="Cadastrar Nova Trilha"
                descricao="Crie uma nova trilha de aprendizado"
            />

            <ConteudoPagina>
                <ContainerFormulario>

                    <CabecalhoFormulario>
                        <h2>Informações da Trilha</h2>
                        <p>Preencha os dados básicos da nova trilha de aprendizado</p>
                    </CabecalhoFormulario>

                    <form onSubmit={handleCadastrar}>
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
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                    <FormularioLabel>
                                        Descrição <span className="required">*</span>
                                    </FormularioLabel>
                                    
                                    <BotaoAjudaIA 
                                        type="button" 
                                        onClick={pedirAjuda}
                                        disabled={gerandoResumo}
                                    >
                                        {gerandoResumo ? (
                                            <>
                                                <LoadingSpinner />
                                                Gerando...
                                            </>
                                        ) : (
                                            <>
                                                <i className="fas fa-wand-magic-sparkles"></i>
                                                Sugerir com IA
                                            </>
                                        )}
                                    </BotaoAjudaIA>
                                </div>

                                <FormularioTextArea 
                                    placeholder="Descreva os objetivos, conteúdos e benefícios desta trilha..."
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                />

                                <FormularioAjuda>
                                    Explique o que os alunos vão aprender e para quem esta trilha é recomendada
                                </FormularioAjuda>

                                {/* Status da Geração */}
                                {gerandoResumo && (
                                    <StatusGeracao className="loading">
                                        <LoadingSpinner />
                                        <span>IA está criando uma descrição personalizada...</span>
                                    </StatusGeracao>
                                )}

                                {erroResumo && (
                                    <StatusGeracao className="error">
                                        <i className="fas fa-exclamation-triangle"></i>
                                        <span>{erroResumo}</span>
                                    </StatusGeracao>
                                )}

                                {successoResumo && (
                                    <SugestaoContainer>
                                        <div className="sugestao-header">
                                            <i className="fas fa-lightbulb"></i>
                                            <span>Descrição gerada com sucesso!</span>
                                        </div>
                                        <p className="sugestao-message">{successoResumo}</p>
                                        <div className="sugestao-actions">
                                            <button 
                                                type="button" 
                                                className="btn-usar"
                                                onClick={usarSugestao}
                                            >
                                                <i className="fas fa-check"></i>
                                                Continuar Editando
                                            </button>
                                            <button 
                                                type="button" 
                                                className="btn-descartar"
                                                onClick={descartarSugestao}
                                            >
                                                <i className="fas fa-times"></i>
                                                Descartar
                                            </button>
                                        </div>
                                    </SugestaoContainer>
                                )}
                            </FormularioGrupo>

                            {/* Resto do formulário permanece igual */}
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
                                <i className="fas fa-exclamation-circle"></i>
                                <p>{error}</p>
                            </SecaoErro>
                        )}

                        {success && (
                            <SecaoSucesso>
                                <i className="fas fa-check-circle"></i>
                                <p>{success}</p>
                            </SecaoSucesso>
                        )}

                        <FormularioAcoes>
                            <button type="button" className="btn-cancelar" onClick={() => navigate("/trilhas")}>
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

export default CadastroTrilhas;