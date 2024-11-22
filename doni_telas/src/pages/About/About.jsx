import AllCollapseExample from '../../components/Accordion/Accordion'
import '../../scss/style.scss'


import PhtotoAbout from '../../img/photo-about.png'

import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'
import AccordionAbout from '../../components/Accordion/Accordion';
import TextCarousel from '../../components/About-carousels/AboutCarousels';


const About = () => {

  return (
    <div className='main-about'>
      <div className='info-about'>
        <p>Com mais de <span className='important-words'>40 anos de experiência</span>, dedico minha 
        trajetória à prestação de serviços 
          de instalação e manutenção de telas e cercas. Cada projeto que realizo é feito
           com atenção aos detalhes e
           <span className='important-words'> compromisso</span> com a <span className='important-words'>qualidade</span>,
            sempre visando entregar
            soluções práticas, duradouras e que atendam às necessidades de cada cliente. 
            Meu objetivo é construir relações de <span className='important-words'>confiança</span> e oferecer um atendimento personalizado, 
            onde cada etapa do processo
           é feita com <span className='important-words'>responsabilidade</span> e cuidado, garantindo a satisfação e a
           <span className='important-words'> segurança </span>
             de quem confia no meu trabalho.</p>
          <div className='photo-about'>
            <img src={PhtotoAbout} alt="" />
          </div>
      </div>
      <div className='text-about'>
        <p>Minha abordagem é priorizar o entendimento das necessidades dos meus 
          <span className='important-words'> clientes </span> 
          e transformo essas demandas em resultados que <span className='important-words'>valorizam </span>  
          seus espaços, sejam eles
           <span className='important-words'> residenciais </span> ou 
           <span className='important-words'> comerciais </span>. Em todos esses anos, o feedback positivo 
           dos meus clientes tem sido a maior motivação para continuar aprimorando meu trabalho.</p>
      </div>
      <div className='places'>
        <h3>Algumas localidades que ja trabalhei e tenho disponibilidade para trabalhar</h3>
        <div>
          <ul>
            <li>São paulo</li>
            <li>Sorocaba</li>
            <li>Vargem grande paulista</li>
            <li>Cotia</li>
            <li>São roque</li>
            <li>Mairinque</li>
            <li>Ibiúna</li>
            <li>Indaiatuba</li>
          </ul>
          <p>Não achou sua localidade? <Link to="/information"><strong>CLIQUE AQUI</strong></Link> e mande sua mensagem
           para verificar a disponibilidade.</p>
        </div>
      </div>
      
        <div className='about-fedbacks'>
          <TextCarousel />
        </div>

        <AccordionAbout />   
    </div>
  )
}

export default About