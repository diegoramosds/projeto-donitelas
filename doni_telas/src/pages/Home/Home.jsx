import { Users, Award, ArrowRight, Phone, Activity } from 'lucide-react';
import CountUp from 'react-countup';
import work10 from '../../img/work10.jpg';

import { motion } from "motion/react"

const Home = () => {
  return (
    <div className='main-home'>
      <div className='primary'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        >
        <div className="introduction-home">

          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          <span>DONI</span>
          <span className="important-words">TELAS</span>

          </motion.h1>

          <p>Instalação e Manutenção de Telas | Cercas e Grades de Segurança
            | Serviços de Construção e Reformas de quadras </p>

        </div>
        <div>
        </div>

        <div className='options'>
          <button className='request-quote-button'>Solicitar orçamento</button>
          <button className='my-services-button'>Meus serviços</button>
        </div>

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
              <span><Users size={30}/></span>
              <span className='count-up'>+<CountUp start={400} end={599} duration={3} /></span>
              <span>Clientes satisfeitos</span>
            </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="board-details"
          >
            <p>
              <span><Award size={30}/></span>
              <span className='count-up'>+<CountUp start={40} end={40} duration={4} /></span>
              <span>Anos de Experiência</span>
            </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="board-details"
          >
            <p>
              <span><Activity size={30}/></span>
              <span className='count-up'>+<CountUp start={400} end={599} duration={3} /></span>
              <span>Projetos realizados</span>
            </p>
        </motion.div>
      </div>

      <div className='important-works'>
        <h1>Serviços em Destaque</h1>
        <p>Soluções de proteção completas para sua residência ou negócio.</p>
        <div className='service-details'>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="service-cards"
          >
          <div className='service-images'>
                        <img src={work10} alt="" />
                        </div>
                      <div className='text-details'>
                        <h1>
                          Telas de Proteção
                        </h1>
                        <p>Proteja crianças e animais com nossas telas de segurança para janelas, sacadas e varandas</p>
                      </div>
                      <div className='learn-more'>
                        <button>
                          <span>Saiba mais</span>
                          <span><ArrowRight /></span>
                          </button>
                      </div>

          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="service-cards"
          >
          <div className='service-images'>
                        <img src={work10} alt="" />
                        </div>
                      <div className='text-details'>
                        <h1>
                          Telas de Proteção
                        </h1>
                        <p>Proteja crianças e animais com nossas telas de segurança para janelas, sacadas e varandas</p>
                      </div>
                      <div className='learn-more'>
                        <button>
                          <span>Saiba mais</span>
                          <span><ArrowRight /></span>
                          </button>
                      </div>

          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="service-cards"
          >
          <div className='service-images'>
                        <img src={work10} alt="" />
                        </div>
                      <div className='text-details'>
                        <h1>
                          Telas de Proteção
                        </h1>
                        <p>Proteja crianças e animais com nossas telas de segurança para janelas, sacadas e varandas</p>
                      </div>
                      <div className='learn-more'>
                        <button>
                          <span>Saiba mais</span>
                          <span><ArrowRight /></span>
                          </button>
                      </div>
          </motion.div>
        <div>
      </div>
    </div>
        <div className='see-all-services'>
              <button>
                <span>Ver todos os serviços</span>
                <span><ArrowRight /></span>
                </button>
            </div>
      </div>

      <div className='contact'>
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="redirect-zap"
          >
                  <h1>Solicite um Orçamento Grátis</h1>
                  <p>Entre em contato por WhatsApp para solicitar um orçamento sem compromisso ou agende uma visita técnica.</p>
                  <button> <span><Phone /> </span> <span>Chamar no WhataApp</span></button>
          </motion.div>

      </div>
    </div>
  )
}

export default Home;