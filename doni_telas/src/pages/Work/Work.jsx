import { AnimatePresence, motion } from "motion/react"
import { ArrowRight, CheckCircle } from "lucide-react";

// service images
import Marquee from "react-fast-marquee";
import work1 from '../../img/work1.jpg';
import work2 from '../../img/work2.jpg';
import work3 from '../../img/work3.jpg';
import work4 from '../../img/work4.jpg';
import work5 from '../../img/work5.jpg';
import work6 from '../../img/work6.jpg';
import work7 from '../../img/work7.jpg';
import work8 from '../../img/work8.jpg';
import work9 from '../../img/work9.jpg';
import work10 from '../../img/work10.jpg';


import { useState } from "react";


const Work = () => {

  const services = [
    {id: 1, image: work1, title: "Campo Esportivo", subTitle: "Montagem completa de campo com redes de proteção, garantindo segurança e durabilidade para a prática esportiva, além de resistência contra impactos e melhor delimitação do espaço de jogo.", 
      features: [
        "Rede de proteção de alta resistência ao redor do campo",
        "Estrutura metálica reforçada para maior segurança",
        "Montagem de traves com redes de qualidade",
        "Nivelamento e preparação do terreno",
        "Acabamento com pintura e detalhes para maior durabilidade",
      ] },


    {id: 2, image: work2, title: "Campo Esportivo", subTitle: "Montagem completa de campo com acabamento reforçado e instalação de redes de proteção, garantindo maior segurança, resistência a impactos e durabilidade para a prática esportiva.",
    features: [
      "Rede de proteção lateral e superior para segurança",
      "Montagem de traves com redes duráveis",
      "Acabamento detalhado em madeira",
      "Estrutura nivelada para melhor desempenho e conforto",
      "Estrutura reforçada para maior resistência e durabilidade",
      ] },

    {id: 3, image: work3, title: "Campo Society", subTitle: "Montagem completa de campo society com instalação de telas de proteção, grama sintética de alta qualidade e demarcação oficial das linhas, garantindo resistência, segurança e padrão para jogos." ,
      features: [
        "Cercamento com telas metálicas reforçadas",
        "Instalação de grama sintética de alta durabilidade",
        "Demarcação oficial das linhas de jogo",
        "Montagem de traves com redes",
        "Estrutura metálica resistente para suporte das telas"
        ]},

        {
          id: 4,
          image: work4,
          title: "Quadra Esportiva",
          subTitle: "Instalação de telas de proteção e acabamentos gerais para garantir segurança e durabilidade da quadra, proporcionando um ambiente adequado para a prática esportiva.",
          features: [
            "Cercamento completo com telas metálicas reforçadas",
            "Acabamento nos postes e estrutura metálica",
            "Delimitação das áreas de jogo com pintura adequada",
            "Montagem de traves e tabelas de basquete",
            "Maior segurança para os jogadores e espectadores"
          ]
        },
        {
          id: 5,
          image: work5,
          title: "Cerca de Proteção",
          subTitle: "Instalação de cerca reforçada com acabamento em madeira para segurança e delimitação de áreas, garantindo proteção eficaz e um design harmonioso com o ambiente.",
          features: [
            "Estrutura em madeira tratada para maior durabilidade",
            "Tela de proteção galvanizada para resistência a intempéries",
            "Base de alvenaria para maior estabilidade",
            "Delimitação eficiente de espaços",
            "Acabamento rústico e resistente"
          ]
        },

        {
          id: 6,
          image: work6,
          title: "Quadra Esportiva",
          subTitle: "Montagem completa de quadra esportiva com instalação de telas de proteção para maior segurança, resistência e conforto dos jogadores durante as partidas.",
          features: [
            "Estrutura metálica reforçada para durabilidade",
            "Instalação de telas de proteção em toda a quadra",
            "Piso adequado para prática esportiva",
            "Montagem de traves e suporte para redes",
            "Maior segurança para os jogadores e espectadores"
          ]
        },


    {
          id: 7,
          image: work7,
          title: "Tela de Proteção para Campo Society",
          subTitle: "Instalação de tela com estrutura metálica com acabamentos reforçados para segurança e durabilidade, assegurando resistência contra impactos e condições climáticas adversas.",
          features: [
            "Estrutura metálica reforçada para sustentação das telas",
            "Tela de proteção de alta resistência",
            "Acabamento em alvenaria para maior durabilidade",
            "Ideal para evitar saída de bolas e aumentar a segurança",
            "Instalação adequada para ambientes esportivos"
          ]
      },

    {
          id: 8,
          image: work8,
          title: "Cerca de Proteção com Mourão de Concreto",
          subTitle: "Instalação de cerca com estrutura reforçada utilizando canaleta e mourão de concreto para maior resistência e durabilidade, garantindo segurança, estabilidade e proporcionando maior estabilidade.",
          features: [
            "Cercamento seguro e durável",
            "Mourões de concreto para maior estabilidade",
            "Canaleta de concreto na base para reforço estrutural",
            "Tela de arame galvanizado para proteção",
            "Ideal para delimitação de áreas em ambientes rurais e urbanos"
          ]
      },

      {
        id: 9,
        image: work9,
        title: "Cerca com Mourão de Madeira",
        subTitle: "Instalação de cerca com estrutura reforçada utilizando canaleta e mourão de concreto para maior resistência e durabilidade, ideal para áreas que exigem proteção contínua e baixa manutenção.",
        features: [
          "Estrutura resistente com mourões de madeira",
          "Base reforçada com canaleta de concreto",
          "Tela de arame galvanizado para proteção",
          "Ideal para áreas rurais e delimitação de terrenos",
          "Ótima relação custo-benefício"
        ]
      },

      {
        id: 10,
        image: work10,
        title: "Tela e Acabamentos",
        subTitle: "Instalação de cerca utilizando mourões de madeira e canaleta de concreto para maior sustentação e segurança, combinando robustez com um acabamento natural e estético.",
        features: [
          "Estrutura metálica pintada para maior resistência",
          "Tela de arame galvanizado para proteção",
          "Design funcional e seguro",
          "Ideal para fechamento de áreas residenciais e comerciais",
          "Acabamento profissional para longa durabilidade"
        ]
      },
  ]

  const customerReviews = [
    { name: "Claúdio", initials: "C", review: "Excelente profissional, atencioso e comprometido com cada detalhe do serviço.", typeClient: "Cliente Satisfeito" },
    { name: "Jorge", initials: "J", review: "Serviço de qualidade e ótimo atendimento. Muito satisfeito com o resultado!", typeClient: "Cliente Satisfeito" },
    { name: "Cristiano", initials: "C", review: "Trabalho bem executado, com cuidado e precisão. Recomendo totalmente.", typeClient: "Cliente Satisfeito" },
    { name: "Marcos", initials: "M", review: "Profissional competente e confiável, entregou exatamente o que eu esperava.", typeClient: "Cliente Satisfeito" },
    { name: "André", initials: "A", review: "Ótimo serviço, realizado com qualidade e dentro do prazo combinado.", typeClient: "Cliente Satisfeito" },
    { name: "Cristiano", initials: "C", review: "Trabalho impecável e excelente relação custo-benefício. Voltarei a contratar!", typeClient: "Cliente Satisfeito" },
    { name: "Maurílio", initials: "M", review: "Profissional de confiança, com uma execução de qualidade e atendimento rápido.", typeClient: "Cliente Satisfeito" },
    { name: "Diego", initials: "D", review: "Atendimento incrível e resultado acima das expectativas. Parabéns pelo ótimo serviço!", typeClient: "Cliente Satisfeito" },
    { name: "Bruno", initials: "B", review: "Serviço excelente, com atenção aos detalhes e um acabamento impecável.", typeClient: "Cliente Satisfeito" }
];


  const [expandedProjects, setExpandedProjects] = useState("")
  const [alreadyExpandedProjects, setAlreadyExpandedProjects] = useState(false)

  const showProjectsFeatures = (serviceId) => {
  if(serviceId) {
    setExpandedProjects(serviceId)
    setAlreadyExpandedProjects(true)
  } else {
    setExpandedProjects(null)
  }
}
  return (
    <div className="main-work">
       <div className="primary-work">
        <h1>Projetos realizados</h1>
        <p>Conheça alguns dos meus projetos realizados com excelência e qualidade.</p>
       </div>

       <div className="service-details">
            {services.map((service) => (
               <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className={`service-cards ${expandedProjects === service.id ? "expanded" : ""}`}
               key={service.id}
               >
                      <div className='service-images'>
                        <img src={service.image} alt="" />
                      </div>
                      <div className='text-details'>
                        <h1>{service.title}</h1>
                        <p>{service.subTitle}</p>
                      </div>
                      <div className='learn-more'>
                        {alreadyExpandedProjects && expandedProjects === service.id ? (
                        <button onClick={() => showProjectsFeatures()}>
                        <span>Ocutar Detalhes</span>
                        <span><ArrowRight /></span>
                        </button>
                        ) : (
                        <button onClick={() => showProjectsFeatures(service.id)}>
                        <span>Exibir Detalhes</span>
                        <span><ArrowRight /></span>
                        </button>
                        )}
                      <AnimatePresence>
                        {expandedProjects === service.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                          >
                            <div className="service-features">
                              <h6>Características do Projeto:</h6>
                              {service.features.map((feature) => (
                              <p key={service.id}> <span><CheckCircle/> </span>{feature}</p>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      </div>
                </motion.div>
            ))}
      </div>

      <div className="clients-services">
        <h1>O Que Nossos Clientes Dizem</h1>
        <p>A satisfação dos nossos clientes é o nosso maior sucesso.</p>
            <Marquee gradient={false} speed={60} pauseOnHover={true}>
              {customerReviews.map((customerReview, index) => (
                <div className="floating-cards-details" key={index}
                >
                  <p>&quot;{customerReview.review}&quot;</p>
                    <div className="clients-names">
                      <p className="initial-letters">{customerReview.initials}</p>
                      <div className="style-name">
                        <h6>{customerReview.name}</h6>
                        <p>{customerReview.typeClient}</p>
                      </div>
                    </div>
                </div>
              ))}
        </Marquee>
      </div>
    </div>
  )
}

export default Work;