const API = "http://localhost:8080";

export async function buscarTodosUsuariosFinais() {
    const token = localStorage.getItem('token');
    
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