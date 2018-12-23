import React, { Component } from 'react'
import Container from '../layout/container'
import styles from './contact.module.scss'

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {},
            assunto: ''
        }
    }

    handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (this.state.assunto !== 'orcamento') {
            
        }
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        })
    }

    submitForm = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div id={this.props.id || null} className={styles.contact}>
                <Container className={styles.container}>
                    <div>
                        <h2>Contato</h2>
                        <p>Peça aqui seu orçamento ou deixe um comentário,<br/>
                        sugestão ou crítica e retornaremos sua mensagem.</p>
                    </div>

                    <form className={styles.form} onSubmit={this.submitForm}>
                        <input onChange={this.handleInput} type="text" name="nome" placeholder="Nome"/>
                        <input onChange={this.handleInput} type="email" name="email" placeholder="Endereço de e-mail"/>
                        <input onChange={this.handleInput} type="text" name="telefone" placeholder="DDD + Fixo ou Celular"/>
                        <select onChange={this.handleInput} name="assunto">
                            <option value="orcamento">Assunto</option>
                            <option value="">-</option>
                            <option value="orcamento">Orçamento</option>
                            <option value="critica-elogio-sugestao">Crítica, Elogio, Sugestão</option>
                            <option value="orcamento">Outro</option>
                        </select>
                        <label htmlFor="segmento">Segmento:</label>
                        <input onChange={this.handleInput} type="radio" name="segmento" value="comercial"/> Comercial
                        <input onChange={this.handleInput} type="radio" name="segmento" value="residencial"/> Residencial
                        <input onChange={this.handleInput} type="text" name="previsao" placeholder="Previsão de Entrega"/>
                        <input onChange={this.handleInput} type="text" name="area" placeholder="Área do projeto(m²)"/>
                        <textarea onChange={this.handleInput} name="mensagem" placeholder="Mensagem"/>
                    </form>
                </Container>
            </div>
        )
    }
}
