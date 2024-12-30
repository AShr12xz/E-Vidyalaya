import Hero from './pages/Hero';
import About from './pages/About';
import Teacher from './pages/Teacher';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RouteFunction />
      <Footer />
    </BrowserRouter>
  );
}

function RouteFunction() { 
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.key}> 
        <Route 
          path="/" 
          element={
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <Hero />
            </motion.div>
          } 
        />
        <Route 
          path="/home" 
          element={
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <Hero />
            </motion.div>
          } 
        />
        <Route 
          path="/about" 
          element={
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <About />
            </motion.div>
          } 
        />
        <Route 
          path="/teachers" 
          element={
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <Teacher />
            </motion.div>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
