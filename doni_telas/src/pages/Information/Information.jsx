import { Link } from 'react-router-dom'
import TextControls from '../../components/Information-form/Information-form'

const Information = () => {
  return (
    <div className='main-info'>
      <p>Caso tenha <span className='important-words'>duvidas</span> ou <span className='important-words'>perguntas</span>, 
       entre em contato agora mesmo, pelo formulário abaixo ou 
        acesse a aba de contato e 
        venha saber mais!</p>

      <div className='info-form'>
        <TextControls />
        <p>Estou à disposição para responder o quanto antes. Agradeço seu interesse! Enquanto isso, <Link to="/work"> CLIQUE AQUI </Link>
                    e confira meus serviços e veja como posso ajudar você da melhor forma.</p>
     </div>
    </div>
    
  )
}

export default Information
