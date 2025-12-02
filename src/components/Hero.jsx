import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10 opacity-70" 
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 opacity-70" 
      />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative z-10"
      >
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-[6px] border-white shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src="https://q1.qlogo.cn/g?b=qq&nk=2264284870&s=640" alt="karsl avatar" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="font-handwriting text-6xl md:text-8xl mt-10 text-gray-800 text-center drop-shadow-sm"
      >
        Welcome, I'm karsl
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-6 text-xl md:text-2xl text-gray-600 font-medium flex items-center gap-3"
      >
        <span>OIer</span>
        <span className="w-2 h-2 bg-primary rounded-full"></span>
        <span>Math & Physics</span>
        <span className="w-2 h-2 bg-secondary rounded-full"></span>
        <span>Anime</span>
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;
