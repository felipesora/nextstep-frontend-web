export const formatarArea = (area) => {
    switch (area) {
        case "BACKEND":
            return "Backend"
        case "WEB":
            return "Desenvolvimento WEB"
        case "DATA_SCIENCE":
            return "Data Science"
        case "MOBILE":
            return "Desenvolvimento MOBILE"
        case "DESIGN":
            return "Design"
        case "DEVOPS":
            return "DevOps"
        case "IA":
            return "IA"
        default:
            return area
    }
};

export const formatarNivel = (nivel) => {
    switch (nivel) {
        case "INICIANTE":
            return "Iniciante"
        case "INTERMEDIARIO":
            return "Intermediário"
        case "AVANCADO":
            return "Avançado"
        default:
            return nivel
    }
};

export const calcularMediaNotas = (notas) => {
    if (!notas || notas.length === 0) return "-";

    const soma = notas.reduce((acc, nota) => acc + nota.valor_nota, 0);
    const media = soma / notas.length;
    return media.toFixed(1);
};

export const renderizarEstrelas = (media) => {
    if (media === "-" || media === undefined) return null;

    const estrelas = [];
    const valor = parseFloat(media);

    const cheia = Math.floor(valor);         // quantidade de estrelas cheias
    const decimal = valor - cheia;           // parte decimal (0.0 a 1.0)

    for (let i = 0; i < 5; i++) {
        if (i < cheia) {
            // estrela cheia
            estrelas.push(<i key={i} className="fas fa-star"></i>);
        } else if (i === cheia && decimal >= 0.5) {
            // meia estrela
            estrelas.push(<i key={i} className="fas fa-star-half-alt"></i>);
        } else {
            // estrela vazia
            estrelas.push(<i key={i} className="far fa-star"></i>);
        }
    }

    return estrelas;
};

export const formartarTipoConteudo = (tipo) => {
    switch(tipo) {
            case 'CURSO':
                return 'Curso';
            case 'ARTIGO':
                return 'Artigo';
            case 'PODCAST':
                return 'Podcast';
            case 'VIDEO':
                return 'Vídeo';
            case 'DESAFIO':
                return 'Desafio';
            default:
                return 'rgba(108, 99, 255, 0.15)';
        }
}