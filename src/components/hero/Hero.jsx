import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageProvider";
import { Link } from "react-scroll"; // Importa Link de react-scroll
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const { isSpanish, toggleLanguage } = useLanguage();

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>JOAQUIN SCAVARIELLO</motion.h2>
          <motion.h1 variants={textVariants}>
            {isSpanish
              ? "Desarrollador Full Stack y diseñador UI"
              : "Full Stack developer and UI designer"}
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            {/* Utiliza Link de react-scroll en lugar de onClick */}
            <Link to="Portfolio" spy={true} smooth={true} duration={1}>
              <motion.button variants={textVariants} whileTap={{scale:1.1}}>
                {isSpanish
                  ? "Ver Trabajos Recientes"
                  : "See the Latest Works"}
              </motion.button>
            </Link>
            <Link to="Contact" spy={true} smooth={true} duration={1}>
              <motion.button variants={textVariants} whileTap={{scale:1.1}} >
                {isSpanish ? "Contactarme" : "Contact Me"}
              </motion.button>
            </Link>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        {isSpanish
          ? "Diseñador Creador de Contenido Project Management"
          : "Writer Content Creator project management"}
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="Foto" />
      </div>
    </div>
  );
};

export default Hero;
