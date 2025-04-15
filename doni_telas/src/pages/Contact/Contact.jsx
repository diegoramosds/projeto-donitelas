import { LocateIcon, Mail, Phone } from "lucide-react";

import { motion } from "motion/react";
import FormMessage from "../../components/FormMessage/FormMessage";
import BoardComponent from "../../components/BoardComponent/BoardComponent";

const Contact = () => {
  return (
    <div className="contact-form">
      <div className="primary-contatc">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Entre em Contato</h1>
          <p>
            Estamos prontos para atender sua necessidade. Entre em contato para
            um orçamento sem compromisso.
          </p>
        </motion.div>
      </div>

      <div className="info-profile">
        <BoardComponent
          boardIcon={<Phone size={30} />}
          title={<span className="title-board">Telefone</span>}
          subTitle={"(11) 96857-9924"}
        />

        <BoardComponent
          boardIcon={<Mail size={30} />}
          title={<span className="title-board">Email</span>}
          subTitle={"telasdoni@gmail.com"}
        />

        <BoardComponent
          boardIcon={<LocateIcon size={30} />}
          title={<span className="title-board">Endereço</span>}
          subTitle={"Vargem Grande Paulista- SP"}
        />
      </div>
      <FormMessage />
    </div>
  );
};

export default Contact;
