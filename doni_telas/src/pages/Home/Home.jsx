import { Users, Award, ArrowRight, Phone, Activity } from "lucide-react";
import CountUp from "react-countup";

import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";

import ServiceCards from "../../components/ServiceCards/ServiceCards";
import { featuredServices } from "../../data/ItemFeaturedServices";
import BoardComponent from "../../components/BoardComponent/BoardComponent";

const Home = () => {
  const navigate = useNavigate();

  const showFeedback = () => {
    navigate("/work", { state: { scrollTo: "feedbacks" } });
  };
  return (
    <div className="main-home">
      <div className="primary">
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

            <p>
              Instalação e Manutenção de Telas | Cercas e Grades de Segurança |
              Construção e Reformas de quadras{" "}
            </p>
          </div>
          <div></div>

          <div className="options">
            <Link to="/contact">
              <button className="request-quote-button">Orçamento </button>
            </Link>
            <Link to="/work">
              <button className="my-services-button">Serviços</button>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="info-profile">
        <BoardComponent
          boardIcon={<Users size={30} />}
          title={
            <span className="count-up">
              +<CountUp start={400} end={599} duration={3} />
            </span>
          }
          subTitle={"Clientes satisfeitos"}
        />

        <BoardComponent
          boardIcon={<Award size={30} />}
          title={
            <span className="count-up">
              +<CountUp start={40} end={40} duration={4} />
            </span>
          }
          subTitle={"Anos de Experiência"}
        />

        <BoardComponent
          boardIcon={<Activity size={30} />}
          title={
            <span className="count-up">
              +<CountUp start={400} end={599} duration={4} />
            </span>
          }
          subTitle={"Projetos realizados"}
        />
      </div>

      <div className="feedbacks-home">
        <button onClick={showFeedback}>
          {" "}
          <span>Opiniões de Clientes</span>{" "}
          <span>
            <ArrowRight />{" "}
          </span>{" "}
        </button>
      </div>

      <div className="important-works">
        <h1>Tipos de Serviços</h1>
        <p>Soluções completas de proteção para sua residência ou negócio.</p>
        <div>
          <ServiceCards
            textButtonCloseFeatures="Saiba Mais"
            textButtonOpenFeatures="Ocultar Detalhes"
            titleFeatures="Características"
            itemsMap={featuredServices}
          />
          <div></div>
        </div>
        <div className="see-all-services">
          <Link to="/work">
            <button>
              <span>Ver todos os serviços</span>
              <span>
                <ArrowRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="contact">
        <div className="redirect-zap">
          <h1>Solicite um Orçamento Grátis</h1>
          <p>
            Entre em contato pelo WhatsApp para solicitar um orçamento sem
            compromisso ou agendar uma visita.
          </p>
          <a
            href="https://wa.me/5511968579924?text=Olá,%20gostaria%20de%20solitar%20um%20orçamento"
            target="_blank"
          >
            <button>
              {" "}
              <span>
                <Phone />{" "}
              </span>{" "}
              <span>Chamar no Whatsapp</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
