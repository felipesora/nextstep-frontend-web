import { jwtDecode } from "jwt-decode";

export async function login(email, senha) {
    const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
    });

    if (!response.ok) {
        throw new Error("Login falhou! Verifique suas credenciais.");
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);

    const decoded = jwtDecode(data.token);

    const userId = decoded.id;

    localStorage.setItem("userId", userId);

    return data.token;
}

export function isTokenValid() {
    const token = localStorage.getItem("token");
    if (!token) return false;

    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        return decoded.exp > currentTime;
    } catch (err) {
        console.error("Erro ao decodificar token:", err);
        return false;
    }
}