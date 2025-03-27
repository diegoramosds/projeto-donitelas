import { LocateIcon, Mail, Phone } from 'lucide-react'

import { motion } from "motion/react"
import FormMessage from '../../components/FormMessage/FormMessage'


const Contact = () => {
  return (
    <div className='contact-form'>
      <div className='primary-contatc'>
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          >
                <h1>Entre em Contato</h1>
                <p>Estamos prontos para atender sua necessidade. Entre em contato para um orçamento sem compromisso.</p>

          </motion.div>
      </div>

      <div className="info-profile">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="board-details"
          >
            <p>
              <span><Phone size={30}/></span>
              <span className='title-board'>Telefone</span>
              <span>(11) 99999-9999</span>
            </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="board-details"
          >
            <p>
              <span><Mail size={30}/></span>
              <span className='title-board'>Email</span>
              <span>contato@donitelas.com.br</span>
            </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="board-details"
          >
            <p>
              <span><LocateIcon size={30}/></span>
              <span className='title-board'>Endereço</span>
              <span>Vargem Grande Paulista- SP</span>
            </p>
        </motion.div>
      </div>
        <FormMessage />
    </div>
  )
}

export default Contact