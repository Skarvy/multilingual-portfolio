import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLanguage } from "../../context/LanguageProvider";

const items = [
  {
    id: 1,
    title: "Restaurat Website",
    titleSpanish: "Sitio web de Restaurante",
    img: "./resto.png",
    descSpanish: "Explora la experiencia gastronómica con nuestro sitio web de restaurante. Descubre nuestro menú, conoce nuestro equipo y encuentra la ubicación perfecta para disfrutar de una deliciosa comida.",
    desc: "Explore the dining experience with our restaurant website. Discover our menu, meet our team, and find the perfect location to enjoy a delicious meal.",
    onlinePage: "https://themewagon.github.io/restoran/"
  },
  {
    id: 2,
    title: "E-commerce Website",
    titleSpanish: "Sitio web de comercio electrónico",
    img: "./ecomerce.png",
    descSpanish: "Explora nuestra amplia gama de productos en nuestro sitio web de comercio electrónico. Desde la moda hasta la tecnología, ofrecemos una experiencia de compra sin inconvenientes.",
    desc: "Explore our wide range of products on our e-commerce website. From fashion to technology, we provide a seamless shopping experience.",
    onlinePage: "https://657a46fbfde4ba2c76198a48--jade-centaur-d065de.netlify.app/"
  },
  {
    id: 3,
    title: "Hotel Website",
    titleSpanish: "Sitio web de hotel",
    img: "./hotel.png",
    descSpanish: "Descubre el lujo y la comodidad en nuestro sitio web de hotel. Explora nuestras habitaciones, conoce nuestras instalaciones y reserva tu estadía para una experiencia inolvidable.",
    desc: "Discover luxury and comfort on our hotel website. Explore our rooms, learn about our facilities, and book your stay for an unforgettable experience.",
    onlinePage: "https://thegloryhotels.netlify.app/"
  },
  {
    id: 4,
    title: "Gym Website",
    titleSpanish: "Sitio web de gimnasio",
    img: "./gym.png",
    descSpanish: "Sumérgete en un estilo de vida saludable con nuestro sitio web de gimnasio. Descubre rutinas de entrenamiento, conoce a nuestros entrenadores y comienza tu viaje hacia un cuerpo más fuerte.",
    desc: "Immerse yourself in a healthy lifestyle with our gym website. Discover workout routines, meet our trainers, and start your journey to a stronger body.",
    onlinePage: "https://gymate-mersad.netlify.app/"
  },
];



const Single = ({ item, isSpanish }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <a href={item.onlinePage} target="_blank" rel="noopener noreferrer">
              <img src={item.img} alt={item.title} />
            </a>
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{isSpanish ? item.titleSpanish : item.title}</h2>
            <p>{isSpanish ? item.descSpanish : item.desc}</p>
            <a href={item.onlinePage} target="_blank" rel="noopener noreferrer">
              <button>{isSpanish ? "Ver Demo" : "See Demo"}</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const { isSpanish } = useLanguage();

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>{isSpanish ? "Trabajos Destacados" : "Featured Works"}</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} isSpanish={isSpanish} />
      ))}
    </div>
  );
};

export default Portfolio;