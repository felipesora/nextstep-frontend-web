const API = "http://localhost:8080";
const token = localStorage.getItem('token');

export async function buscarTodasTrilhas() {
    const response = await fetch(`${API}/trilhas?size=100`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Erro ao obter as trilhas.");
    }

    const data = await response.json();
    return data.content;
};

export async function buscarTrilhaPorId(id) {
    const response = await fetch(`${API}/trilhas/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Erro ao obter os dados da trilha.');
    }

    return await response.json();
}

export async function cadastrarTrilha(trilha) {
    const response = await fetch(`${API}/trilhas`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            nome: trilha.nome,
            descricao: trilha.descricao,
            area: trilha.area,
            nivel: trilha.nivel,
            status: trilha.status
        }),
    });

    if (!response.ok) {
        const erro = await response.text();
        throw new Error(`Cadastro de tarefa! ${erro}`);
    }

    return await response.json();
};

export async function editarTrilha(idTrilha, trilha) {
    const response = await fetch(`${API}/trilhas/${idTrilha}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: trilha.nome,
            descricao: trilha.descricao,
            area: trilha.area,
            nivel: trilha.nivel,
            status: trilha.status
        })
    });

    if (!response.ok) {
        throw new Error('Erro ao editar os dados da trilha.');
    }

    return await response.json();
}

export async function deletarTrilha(idTrilha) {
    const response = await fetch(`${API}/trilhas/${idTrilha}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        throw new Error('Erro ao deletar trilha.');
    }

    return;
}