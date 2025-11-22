const API = "https://nextstep-backend-java.onrender.com";
const API_DESENV = "http://localhost:8080";

export async function buscarTodasSolicitacoes() {
    const token = localStorage.getItem('token');

    const response = await fetch(`${API}/solicitacoes?size=100`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Erro ao obter as solicitações.");
    }

    const data = await response.json();
    return data.content;
};

export async function buscarSolicitacaoPorId(idSolicitacao) {
    const token = localStorage.getItem('token');

    const response = await fetch(`${API}/conteudos/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Erro ao obter os dados do conteúdo.');
    }

    return await response.json();
};

export async function cadastrarSolicitacao(solicitacao) {

    const response = await fetch(`${API}/solicitacoes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: solicitacao.nome,
            email: solicitacao.email,
            senha: solicitacao.senha,
        }),
    });

    if (!response.ok) {
        const erro = await response.text();
        throw new Error(`Erro no cadastro de conteúdo! ${erro}`);
    }

    return await response.json();
};

export async function deletarSolicitacao(idSolicitacao) {
    const token = localStorage.getItem('token');
    
    const response = await fetch(`${API}/solicitacoes/${idSolicitacao}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        throw new Error('Erro ao deletar solicitação.');
    }

    return;
};