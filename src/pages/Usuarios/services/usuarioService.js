const API = "http://localhost:8080";
const token = localStorage.getItem('token');

export async function buscarTodosUsuarios() {
    const response = await fetch(`${API}/usuarios/admin?size=100`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Erro ao obter os usuarios.");
    }

    const data = await response.json();
    return data.content;
};

export async function buscarUsuarioPorId(id) {
    const response = await fetch(`${API}/usuarios/admin/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Erro ao obter os dados do usuario.');
    }

    return await response.json();
};

export async function cadastrarUsuario(usuario) {
    const response = await fetch(`${API}/usuarios/admin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha,
        }),
    });

    if (!response.ok) {
        const erro = await response.text();
        throw new Error(`Erro no cadastro de usuário! ${erro}`);
    }

    return await response.json();
};

export async function editarUsuario(idUsuario, usuario) {
    const response = await fetch(`${API}/usuarios/admin/${idUsuario}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha,
        })
    });

    if (!response.ok) {
        throw new Error('Erro ao editar os dados do usuário.');
    }

    return await response.json();
}

export async function deletarTrilha(idUsuario) {
    const response = await fetch(`${API}/usuarios/admin/${idUsuario}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        throw new Error('Erro ao deletar usuário.');
    }

    return;
}