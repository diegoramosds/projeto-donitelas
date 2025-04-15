import "../../scss/style.scss";

import PhtotoAbout from "../../img/features.jpg";

import "aos/dist/aos.css";

import { motion } from "motion/react";

import { Shield } from "lucide-react";

const About = () => {
  return (
    <div className="main-about">
      <div className="primary-about">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="introduction-primary"
        >
          <h1>Sobre mim</h1>
          <p>
            Conheça minha história e o compromisso com a segurança e qualidade.
          </p>
        </motion.div>
      </div>

      <div className="info-about">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="about-details"
        >
          <div className="text-about">
            <h1>
              Minha <span className="important-words">História</span>
            </h1>
            <p>
              Com mais de 40 anos de experiêncio, dedico minha trajetória à
              prestação de serviços de instalação e manutenção de telas e
              cercas. Cada projeto que realizo é feito com atenção aos detalhes
              e compromisso com a qualidade.
            </p>
            <p>
              Soluções práticas, duradouras e que atendam às necessidades de
              cada cliente. Meu objetivo é construir relações de confianço e
              oferecer um atendimento personalizado, onde cada etapa do processo
              é feita com responsabilidado e cuidado, garantindo a satisfação e
              a segurançao de quem confia no meu trabalho.
            </p>
          </div>
          <div className="icon-compromise">
            <div>
              <span>
                <Shield />{" "}
              </span>
            </div>
            <div className="text-compromise">
              <h6>Compromisso com Qualidade</h6>
              <p>Utilizando apenas materiais de qualidade</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="photo-about"
        >
          <img src={PhtotoAbout} alt="" />
        </motion.div>
      </div>

      <div className="about-values">
        <div className="text-value">
          <h1>Meus Valores</h1>
          <p>
            Princípios que guiam meu trabalho e relacionamento com os clientes.
          </p>
        </div>

        <div className="board-about">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="board-details-about"
          >
            <div className="text-board">
              <span>
                <Shield size={30} />
              </span>
              <h4>Segurança</h4>
              <p>
                Meu compromisso principal é com a segurança dos nossos clientes,
                oferecendo produtos testados e aprovados conforme as normas de
                segurança.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="board-details-about"
          >
            <div className="text-board">
              <span>
                <Shield size={30} />
              </span>
              <h4>Qualidade</h4>
              <p>
                Utilizamos apenas materiais de primeira linha e trabalhamos com
                processos rigorosos de instalação para garantir a durabilidade
                dos nossos produtos.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="board-details-about"
          >
            <div className="text-board">
              <span>
                <Shield size={30} />
              </span>
              <h4>Comprometimento</h4>
              <p>
                Estou comprometido com a satisfação dos clientes, oferecendo um
                atendimento personalizado e cumprindo prazos e compromissos.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* <div className='places'>
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
      </div> */}

      {/* <div className='about-fedbacks'>
          <TextCarousel />
        </div> */}
      {/* 
        <AccordionAbout />    */}
    </div>
  );
};

export default About;
