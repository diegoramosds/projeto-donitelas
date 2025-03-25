import { Users, Shield, Award, ArrowRight, Phone } from 'lucide-react';
import CountUp from 'react-countup';
import work10 from '../../img/work10.jpg';

const Home = () => {
  return (
    <div className='main-home'>
      <div className='primary'>
        <div className="introduction-home">
          <h1>DONI<span className="important-words">TELAS</span></h1>
          <p>Instalação e Manutenção de Telas | Cercas e Grades de Segurança
            | Serviços de Construção e Reformas de quadras </p>
        </div>
        <div>
        </div>
        <div className='options'>
            <p>Solicitar orçamento</p>
            <p>Meus serviços</p>
        </div>
      </div>


      <div className="info-profile">
        <div className="board-details">
          <p><span><Users size={30}/></span> <span className='count-up'>+ <CountUp start={0} end={599} duration={4} /></span> <span>Clientes satisfeitos</span></p>
        </div>

        <div className="board-details">
          <p><span><Shield /></span> <span className='count-up'>+ <CountUp start={0} end={599} duration={4} /></span> <span>Clientes satisfeitos</span></p>
        </div>

        <div className="board-details">
          <p><span><Award /></span> <span className='count-up'>+ <CountUp start={0} end={599} duration={4} /></span> <span>Clientes satisfeitos</span></p>
        </div>
      </div>

      <div className='important-works'>
        <h1>Serviços em Destaque</h1>
        <p>Soluções de proteção completas para sua residência ou negócio.</p>
        <div className='service-details'>

          <div className='service-cards'>
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
          </div>

          <div className='service-cards'>
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
          </div>


          <div className='service-cards'>
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
          </div>
          <div className='see-all-services'>
              <button>
                <span>Saiba mais</span>
                <span><ArrowRight /></span>
                </button>
            </div>
          <div>
        </div>
        </div>
      </div>

      <div className='contact'>
        <div className='redirect-zap'>
          <h1>Solicite um Orçamento Grátis</h1>
          <p>Entre em contato por WhatsApp para solicitar um orçamento sem compromisso ou agende uma visita técnica.</p>
          <button> <span><Phone /> </span> <span>Chamar no WhataApp</span></button>
        </div>
      </div>
    </div>
  )
}

export default Home;