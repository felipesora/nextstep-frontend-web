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