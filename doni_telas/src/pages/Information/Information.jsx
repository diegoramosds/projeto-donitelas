import React from 'react'
import TextControls from '../../components/Information-form/Information-form'

const Information = () => {
  return (
    <div className='main-info'>
      <p>Caso tenha <span className='important-words'>duvidas</span> ou <span className='important-words'>perguntas</span>  , entre em contato agora mesmo, pelo formulário abaixo ou 
        acesse a aba de contato e 
        venha saber mais!</p>

      <div className=''>
        <TextControls />
     </div>
    </div>
    
  )
}

export default Information
