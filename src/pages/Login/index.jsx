import { AcessoAdmin, BotaoLogin, ConteudoBoasVindas, FormGrupo, FormLabel, IconeFuncionalidade, Input, InputGrupo, InputIcon, ListaFuncionalidades, LoginCabecalho, LoginContainer, LoginForm, LoginSecao, SecaoBoasVindas, SecaoErro, SecaoLogo } from "./styles";
import { LoginBodyStyle } from './LoginBodyStyle';
import LogoBranca from '../../../public/images/logo-branca.png';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { isTokenValid, login } from "./services/authService";

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isTokenValid()) {
            navigate('/dashboard');
        }
    }, [navigate]);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await login(email, senha);
            setError('');
            navigate('/dashboard')
        } catch (error) {
            console.error(error);
            setError('Email ou senha inválidos.');
        }
    }

    return (
        <>
            <LoginBodyStyle />
            <LoginContainer>
                <SecaoBoasVindas>
                    <SecaoLogo>
                        <img src={LogoBranca} alt="Logo branca" />
                    </SecaoLogo>

                    <ConteudoBoasVindas>
                        <h2>Área Administrativa</h2>
                        <p>
                            Acesso exclusivo para a equipe de gestão de conteúdo e trilhas de aprendizado.
                            Gerencie toda a plataforma NextStep em um só lugar.
                        </p>
                    </ConteudoBoasVindas>

                    <ListaFuncionalidades>
                        <li>
                            <IconeFuncionalidade>
                                <i className="fas fa-map-signs"></i>
                            </IconeFuncionalidade>
                            <span>Crie e gerencie trilhas de aprendizado</span>
                        </li>
                        <li>
                            <IconeFuncionalidade>
                                <i className="fas fa-chart-line"></i>
                            </IconeFuncionalidade>
                            <span>Acompanhe métricas e desempenho</span>
                        </li>
                        <li>
                            <IconeFuncionalidade>
                                <i className="fas fa-users-cog"></i>
                            </IconeFuncionalidade>
                            <span>Gerencie usuários e conteúdos</span>
                        </li>
                    </ListaFuncionalidades>
                </SecaoBoasVindas>

                <LoginSecao>
                    <LoginCabecalho>
                        <h2>Acesso Restrito</h2>
                        <p>Use suas credenciais administrativas</p>
                    </LoginCabecalho>

                    <LoginForm onSubmit={handleLogin}>

                        <FormGrupo>
                            <FormLabel>E-mail</FormLabel>
                            <InputGrupo>
                                <InputIcon className="fas fa-envelope" />
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="admin@nextstep.com"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </InputGrupo>
                        </FormGrupo>

                        <FormGrupo>
                            <FormLabel>Senha de Acesso</FormLabel>
                            <InputGrupo>
                                <InputIcon className="fas fa-lock" />
                                <Input
                                    type="password"
                                    id="password"
                                    placeholder="Sua senha administrativa"
                                    required
                                    onChange={(e) => setSenha(e.target.value)}
                                    value={senha}
                                />
                            </InputGrupo>
                        </FormGrupo>

                        {error && (
                            <SecaoErro>
                                <p>{error}</p>
                            </SecaoErro>
                        )}

                        <BotaoLogin type="submit">
                            <i className="fas fa-sign-in-alt"></i>
                            Acessar Painel Admin
                        </BotaoLogin>

                        <AcessoAdmin>
                            <p>Problemas de acesso? <a href="#">Contate um admin</a></p>
                        </AcessoAdmin>
                    </LoginForm>
                </LoginSecao>
            </LoginContainer>
        </>
    )
}

export default Login;