import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 900px;
    background: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    min-height: 550px;
    @media (max-width: 768px) {
        flex-direction: column;
        max-width: 400px;
    }
`

export const SecaoBoasVindas = styled.div`
    flex: 1;
    background: linear-gradient(135deg, var(--cor-principal) 0%, var(--cor-secundaria) 100%);
    color: white;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
    @media (max-width: 768px) {
        padding: 30px 25px;
        text-align: center;
    }
    @media (max-width: 480px) {
        padding: 25px 20px;
    }
`

export const SecaoLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 25px;
    img {
        width: 200px;
        height: auto;
    }
`

export const ConteudoBoasVindas = styled.div`
    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 15px;
        line-height: 1.2;
        @media (max-width: 768px) {
            font-size: 1.6rem;
        }
        @media (max-width: 480px) {
            font-size: 1.4rem;
        }
    }
    p {
        font-size: 1rem;
        opacity: 0.9;
        line-height: 1.5;
        margin-bottom: 25px;
    }
`

export const ListaFuncionalidades = styled.ul`
    list-style: none;
    margin-top: 30px;
    li {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 15px;
        font-size: 0.9rem;
    }
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`

export const IconeFuncionalidade = styled.div`
    width: 35px;
    height: 35px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 0.9rem;
`

export const LoginSecao = styled.div`
    flex: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px) {
        padding: 30px 25px;
    }
    @media (max-width: 480px) {
        padding: 25px 20px;
    }
`

export const LoginCabecalho = styled.div`
    text-align: center;
    margin-bottom: 35px;
    h2 {
        font-size: 1.8rem;
        color: var(--cor-texto-principal);
        margin-bottom: 8px;
        font-weight: 700;
    }
    p {
        color: #8C8C9A;
        font-size: 0.95rem;
    }
`

export const LoginForm = styled.form`
    width: 100%;
`

export const FormGrupo = styled.div`
    margin-bottom: 25px;
`

export const FormLabel = styled.label`
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--cor-texto-principal);
    font-size: 0.9rem;
`

export const InputGrupo = styled.div`
    position: relative;
`

export const Input = styled.input`
    width: 84%;
    padding: 14px 14px 14px 45px;
    border: 2px solid #E6E9EF;
    border-radius: 8px;
    font-size: 0.95rem;
    transition: all 0.3s;
    background: #FFFFFF;
    color: var(--cor-texto-principal);
    &:focus {
        outline: none;
        border-color: var(--cor-principal);
        box-shadow: 0 0 0 3px rgba(0, 120, 255, 0.1);
    }
`

export const InputIcon = styled.i`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gray);
  font-size: 1.1rem;
  pointer-events: none;
`;

export const SecaoErro = styled.div`
    text-align: center;
    margin: 0 0 10px 0;
    p {
        color: var(--erro);
        font-weight: 500;
    }
`

export const SecaoSucesso = styled.div`
    text-align: center;
    margin: 0 0 10px 0;
    p {
        color: var(--cor-texto-enfase);
        font-weight: 500;
    }
`

export const BotaoLogin = styled.button`
    width: 100%;
    padding: 14px;
    border: none;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: var(--cor-principal);
    color: white;
    &:hover {
        background: #0066d4;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 120, 255, 0.3);
    }
`

export const AcessoAdmin = styled.div`
    text-align: center;
    margin-top: 20px;
    color: #8C8C9A;
    font-size: 0.85rem;
    button {
        color: var(--cor-principal);
        text-decoration: none;
        font-weight: 600;
        background-color: transparent;
        border: none;
        cursor: pointer;
        margin-left: 5px;
    }
    button:hover {
        text-decoration: underline;
    }
`