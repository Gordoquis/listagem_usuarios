function HeaderComponent({ busca, onBuscaChange, totalUsuarios }) {
  return (
    <header className="header">
      <div className="header__content">
        <div>
          <p className="header__eyebrow">Dashboard</p>
          <h1 className="header__title">Lista de usuários</h1>
        </div>

        <div className="header__search">
          <span className="header__search-icon" aria-label="Ícone de busca">
            🔎
          </span>
          <input
            type="text"
            className="header__input"
            placeholder="Buscar por nome, usuário ou e-mail"
            value={busca}
            onChange={(event) => onBuscaChange(event.target.value)}
          />
        </div>
      </div>

      <span className="header__counter">{totalUsuarios} usuários</span>
    </header>
  );
}

export default HeaderComponent;
