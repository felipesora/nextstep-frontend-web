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
}