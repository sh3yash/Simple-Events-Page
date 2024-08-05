import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => (
  <section className="hero-section" style={{ backgroundImage: 'url(/src/assets/background1.jpg)' }}>
    <div className="hero-overlay"></div>
    <motion.div
      className="hero-content"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="hero-title">Welcome to the Beauty Contest</h1>
      <p className="hero-subtitle">Showcase your talent and beauty. Participate in exciting events and challenges!</p>
      <motion.a
        href="#events"
        className="hero-button"
        whileHover={{ scale: 1.1 }}
      >
        Explore Events
      </motion.a>
    </motion.div>
    {/* <motion.img
      src="/src/assets/decorative1.jpeg"
      alt="Decorative Element"
      className="absolute bottom-0 left-0 w-32 h-32"
      initial={{ opacity: 0, x: -50, y: 50 }}
      animate={{ opacity: 0.5, x: 0, y: 0 }}
      transition={{ duration: 1.5 }}
    />
    <motion.img
      src="/src/assets/decorative2.jpeg"
      alt="Decorative Element"
      className="absolute bottom-0 right-0 w-32 h-32"
      initial={{ opacity: 0, x: 50, y: 50 }}
      animate={{ opacity: 0.5, x: 0, y: 0 }}
      transition={{ duration: 1.5 }}
    /> */}
  </section>
);

export default HeroSection;
