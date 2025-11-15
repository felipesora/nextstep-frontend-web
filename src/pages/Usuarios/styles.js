import styled from "styled-components";

export const ConteudoPagina = styled.div`
    padding: 30px;
    flex: 1;

    @media (max-width: 768px) {
        padding: 20px;

        .stats-cards {
        grid-template-columns: 1fr;
        }

        .section-header {
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
        }

        .usuarios-section {
        padding: 20px;
        }

        .usuarios-table th,
        .usuarios-table td {
        padding: 12px 16px;
        }
    }
`;

export const StatsCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    margin-bottom: 40px;

    .stat-card {
        background: var(--card);
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.3s ease;
        position: relative;
        border: 1px solid var(--light-gray);

        &:hover {
            box-shadow: 0 6px 16px rgba(0,0,0,0.1);
        }
    }

    .notification-card {
        cursor: pointer;
        background: linear-gradient(135deg, var(--cor-fundo), var(--card));
        border: 2px solid var(--cor-secundaria);
        
        &:hover {
            transform: translateY(-2px);
            border-color: var(--cor-principal);
            box-shadow: 0 6px 20px rgba(108, 99, 255, 0.15);
        }
    }

    .stat-info h3 {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--cor-texto-principal);
        margin: 0 0 8px 0;
    }

    .stat-label {
        color: var(--gray);
        font-size: 0.9rem;
        margin: 0;
        font-weight: 500;
    }

    .stat-icon {
        width: 60px;
        height: 60px;
        border-radius: 12px;
        background: var(--cor-principal);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
    }

    .notification-card .stat-icon {
        background: var(--cor-secundaria);
    }
`

export const UsuariosSection = styled.div`
    background: var(--card);
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);

    .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
    }

    .section-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--cor-texto-principal);
    }
`

export const TabelaUsuarios = styled.div`
    overflow-x: auto;
    border-radius: 8px;
    border: 1px solid var(--light-gray);

    .usuarios-table {
        width: 100%;
        border-collapse: collapse;
        background: var(--card);
    }

    .usuarios-table th {
        background: var(--cor-fundo);
        padding: 16px 20px;
        text-align: left;
        font-weight: 600;
        color: var(--cor-texto-principal);
        border-bottom: 1px solid var(--light-gray);
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .usuarios-table td {
        padding: 16px 20px;
        border-bottom: 1px solid var(--light-gray);
        color: var(--cor-texto-principal);
    }

    .usuarios-table tr:last-child td {
        border-bottom: none;
    }

    .usuarios-table tr:hover {
        background: rgba(0, 120, 255, 0.02);
    }

    .user-info {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .user-avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: var(--cor-principal);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 600;
        font-size: 0.9rem;
    }

    .user-name {
        font-weight: 500;
    }

    .user-email {
        color: var(--gray);
    }

    .table-actions {
        display: flex;
        gap: 8px;
    }

    .btn-action {
        width: 32px;
        height: 32px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;
        font-size: 0.8rem;
    }

    .btn-edit {
        background: rgba(108, 99, 255, 0.1);
        color: var(--cor-secundaria);
    }

    .btn-edit:hover {
        background: rgba(108, 99, 255, 0.2);
    }

    .btn-delete {
        background: rgba(255, 71, 87, 0.1);
        color: #FF4757;
    }

    .btn-delete:hover {
        background: rgba(255, 71, 87, 0.2);
    }

    .no-data {
        text-align: center;
        color: var(--gray);
        padding: 40px !important;
        font-size: 1rem;
    }

    .no-data i {
        font-size: 2rem;
        margin-bottom: 12px;
        display: block;
        opacity: 0.5;
    }
`