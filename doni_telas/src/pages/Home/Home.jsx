import { FaUser } from 'react-icons/fa';

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
          <p><span><FaUser /></span> +599 <span>Clientes satisfeitos</span></p>
        </div>

        <div className="board-details">
          <p><span><FaUser /></span> +599 <span>Clientes satisfeitos</span></p>
        </div>

        <div className="board-details">
          <p><span><FaUser /></span> +599 <span>Clientes satisfeitos</span></p>
        </div>
      </div>

      {/* <div className="counters">
         <p>+<CountUp start={0} end={599} duration={4} /> Clientes satisfeitos</p>
         <p>+<CountUp start={0} end={599} duration={4} /> Serviços realizados</p>
      </div> */}
      </div>
  )
}

export default Home;