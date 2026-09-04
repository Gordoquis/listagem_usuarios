function LoadingComponent() {
  return (
    <div className="loading" role="status" aria-live="polite">
      <div className="loading__spinner" aria-hidden="true" />
      <p className="loading__text">Carregando usuários...</p>
    </div>
  );
}

export default LoadingComponent;
