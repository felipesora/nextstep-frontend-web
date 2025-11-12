import { CabecalhoCard, ContainerCard, IconeCard, TituloCard, ValorCard } from "./styles"

const CardPequeno = ( {titulo, icone, valor, style }) => {
    return (
        <>
            <ContainerCard>
                <CabecalhoCard>
                    <TituloCard>{titulo}</TituloCard>
                    <IconeCard style={style}>
                        <i className={icone}></i>
                    </IconeCard>
                </CabecalhoCard>
                <ValorCard>{valor}</ValorCard>
            </ContainerCard>
        </>
    )
}

export default CardPequeno