import { Link } from "react-router-dom"
import IndividualIntervalsExample from "../../components/Work-carousel/WorkCarousel"

const Work = () => {
  return (
    <div className="main-work">
       <h3>Serviços prestados</h3>
      <div className="details-work">
        <div className="text-work">
          <h4>Telas</h4>
          <p>Ofereço uma variedade de opções para instalação e manutenção de telas:</p>
             <ul>
                <li>Instalação de telas de proteção para áreas residenciais e comerciais</li>
                <li>Manutenção preventiva e reparo de telas desgastadas</li>
                <li>Modelos de telas sob medida para diferentes espaços</li>
                <li>Serviços de ajuste e fixação de telas</li>
             </ul>
        </div>
        <div className="text-work">
        <h4>Cercas</h4>
          <p>Soluções para cercas de segurança e design:</p>
        <ul>
          <li>Instalação de cercas de proteção em áreas industriais e residenciais</li>
          <li>Opções de cercas personalizadas para proteção</li>
          <li>Reparos e reforços para cercas de madeira e metal</li>
          <li>Instalação de cercas para áreas externas e jardins</li>
        </ul>
        </div>
        <div className="text-work">
        <h4>Grades</h4>
        <p>Instalação de grades para diferentes ambientes:</p>
          <ul>
            <li>Grades de segurança para janelas, portas e varandas</li>
            <li>Grades decorativas personalizadas em diversos modelos</li>
            <li>Reforço e manutenção de grades já instaladas</li>
            <li>Instalação de grades para áreas comerciais e residenciais</li>
          </ul>
        </div>
        <div className="text-work">
          <h4>Quadras esportivas</h4>
        <p>Serviços especializados para quadras e áreas de recreação:</p>
          <ul>
            <li>Instalação de telas e redes de proteção para quadras esportivas</li>
            <li>Montagem de cercas e divisórias em quadras</li>
            <li>Manutenção e reparos em redes esportivas</li>
            <li>Personalização de redes e cercas para quadras de diferentes esportes</li>
          </ul>
        </div>
      </div>

      <div className="info-work">
        <p>Cada serviço que ofereço é cuidadosamente planejado e adaptado às 
          características do ambiente e às preferências de nossos clientes,
           sempre com foco em resultados que garantam segurança e satisfação.</p>
      </div>

      <div className="carousel-work">
       <IndividualIntervalsExample />
      </div>

      <div className="">
        <p></p>
      </div>
      
      <div className="redirect-work">
        <p>Gostou e tem interesse? <a href="https://wa.me/5511968579924?text=Olá,%20gostaria%20de%20solitar%20um%20orçamento" target="_blank">CLIQUE AQUI</a> e solicite seu orçamento! </p>
    
      </div>
    </div>
  )
}

export default Work