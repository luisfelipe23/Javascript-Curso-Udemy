import './card.css'
import React from 'react'

export default props =>
    <div className="conteudo">
        <div className="retangulo1">
        </div>
        <div className="retangulo2">
            <div className="titulo">
                {props.titulo}
            </div>
        </div>
        <div className="imagem">
            <img src="https://i.imgur.com/JdOtzFT.png" alt="Login Médico" width="500px" height="354px" />
        </div>
        <div className="login">
            <div className="login-email">
                <input type="text" placeholder="Nome de Usuário" />
            </div>
            <div className="login-senha">
                <input type="password" placeholder="Senha"/>
            </div>
        </div>
        <div className="botao-entrar">
            <button type="submit">ENTRAR</button>
        </div>
        <div className="login-ajuda">
            <div className="login-esquecer-senha">
                <h4>Esqueceu a Senha?</h4>
            </div>
            <div className="login-lembrar-senha">
                <h4>Lembre de Mim</h4>
            </div>
        </div>
        <div className="botao-selecionar">
            <button type="button"></button>
        </div>
    </div>