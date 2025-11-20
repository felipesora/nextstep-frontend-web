const API = "https://nextstep-backend-java.onrender.com";
const API_DESENV = "http://localhost:8080";

export async function resumirTrilha(nomeTrilha) {
    const token = localStorage.getItem('token');

    const response = await fetch(`${API}/ia/resumir`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            prompt: nomeTrilha
        }),
    });

    if (!response.ok) {
        const erro = await response.text();
        throw new Error(`Erro na geração do resumo da trilha! ${erro}`);
    }

    return await response.json();
};