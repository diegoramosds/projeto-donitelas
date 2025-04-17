// service images
import Marquee from "react-fast-marquee";

import { motion } from "motion/react";

import ServiceCards from "../../components/ServiceCards/ServiceCards";

//data map
import { services } from "../../data/ItemServicesMap";
import { customerReviews } from "../../data//ItemReviewsMap";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Work = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTarget = location.state?.scrollTo;

    if (scrollTarget) {
      const timeout = setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);

      // Cleanup
      return () => clearTimeout(timeout);
    }
  }, [location]);

  return (
    <div className="main-work">
      <div className="primary-work">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Projetos realizados</h1>
          <p>
            Conheça alguns dos projetos que desenvolvi com excelência e
            qualidade.
          </p>
        </motion.div>
      </div>

      <ServiceCards
        textButtonCloseFeatures="Exibir Detalhes"
        textButtonOpenFeatures="Ocultar Detalhes"
        titleFeatures="Características do Projeto"
        itemsMap={services}
      />

      <div className="clients-services" id="feedbacks">
        <h1>O Que Meus Clientes Dizem</h1>
        <p>A satisfação dos clientes é o maior sucesso.</p>
        <Marquee gradient={false} speed={60} pauseOnHover={true}>
          {customerReviews.map((customerReview, index) => (
            <div className="floating-cards-details" key={index}>
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
  );
};

export default Work;
