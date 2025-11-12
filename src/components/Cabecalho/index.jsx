import { CabecalhoContainer, CabecalhoConteudoPagina, ContainerUserInfo, UserAvatar } from "./styles"

const Cabecalho = ({ titulo, descricao, user }) => {
    return (
        <CabecalhoContainer>
            <CabecalhoConteudoPagina>
                <h1>{titulo}</h1>
                <p>{descricao}</p>
            </CabecalhoConteudoPagina>

            <ContainerUserInfo>
                <UserAvatar>
                    {user}
                </UserAvatar>
            </ContainerUserInfo>
        </CabecalhoContainer>
    )
}

export default Cabecalho