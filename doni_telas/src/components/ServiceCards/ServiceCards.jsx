/* eslint-disable react/prop-types */
import { CheckCircle, CircleAlert } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const ServiceCards = ({
  textButtonCloseFeatures,
  textButtonOpenFeatures,
  itemsMap,
  titleFeatures,
}) => {
  const [expandedProjects, setExpandedProjects] = useState("");
  const [alreadyExpandedProjects, setAlreadyExpandedProjects] = useState(false);

  const showProjectsFeatures = (serviceId) => {
    if (serviceId) {
      setExpandedProjects(serviceId);
      setAlreadyExpandedProjects(true);
    } else {
      setExpandedProjects(null);
    }
  };
  return (
    <div>
      <div className="service-details">
        {itemsMap.map((service) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`service-cards`}
            key={service.id}
          >
            <div className="service-images">
              <img src={service.image} alt={service.alt} />
            </div>
            <div className="text-details">
              <h1>{service.title}</h1>
              <p>{service.subTitle}</p>
            </div>
            <div className="learn-more">
              {alreadyExpandedProjects && expandedProjects === service.id ? (
                <button onClick={() => showProjectsFeatures()}>
                  <span>{textButtonOpenFeatures}</span>
                  <span>{<CircleAlert />}</span>
                </button>
              ) : (
                <button onClick={() => showProjectsFeatures(service.id)}>
                  <span>{textButtonCloseFeatures}</span>
                  <span>{<CircleAlert />}</span>
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
                      <h6>{titleFeatures}:</h6>
                      {service.features.map((feature) => (
                        <p key={service.id}>
                          {" "}
                          <span>
                            <CheckCircle />{" "}
                          </span>
                          {feature}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
