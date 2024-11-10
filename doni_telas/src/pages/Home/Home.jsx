import CountUp from 'react-countup';
import { FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='main-home'>
      <div className="info-home">
        <h1>Trabalho com amor e dedicação para construir com excelência</h1>
        <p className="important-words">Instalação e Manutenção de Telas | Cercas e Grades de Segurança 
          | Serviços de Construção e Reformas de quadras </p>
      </div>
      <div>
      </div>
      <div className="counters">
         <p>+<CountUp start={0} end={599} duration={4} /> Clientes satisfeitos</p>
         <p>+<CountUp start={0} end={599} duration={4} /> Serviços realizados</p>
      </div>
      <div className='icon-home'>
        <FaTools />
      </div>
        <div className='link-home'>
          <Link to="/about"> CLIQUE AQUI </Link> e saiba mais!
        </div>
      </div>
  )
}

export default Home;