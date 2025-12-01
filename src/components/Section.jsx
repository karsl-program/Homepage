import { motion } from 'framer-motion';

const Section = ({ children, className = "", id, title }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`min-h-[80vh] w-full flex flex-col items-center p-8 md:p-16 ${className}`}
    >
      {title && (
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 relative"
        >
          <span className="relative z-10">{title}</span>
          <span className="absolute -bottom-2 left-0 w-full h-4 bg-primary/40 -z-0 rounded-full transform -rotate-1"></span>
        </motion.h2>
      )}
      <div className="w-full max-w-6xl">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
