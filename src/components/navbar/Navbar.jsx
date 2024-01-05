import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          SkarDev
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/skardesigne/">
            <img src="/facebook.png" alt="facebook png" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="instagram png" />
          </a>
          <a href="https://wa.me/2255438911">
            <img src="pngwing.com.png" alt="whatsapp png" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
