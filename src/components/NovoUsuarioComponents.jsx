function NovoUsuarioComponents ({NovoUsuario}) {
 return (
    <div>
        <h2>Novo Usuário</h2>

        <p>
            <strong>Nome:</strong> {NovoUsuario.name}
        </p>
        <p>
            <strong>Usuario:</strong> {NovoUsuario.username}
        </p>
        <p>
            <strong>E-mail:</strong> {NovoUsuario.email}
        </p>
    </div>   
 )
}