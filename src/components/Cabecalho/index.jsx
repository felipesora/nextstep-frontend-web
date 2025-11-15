import { useEffect, useState } from "react"
import { CabecalhoContainer, CabecalhoConteudoPagina, ContainerUserInfo, UserAvatar } from "./styles"
import { buscarUsuarioPorId } from "../../pages/Usuarios/services/usuarioService";

const Cabecalho = ({ titulo, descricao }) => {
    const [usuario, setUsuario] = useState(null);
    const idUsuarioLogado = localStorage.getItem("userId");

    useEffect(() => {
        const buscarUsuarioLogado = async () => {
            try {
                const usuarioLogado = await buscarUsuarioPorId(idUsuarioLogado);
                setUsuario(usuarioLogado);
            } catch (error) {
                console.error("Erro ao buscar usuário logado:", error);
                setUsuario(null);
            }
        };

        buscarUsuarioLogado();
    });

    return (
        <CabecalhoContainer>
            <CabecalhoConteudoPagina>
                <h1>{titulo}</h1>
                <p>{descricao}</p>
            </CabecalhoConteudoPagina>

            <ContainerUserInfo>
                <UserAvatar>
                    {usuario?.nome?.substring(0, 2).toUpperCase() || ""}
                </UserAvatar>
            </ContainerUserInfo>
        </CabecalhoContainer>
    )
}

export default Cabecalho