import { useState } from 'react';

function UserForm({ onCadastrar }) {
  const [nome, setNome] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  function limparFormulario() {
    setNome('');
    setUsername('');
    setEmail('');
    setTelefone('');
  }

  function handleSubmit(evento) {
    evento.preventDefault();

    const novoUsuario = {
      name: nome,
      username: username,
      email: email,
      phone: telefone,
    };

    if (onCadastrar) {
      onCadastrar(novoUsuario);
    }

    limparFormulario();
  }

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="user-form__field">
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          value={nome}
          placeholder="Nome"
          onChange={(evento) => setNome(evento.target.value)}
        />
      </div>

      <div className="user-form__field">
        <label htmlFor="username">Usuário</label>
        <input
          id="username"
          type="text"
          value={username}
          placeholder="Usuário"
          onChange={(evento) => setUsername(evento.target.value)}
        />
      </div>

      <div className="user-form__field">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="E-mail"
          onChange={(evento) => setEmail(evento.target.value)}
        />
      </div>

      <div className="user-form__field">
        <label htmlFor="telefone">Telefone</label>
        <input
          id="telefone"
          type="text"
          value={telefone}
          placeholder="Telefone"
          onChange={(evento) => setTelefone(evento.target.value)}
        />
      </div>

      <button type="submit" className="user-form__button">Cadastrar usuário</button>
    </form>
  );
}

export default UserForm;
