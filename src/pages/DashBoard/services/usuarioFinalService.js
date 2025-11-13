const API = "http://localhost:8080";
const token = localStorage.getItem('token');

export async function buscarTodosUsuariosFinais() {
    const response = await fetch(`${API}/usuarios/final?size=100`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Erro ao obter os usuarios finais.");
    }

    const data = await response.json();
    return data.content;
}