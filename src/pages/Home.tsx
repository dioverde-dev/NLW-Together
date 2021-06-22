import { useHistory} from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';



export function Home() {
  const history = useHistory();
  
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom(){
      if (!user) {
        await signInWithGoogle()
      }  

      history.push('/rooms/new')
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração de perguntas e respostas." />
        <strong>Crie salas de Perguntas e Respostas ao Vivo.</strong>
        <p>Tire duvidas em tempo real com sua audiência.</p>
      </aside>
      <main >
        <div className="main-content">
          <img src={logoImg} alt="Logotipo letmeask" />
          <button onClick={handleCreateRoom}  className="create-room">
          <img src={googleIconImg} alt="Logo do Google" />
          Crie uma sala com Google
        </button>
        <div className="separator">ou entre em uma sala</div>
        <form>
          <input
            type="text"
            placeholder="Digite o código da sala"
          />
          <Button type="submit">
            Entrar na sala
          </Button>
        </form>
        </div>
      </main>
    </div>
)
}