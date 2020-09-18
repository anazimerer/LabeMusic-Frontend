import React from 'react'
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div>
            <li>
                <Link to="/musica">Minha biblioteca</Link>
                <Link to="/criarMusica">Criar nova música</Link>
                <div>Buscar</div>
            </li>
        </div>
    );
}