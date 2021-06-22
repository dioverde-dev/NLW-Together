import { Link } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import '../styles/auth.scss';

import { Button } from '../components/Button';
//import { useAuth } from '../hooks/useAuth'

export function NewRoom() {
  //const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração de perguntas e respostas." />
        <strong>Crie salas de Perguntas e Respostas ao Vivo.</strong>
        <p>Tire duvidas em tempo real com sua audiência.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logotipo letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
             <input
               type="text"
                placeholder="Nome da Sala"
            />
            <Button type="submit">
             Entrar na sala
            </Button>
         </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}