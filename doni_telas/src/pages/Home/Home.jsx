import { Users, Award, ArrowRight, Phone, Activity } from 'lucide-react';
import CountUp from 'react-countup';

import { motion } from "motion/react"
import { Link } from "react-router-dom"

import ServiceCards from '../../components/ServiceCards/ServiceCards';
import { featuredServices } from "../../data/ItemFeaturedServices"

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
          <button className='request-quote-button'><Link to='/contact'>Solicitar orçamento</Link> </button>
          <button className='my-services-button'><Link to='/work'>Meus serviços</Link></button>
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
        <h1>Tipos de Serviços</h1>
        <p>Soluções de proteção completas para sua residência ou negócio.</p>
        <div>
        <ServiceCards
      textButtonCloseFeatures='Saiba Mais'
      textButtonOpenFeatures='Ocultar Detalhes'
      titleFeatures='Características'
      iconButton={<ArrowRight />}
      itemsMap={featuredServices}
      />
        <div>
      </div>
    </div>
        <div className='see-all-services'>
              <button>
              <Link to='/work'><span>Ver todos os serviços</span></Link>
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
                  <button> <span><Phone /> </span> <span><a href="https://wa.me/5511968579924?text=Olá,%20gostaria%20de%20solitar%20um%20orçamento" target="_blank">Chamar no WhataApp</a></span></button>
          </motion.div>

      </div>
    </div>
  )
}

export default Home;