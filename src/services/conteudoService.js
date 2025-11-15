const API = "http://localhost:8080";
const token = localStorage.getItem('token');

export async function buscarConteudoPorId(id) {
    const response = await fetch(`${API}/conteudos/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Erro ao obter os dados do conteúdo.');
    }

    return await response.json();
}

export async function cadastrarConteudo(conteudo) {
    const response = await fetch(`${API}/conteudos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            titulo: conteudo.titulo,
            descricao: conteudo.descricao,
            tipo: conteudo.tipo,
            link: conteudo.link,
            id_trilha: conteudo.id_trilha
        }),
    });

    if (!response.ok) {
        const erro = await response.text();
        throw new Error(`Erro no cadastro de conteúdo! ${erro}`);
    }

    return await response.json();
};

export async function editarConteudo(idConteudo, conteudo) {
    const response = await fetch(`${API}/conteudos/${idConteudo}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            titulo: conteudo.titulo,
            descricao: conteudo.descricao,
            tipo: conteudo.tipo,
            link: conteudo.link,
            id_trilha: conteudo.id_trilha
        })
    });

    if (!response.ok) {
        throw new Error('Erro ao editar os dados do conteúdo.');
    }

    return await response.json();
}

export async function deletarConteudo(idConteudo) {
    const response = await fetch(`${API}/conteudos/${idConteudo}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        throw new Error('Erro ao deletar conteudo.');
    }

    return;
}