import React from 'react'

export default function Signup() {
    return (
        <div>
            <p>Faça seu cadastro</p>
            <form >
                <p>Nome de usuário:</p>
                <input
                    name="username"
                    pattern="{5,}"
                    title="Digite no mínimo 5 caracteres"
                />
                <p>Nickname:</p>
                <input
                    name="username"
                    pattern="{5,}"
                    title="Digite no mínimo 5 caracteres"
                />
                <p>Email:</p>
                <input
                    name="email"
                    type="email"
                    title="Digite um email válido"
                />
                <p>Senha:</p>
                <input
                    name="password"
                    pattern="{6,}"
                    type="password"
                />
                <div>
                    <button>CADASTRAR</button>
                </div>
            </form>
        </div>
    );
}