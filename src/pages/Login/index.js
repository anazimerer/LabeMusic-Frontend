import React from 'react'

export default function Login() {

    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>Email ou nickname</label>
                <input
                    type="email"
                    name="email"
                    pattern="{5,}"
                    title="Digite no mínimo 5 caracteres"
                    required
                />
                <label>Senha:</label>
                <input
                    type="password"
                    name="password"
                    pattern="{6,}"
                    title="Sua senha deve ter no mínimo 6 caracteres"
                    required
                />
                <div>
                    <button>ENTRAR</button>
                </div>

            </form>
        </div>
    );
}