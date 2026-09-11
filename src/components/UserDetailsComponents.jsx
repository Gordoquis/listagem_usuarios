function UserDetailsComponents({ usuario }) {
  if (!usuario) {
    return null;
  }

  return (
    <aside className="user-details" aria-live="polite">
      <h2>Detalhes do usuário</h2>
      <p><strong>Nome:</strong> {usuario.name}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      <p><strong>Usuário:</strong> @{usuario.username}</p>
      <p><strong>Telefone:</strong> {usuario.phone}</p>
      <p><strong>Website:</strong> {usuario.website}</p>
      <p><strong>Cidade:</strong> {usuario.address?.city ?? 'N/A'}</p>
      <p><strong>Empresa:</strong> {usuario.company?.name ?? 'N/A'}</p>
    </aside>
  );
}

export default UserDetailsComponents;