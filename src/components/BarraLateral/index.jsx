import { ContainerBarraLateral, ItemMenu, LogoContainer, MenuBarraLateral } from "./styles";
import LogoAzul from "../../../public/images/logo-azul.png"
import { Link } from "react-router-dom";

const BarraLateral = () => {
    return (
        <ContainerBarraLateral>
            <LogoContainer>
                <img src={LogoAzul} alt="Logo azul" />
            </LogoContainer>

            <MenuBarraLateral>
                <ItemMenu>
                    <Link to="/dashboard">
                        <i className="fas fa-chart-pie"></i>
                        <span>Dashboard</span>
                    </Link>
                </ItemMenu>
                <ItemMenu>
                    <Link to="/trilhas">
                        <i className="fas fa-map-signs"></i>
                        <span>Trilhas</span>
                    </Link>
                </ItemMenu>
                <ItemMenu>
                    <Link>
                        <i className="fas fa-users"></i>
                        <span>Usuários</span>
                    </Link>
                </ItemMenu>
            </MenuBarraLateral>
        </ContainerBarraLateral>
    )
}

export default BarraLateral;