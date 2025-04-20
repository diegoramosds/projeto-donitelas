import { motion } from "motion/react";
import PropTypes from "prop-types";

const BoardComponent = ({ title, subTitle, boardIcon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="board-details"
    >
      <p>
        <span>{boardIcon}</span>
        <span>{title}</span>
        <span>{subTitle}</span>
      </p>
    </motion.div>
  );
};

export default BoardComponent;

BoardComponent.propTypes = {
  title: PropTypes.node.isRequired  ,
  subTitle: PropTypes.node.isRequired,
  boardIcon: PropTypes.node.isRequired,      
};
