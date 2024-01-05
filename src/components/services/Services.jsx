import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../../context/LanguageProvider";
import "./services.scss";
import { Link } from "react-scroll";


const variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};


const Services = () => {
  const ref = useRef();
  const { isSpanish } = useLanguage();
  const isInView = useInView(ref, { triggerOnce: true });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      ref={ref}
    >
      <div className="textContainer">
        <p>
          {isSpanish
            ? "Me especializo en proporcionar soluciones completas como diseñador full stack."
            : "I specialize in providing end-to-end solutions as a full stack designer."}
        </p>
        <hr />
      </div>
      <div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="gente trabajando" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>
              {isSpanish ? "Ideas" : "Unique Ideas"}
            </motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>
              {isSpanish ? "Para Tu" : "For Your"}
            </motion.b>{" "}
            {isSpanish ? "Negocio." : "Business."}
          </h1>
          <button><Link to="contact" spy={true} smooth={true} duration={1}>{isSpanish ? " CONTACTAME" : "CANTAC ME"}</Link></button>
        </div>
      </div>
      <div className="listContainer">
        <motion.div className="box"
         whileHover={{ background: "lightgray", color: "black" }}>
          <h2>{isSpanish ? "Desarrollo Web" : "Web Development"}</h2>
          <p>
            {isSpanish
              ? "Construcción de sitios web interactivos y funcionales utilizando las últimas tecnologías y mejores prácticas."
              : "Building interactive and functional websites using the latest technologies and best practices."}
          </p>
          <button><Link to="Portfolio" spy={true} smooth={true} duration={1}>{isSpanish ? "Descubrir" : "Discover"}</Link></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>{isSpanish ? "Diseño UX/UI" : "UX/UI Design"}</h2>
          <p>
            {isSpanish
              ? "Creación de experiencias de usuario atractivas y diseño de interfaces de usuario intuitivas."
              : "Crafting engaging user experiences and designing intuitive user interfaces."}
          </p>
          <button><Link to="Portfolio" spy={true} smooth={true} duration={1}>{isSpanish ? "Descubrir" : "Discover"}</Link></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>{isSpanish ? "Desarrollo Backend" : "Backend Development"}</h2>
          <p>
            {isSpanish
              ? "Implementación de lógica de servidor, bases de datos y gestión de la lógica empresarial."
              : "Implementing server-side logic, databases, and handling business logic."}
          </p>
          <button><Link to="Portfolio" spy={true} smooth={true} duration={1}>{isSpanish ? "Descubrir" : "Discover"}</Link></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>{isSpanish ? "Optimización del Rendimiento" : "Performance Optimization"}</h2>
          <p>
            {isSpanish
              ? "Mejora del rendimiento de aplicaciones web para una experiencia más rápida y eficiente."
              : "Improving the performance of web applications for a faster and more efficient experience."}
          </p>
          <button><Link to="Portfolio" spy={true} smooth={true} duration={1}>{isSpanish ? "Descubrir" : "Discover"}</Link></button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
