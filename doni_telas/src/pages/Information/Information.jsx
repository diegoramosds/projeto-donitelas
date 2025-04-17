import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div className="main-info">
      <div className="primary-info">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Mais informações</h1>
          <p>Informações úteis sobre serviços</p>
        </motion.div>
      </div>

      <div className="questions-info">
        <div className="text-question">
          <h1>Perguntas Frequentes</h1>
          <p>
            Encontre respostas para as dúvidas mais comuns sobre meus serviços.
          </p>
        </div>
        <div className="ansewrs-question">
          <div className="ansewrs">
            <h4>Qual é o valor do orçamento?</h4>
            <p>
              {" "}
              O orçamento é totalmente gratuito e sem compromisso. Meu objetivo
              é que você tenha clareza sobre o que será feito e quanto vai
              investir, permitindo que tome uma decisão informada e segura.
            </p>
          </div>

          <div className="ansewrs">
            <h4>Qual é o valor cobrado pelos serviços?</h4>
            <p>
              Os valores variam de acordo com o tipo de serviço e as
              necessidades específicas de cada cliente. Cada projeto é único, e
              por isso, é importante solicitar um orçamento personalizado. Dessa
              forma, consigo avaliar todas as exigências e oferecer um preço
              justo e competitivo que atenda ao seu orçamento.
            </p>
          </div>

          <div className="ansewrs">
            <h4>Quais locais você trabalha?</h4>
            <p>
              Atendo em diversas localidades na região de São Paulo, incluindo
              cidades próximas como Sorocaba, Cotia, Mairinque, São Roque,
              Jundiaí entre várias outras. Se sua cidade não está na lista,
              entre em contato para verificar a possibilidade de atendimento e
              esclarecer dúvidas.
            </p>
          </div>

          <div className="ansewrs">
            <h4>Como funciona o pagamento?</h4>
            <p>
              Normalmente, o pagamento é dividido em duas etapas: uma parte é
              paga no início do projeto para cobrir materiais e preparação, e o
              restante é pago ao final, após a conclusão do serviço. Essa
              divisão garante transparência e segurança para ambas as partes.
            </p>
          </div>

          <div className="ansewrs">
            <h4>Quanto tempo leva para finalizar os serviços?</h4>
            <p>
              O tempo necessário para concluir o serviço depende da complexidade
              e das especificidades de cada projeto, além da localidade. Em
              geral, ofereço uma estimativa durante o orçamento inicial para que
              você saiba o que esperar e possa se planejar melhor.
            </p>
          </div>

          <div className="ansewrs">
            <h4>Por que escolher você?</h4>
            <p>
              Com anos de experiência no mercado, ofereço serviços com alta
              qualidade e um padrão de excelência, sempre focado em atender às
              necessidades de segurança e estética dos clientes. Meu compromisso
              é entregar resultados confiáveis e duradouros, garantindo a
              satisfação de quem confia em meu trabalho.
            </p>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <div className="redirect-info">
          <h1>Mande sua mensagem</h1>
          <p>Entre em contato e tire suas dúvidas</p>
          <Link to="/contact">
            <button>
              {" "}
              <span>
                <MessageCircle />{" "}
              </span>{" "}
              <span>Enviar mensagem</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Information;
