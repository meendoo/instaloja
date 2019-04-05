import React, { Component } from 'react';
import Container from '../layout/container';
import styles from './contact.module.scss';
import axios from 'axios';
import { TweenLite } from 'gsap';
const contactApi = 'https://instaloja.com.br/mail.php';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assunto: '',
      form: {},
    };
  }

  getSubject = value => {
    if (value === 'orcamento') {
      return 'Orçamento';
    }
    if (value === 'critica-elogio-sugestao') {
      return 'Crítica, elogio ou sugestão';
    }
    if (value === 'outro') {
      return 'Outros assuntos';
    }
    return '';
  };

  handleInput = e => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  };

  handleSelect = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      assunto: value,
      form: {
        ...this.state.form,
        [name]: this.getSubject(value),
      },
    });
  };

  submitForm = e => {
    e.preventDefault();
    const { name, email, phone, subject, message } = this.state;
    if (
      name === '' ||
      email === '' ||
      phone === '' ||
      subject === '' ||
      message === ''
    ) {
      return;
    }
    axios({
      method: 'post',
      url: contactApi,
      headers: {
        'content-type': 'text/plain',
      },
      data: this.state.form,
    })
      .then(result => {
        this.setState({
          isMessageSent: result.data.sent,
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isMessageSent: false,
          errorMessage: err,
        });
      });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.isMessageSent !== this.state.isMessageSent) {
      TweenLite.from(`.${styles.success}`, 0.5, {
        autoAlpha: 0,
        y: 10,
        ease: 'ease-in-out',
      });
    }
  };

  render() {
    const { isMessageSent, assunto } = this.state;
    return (
      <div id={this.props.id || null} className={styles.contact}>
        <Container className={styles.container}>
          <div>
            <h2>Contato</h2>
            <p>
              Peça aqui seu orçamento ou deixe um comentário, sugestão ou
              crítica e retornaremos sua mensagem.
            </p>
          </div>
          {!isMessageSent ? (
            <form className={styles.form} onSubmit={this.submitForm}>
              <input
                onChange={this.handleInput}
                type="text"
                name="name"
                placeholder="Nome"
                maxLength="50"
                required
              />
              <input
                onChange={this.handleInput}
                type="email"
                name="email"
                placeholder="Endereço de e-mail"
                maxLength="200"
                required
              />
              <input
                onChange={this.handleInput}
                type="tel"
                name="phone"
                placeholder="DDD + Fixo ou Celular"
                maxLength="12"
                required
              />
              <div className={styles.selectWrapper}>
                <select
                  className={styles.dropdown}
                  onChange={this.handleSelect}
                  name="subject"
                  maxLength="144"
                  required
                >
                  <option>Assunto</option>
                  <option value="">-</option>
                  <option value="orcamento">Orçamento</option>
                  <option value="critica-elogio-sugestao">
                    Crítica, Elogio, Sugestão
                  </option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              {assunto === 'orcamento' && (
                <div className={styles.rowWrapper}>
                  <input
                    onChange={this.handleInput}
                    type="text"
                    name="deadline"
                    placeholder="Previsão de Entrega"
                    maxLength="60"
                    autoComplete="off"
                  />
                  <input
                    onChange={this.handleInput}
                    type="number"
                    name="area"
                    placeholder="Área do projeto(m²)"
                    maxLength="16"
                    autoComplete="off"
                  />
                </div>
              )}
              <textarea
                onChange={this.handleInput}
                name="message"
                placeholder="Mensagem"
                maxLength="600"
                autoComplete="off"
                required
              />
              <input type="submit" value="Enviar mensagem" />
            </form>
          ) : (
            <div className={styles.success}>✓ Sua mensagem foi enviada!</div>
          )}
        </Container>
      </div>
    );
  }
}
