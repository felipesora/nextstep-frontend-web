import { useNavigate, useParams } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import { CabecalhoFormulario, ContainerFormulario, ConteudoPagina, FormularioAcoes, FormularioAjuda, FormularioGrid, FormularioGrupo, FormularioInput, FormularioLabel, FormularioSelect, FormularioTextArea, SecaoErro, SecaoSucesso } from "./styles";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";
import { useEffect, useState } from "react";
import { buscarConteudoPorId, editarConteudo } from "../../services/conteudoService";

const EditarConteudo = () => {
    useAuthRedirect();
    const navigate = useNavigate();
    const { idTrilha, idConteudo } = useParams();
    const [conteudo, setConteudo] = useState(null);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [tipo, setTipo] = useState('');
    const [link, setLink] = useState('');
    const [trilhaId, setTrilhaId] = useState(0);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        const fetchConteudo = async () => {
            try {
                const dados = await buscarConteudoPorId(idConteudo);
                
                setConteudo(dados)
                setTitulo(dados.titulo);
                setDescricao(dados.descricao);
                setTipo(dados.tipo);
                setLink(dados.link ?? "");
                setTrilhaId(idTrilha);
            } catch (erro) {
                console.error(erro);
                setError("Erro ao carregar dados do conteúdo.");
            }
        };

        fetchConteudo();
    }, [idConteudo]);

    const handleEditar = async (e) => {
        e.preventDefault();

        if (!titulo.trim() || !descricao || !tipo) {
            setError("Preencha todos os campos.");
            setSuccess("");
            return;
        }

        if (titulo.length < 3 || titulo.length > 150) {
            setError("O título do conteúdo deve ter entre 3 e 150 caracteres.");
            setSuccess("");
            return;
        }

        if (descricao.length < 10 || descricao.length > 400) {
            setError("A descrição do conteúdo deve ter entre 10 e 400 caracteres.");
            setSuccess("");
            return;
        }

        const conteudo = {
            titulo: titulo,
            descricao: descricao,
            tipo: tipo,
            link: link,
            id_trilha: idTrilha
        }

        try {
            await editarConteudo(idConteudo, conteudo);
            setError("");
            setSuccess("Conteúdo editado com sucesso!");

            setTimeout(() => {
                navigate(`/detalhes-trilha/${idTrilha}`);
            }, 1500);

        } catch (error) {
            console.error(error);
            setError("Erro ao editar o conteúdo. Tente novamente.");
            setSuccess("");
        }
    }

    return (
        <>
            <Cabecalho
                titulo={conteudo ? `Editando o Conteúdo: ${conteudo.titulo}` : "Edição de Conteúdo"}
                descricao="Atualize as informações deste conteúdo e salve as alterações"
                user="FS"
            />

            <ConteudoPagina>
                <ContainerFormulario>

                    <CabecalhoFormulario>
                        <h2>Informações do Conteúdo</h2>
                        <p>Preencha os dados básicos do novo conteúdo de aprendizado</p>
                    </CabecalhoFormulario>

                    <form onSubmit={handleEditar}>
                        <FormularioGrid>

                            {/* Titulo */}
                            <FormularioGrupo className="full-width">
                                <FormularioLabel>
                                    Título do Conteúdo <span className="required">*</span>
                                </FormularioLabel>

                                <FormularioInput 
                                    type="text" 
                                    placeholder="Ex: Conceitos básicos de APIs REST"
                                    value={titulo}
                                    onChange={(e) => setTitulo(e.target.value)}
                                />

                                <FormularioAjuda>
                                    Escolha um título curto e objetivo que descreva claramente o conteúdo.
                                </FormularioAjuda>
                            </FormularioGrupo>

                            {/* Descricao */}
                            <FormularioGrupo className="full-width">
                                <FormularioLabel>
                                    Descrição <span className="required">*</span>
                                </FormularioLabel>

                                <FormularioTextArea 
                                    placeholder="Descreva brevemente o que este conteúdo aborda e por que ele é importante..."
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                />

                                <FormularioAjuda>
                                    Forneça um resumo claro do conteúdo, destacando o tema principal e o que o aluno ganhará ao consumi-lo.
                                </FormularioAjuda>
                            </FormularioGrupo>

                            {/* Tipo */}
                            <FormularioGrupo>
                                <FormularioLabel>
                                    Tipo <span className="required">*</span>
                                </FormularioLabel>

                                <FormularioSelect value={tipo} onChange={(e) => setTipo(e.target.value)}>
                                    <option value="" disabled>Selecione uma tipo</option>
                                    <option value="CURSO">Curso</option>
                                    <option value="ARTIGO">Artigo</option>
                                    <option value="PODCAST">Podcast</option>
                                    <option value="VIDEO">Vídeo</option>
                                    <option value="DESAFIO">Desafio</option>
                                </FormularioSelect>

                                <FormularioAjuda>
                                    Escolha o formato do conteúdo que será adicionado à trilha.
                                </FormularioAjuda>
                            </FormularioGrupo>

                            {/* Link */}
                            <FormularioGrupo className="full-width">
                                <FormularioLabel>
                                    Link (Opcional)
                                </FormularioLabel>

                                <FormularioInput 
                                    type="text" 
                                    placeholder="Ex: https://www.youtube.com/watch?v=abc123"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                />

                                <FormularioAjuda>
                                    Adicione a URL do vídeo, artigo, curso ou podcast, se houver.
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
                            <button type="button" className="btn-cancelar" onClick={() => navigate(`/detalhes-trilha/${idTrilha}`)}>
                                <i className="fas fa-times"></i>
                                Cancelar
                            </button>

                            <button type="submit" className="btn-cadastrar">
                                <i className="fas fa-save"></i>
                                Salvar Conteúdo
                            </button>
                        </FormularioAcoes>
                    </form>

                </ContainerFormulario>
            </ConteudoPagina>
        </>
        
    );
}

export default EditarConteudo;