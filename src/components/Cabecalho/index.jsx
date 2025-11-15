import { useEffect, useState } from "react"
import { CabecalhoContainer, CabecalhoConteudoPagina, ContainerUserInfo, LogoutButton, UserAvatar } from "./styles"
import { buscarUsuarioPorId } from "../../services/usuarioService";
import { useNavigate } from "react-router-dom";
import LogoutModal from "../LogoutModal"

const Cabecalho = ({ titulo, descricao }) => {
    const [usuario, setUsuario] = useState(null);
    const [logoutModalOpen, setLogoutModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const idUsuarioLogado = localStorage.getItem("userId");
    const navigate = useNavigate();

    useEffect(() => {
        if (!idUsuarioLogado) return;
        
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
    }, [idUsuarioLogado]);

    const handleLogoutClick = () => {
        setLogoutModalOpen(true);
    };

    const handleCloseModal = () => {
        setLogoutModalOpen(false);
    };

    const handleConfirmLogout = () => {
        setLoading(true);
        // Simula um pequeno delay para mostrar o loading
        setTimeout(() => {
            localStorage.removeItem("userId");
            localStorage.removeItem("token");
            setLoading(false);
            setLogoutModalOpen(false);
            navigate("/login");
        }, 1000);
    };

    return (
        <>
            <CabecalhoContainer>
                <CabecalhoConteudoPagina>
                    <h1>{titulo}</h1>
                    <p>{descricao}</p>
                </CabecalhoConteudoPagina>

                <ContainerUserInfo>
                    <UserAvatar>
                        {usuario?.nome?.substring(0, 2).toUpperCase() || ""}
                    </UserAvatar>
                    <LogoutButton onClick={handleLogoutClick} title="Sair">
                        <i className="fas fa-sign-out-alt"></i>
                    </LogoutButton>
                </ContainerUserInfo>
            </CabecalhoContainer>

            <LogoutModal 
                isOpen={logoutModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmLogout}
                loading={loading}
            />
        </>
    )
}

export default Cabecalho