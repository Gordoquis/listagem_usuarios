function UserCardComponent({ usuario }) {
  return (
    <article className="user-card">
      <div className="user-card__avatar" aria-hidden="true">
        {usuario.name?.charAt(0)?.toUpperCase() ?? '?'}
      </div>

      <div className="user-card__content">
        <div className="user-card__header">
          <h2>{usuario.name}</h2>
          <span>@{usuario.username}</span>
        </div>

        <p className="user-card__info">
          <strong>E-mail:</strong> {usuario.email}
        </p>
        <p className="user-card__info">
          <strong>Telefone:</strong> {usuario.phone}
        </p>
        <p className="user-card__info">
          <strong>Empresa:</strong> {usuario.company?.name ?? 'N/A'}
        </p>
      </div>
    </article>
  );
}

export default UserCardComponent;
