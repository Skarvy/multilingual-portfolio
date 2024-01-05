import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    
    <button onClick={() => setOpen((prev) => !prev)}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <motion.path
        strokeWidth="3"
        stroke="black"
        strokeLinecap="round"
        variants={{
          closed: { d: "M 2 5 L 20 5" },
          open: { d: "M 3 18 L 17 4" },
        }}
      />
      <motion.path
        strokeWidth="3"
        stroke="black"
        strokeLinecap="round"
        d="M 2 12.5 L 20 12.5"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
      />
      <motion.path
        strokeWidth="3"
        stroke="black"
        strokeLinecap="round"
        variants={{
          closed: { d: "M 2 20 L 20 20" },
          open: { d: "M 3 6 L 17 20" },
        }}
      />
    </svg>
  </button>
  );
};

export default ToggleButton;
