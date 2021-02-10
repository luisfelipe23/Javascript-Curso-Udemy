import React from 'react'
import './login-medico.scss'

export default () =>
    <div className="conteudo">
        <div className="retangulo1">
            <img src="https://i.imgur.com/JdOtzFT.png" alt="Login Médico" width="500px" height="354px" />
            <div className="retangulo2">
            <div className="titulo">
                <h1>BEM-VINDO</h1>
            </div>
            <div className="login">
                <div className="login-email">
                    <input type="text" placeholder="Nome de Usuário" />
                </div>
                <div className="login-senha">
                    <input type="password" placeholder="Senha" />
                </div>
            </div>
            <div className="botao-entrar">
                <button type="submit">ENTRAR</button>
            </div>
            <div className="login-ajuda">
                <nav>
                    <ul>
                        <li>Lembre de Mim</li>
                        <li>Esqueceu a Senha?</li>
                    </ul>
                </nav>
                <div className="botao-selecionar">
                    <button type="button"></button>
                </div>
            </div>
            <div className="cadastro">
                <h4>Não tem conta?</h4>
                <button>CADASTRE-SE</button>
            </div>
        </div>

        </div>
    </div>