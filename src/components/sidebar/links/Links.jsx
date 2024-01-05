import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useLanguage } from "../../../context/LanguageProvider";
import "./links.scss"

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const LinkItem = ({ to, children }) => {
  const { isSpanish } = useLanguage();

  return (
    <motion.div variants={itemVariants} whileHover={{ scale: 1.1, cursor: 'pointer' }} whileTap={{ scale: 0.95 }}>
      <ScrollLink
        to={to.toLowerCase()}
        smooth={true}
        duration={1}
      >
        {children}
      </ScrollLink>
    </motion.div>
  );
};

const Links = () => {
  const { isSpanish, toggleLanguage } = useLanguage();
  const linkTranslations = {
    "Homepage": isSpanish ? "Página Principal" : "Homepage",
    "Services": isSpanish ? "Servicios" : "Services",
    "Portfolio": isSpanish ? "Portafolio" : "Portfolio",
    "Contact": isSpanish ? "Contacto" : "Contact",
  };

  return (
    <motion.div className="links" variants={variants}>
      {Object.keys(linkTranslations).map((item) => (
        <LinkItem key={item} to={item}>
          {linkTranslations[item]}
        </LinkItem>
      ))}
      <motion.div variants={itemVariants} whileHover={{ scale: 1.1, cursor: 'pointer' }} whileTap={{ scale: 0.95 }} onClick={toggleLanguage}>
        {linkTranslations["ToggleLanguage"]}
        <h4> { isSpanish ? "Translate": "Traducir"} </h4>
      </motion.div>
    </motion.div>
  );
};

export default Links;
