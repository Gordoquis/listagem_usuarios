import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import HeaderComponent from './components/HeaderComponent';
import LoadingComponent from './components/LoadingComponent';
import UserListComponent from './components/UserListComponent';
import UserDetailsComponents from './components/UserDetailsComponents';
import UserForm from './components/UserForm';
import ModalComponent from './components/ModalComponent';
import SuccessMessageComponent from './components/SuccessMessageComponent';
import ErrorMessageComponent from './components/ErrorMessageComponent';

const filtrarUsuariosPorTermo = (usuario, termo) => {
  const termoLower = termo.toLowerCase();

  return (
    usuario.name.toLowerCase().includes(termoLower) ||
    usuario.username.toLowerCase().includes(termoLower) ||
    usuario.email.toLowerCase().includes(termoLower)
  );
};

function App() {
  const url = 'https://jsonplaceholder.typicode.com';
  const [usuarios, setUsuarios] = useState([]);
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [busca, setBusca] = useState('');
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);
  const [modalAberta, setModalAberta] = useState(false);
  const [mensagemSucesso, setMensagemSucesso] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const usuariosFiltrados = usuarios.filter((usuario) =>
    filtrarUsuariosPorTermo(usuario, busca)
  );

  async function buscarUsuarioPorId(id) {
    try {
      const response = await axios.get(`${url}/users/${id}`);
      setUsuarioSelecionado(response.data);
      setMensagemErro('');
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      setMensagemErro('Não foi possível carregar os detalhes do usuário.');
      setUsuarioSelecionado(null);
    }
  }

  async function buscarUsuarios() {
    setCarregando(true);
    setErro(null);
    setMensagemErro('');

    try {
      const response = await axios.get(`${url}/users`);
      setUsuarios(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      setErro(`Não foi possível buscar os usuários. Código de erro: ${error.message}`);
      setMensagemErro('Não foi possível buscar os usuários.');
    } finally {
      setCarregando(false);
      console.log('Requisição finalizada.');
    }
  }

  function cadastrarUsuario(novoUsuario) {
    try {
      const usuarioComId = {
        ...novoUsuario,
        id: Date.now(),
      };

      setUsuarios((usuariosAtuais) => [usuarioComId, ...usuariosAtuais]);
      setUsuarioSelecionado(usuarioComId);
      setMensagemErro('');
      setMensagemSucesso('Usuário cadastrado com sucesso!');
      setModalAberta(false);
    } catch (error) {
      setMensagemErro('Ocorreu um erro ao cadastrar o usuário.');
      setMensagemSucesso('');
    }
  }

  useEffect(() => {
    buscarUsuarios();
  }, []);

  return (
    <div className="app-container">
      <HeaderComponent
        busca={busca}
        onBuscaChange={setBusca}
        totalUsuarios={usuariosFiltrados.length}
      />

      {mensagemSucesso && <SuccessMessageComponent message={mensagemSucesso} />}
      {mensagemErro && <ErrorMessageComponent message={mensagemErro} />}

      <button type="button" className="button button--primary" onClick={() => setModalAberta(true)}>
        Novo usuário
      </button>

      {carregando ? (
        <LoadingComponent />
      ) : (
        <>
          <UserListComponent
            usuarios={usuariosFiltrados}
            busca={busca}
            erro={erro}
            onSelectUser={buscarUsuarioPorId}
          />

          {usuarioSelecionado && <UserDetailsComponents usuario={usuarioSelecionado} />}
        </>
      )}

      <ModalComponent isOpen={modalAberta} onClose={() => setModalAberta(false)} title="Cadastrar usuário">
        <UserForm onCadastrar={cadastrarUsuario} />
      </ModalComponent>
    </div>
  );
}

export default App;