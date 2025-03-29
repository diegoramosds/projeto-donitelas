// service images
import Marquee from "react-fast-marquee";

import { motion } from "motion/react"

import ServiceCards from "../../components/ServiceCards/ServiceCards";

//data map
import {services} from "../../data/ItemServicesMap";
import {customerReviews} from "../../data//ItemReviewsMap";

import { CircleAlert } from "lucide-react";

const Work = () => {

  return (
    <div className="main-work">
      <div className="primary-work">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}>
      <h1>Projetos realizados</h1>
      <p>Conheça alguns dos meus projetos realizados com excelência e qualidade.</p>
        
      </motion.div>
        
      </div>

      <ServiceCards
      textButtonCloseFeatures='Exibir Detalhes'
      textButtonOpenFeatures='Ocultar Detalhes'
      titleFeatures='Características do Projeto'
      iconButton={<CircleAlert />}
      itemsMap={services}
      />

      <div className="clients-services">
        <h1>O Que Meus Clientes Dizem</h1>
        <p>A satisfação dos clientes é o maior sucesso.</p>
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