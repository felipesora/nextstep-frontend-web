import { useEffect, useState } from "react"
import { CabecalhoContainer, CabecalhoConteudoPagina, ContainerUserInfo, LogoutButton, UserAvatar } from "./styles"
import { buscarUsuarioPorId } from "../../pages/Usuarios/services/usuarioService";
import { useNavigate } from "react-router-dom";

const Cabecalho = ({ titulo, descricao }) => {
    const [usuario, setUsuario] = useState(null);
    const idUsuarioLogado = localStorage.getItem("userId");
    const navigate = useNavigate();

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

    const handleLogout = () => {
        if (window.confirm("Tem certeza que deseja sair?")) {
            localStorage.removeItem("userId");
            localStorage.removeItem("token");
            navigate("/login");
        }
    };

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
                <LogoutButton onClick={handleLogout} title="Sair">
                    <i className="fas fa-sign-out-alt"></i>
                </LogoutButton>
            </ContainerUserInfo>
        </CabecalhoContainer>
    )
}

export default Cabecalho