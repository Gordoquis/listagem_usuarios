import UserCardComponent from './UserCardComponent';

function UserListComponent({ usuarios, busca, erro }) {
  if (erro) {
    return <p className="message message--error">{erro}</p>;
  }

  if (usuarios.length === 0) {
    return (
      <p className="message message--empty">
        {busca
          ? `Nenhum usuário encontrado para "${busca}".`
          : 'Nenhum usuário disponível no momento.'}
      </p>
    );
  }

  return (
    <section className="user-list" aria-label="Lista de usuários">
      {usuarios.map((usuario) => (
        <UserCardComponent key={usuario.id} usuario={usuario} />
      ))}
    </section>
  );
}

export default UserListComponent;
