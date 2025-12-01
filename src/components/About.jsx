import Section from './Section';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Section id="about" title="About Me">
      <motion.div 
        className="bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-sm border border-white/50 relative overflow-hidden"
        whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-tr-full -ml-6 -mb-6"></div>
        
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium relative z-10">
          你好！我是 <span className="text-primaryDark font-bold">karsl</span>，生于 2012 年。
          <br /><br />
          居住在福建省厦门市集美区，现役蒟蒻 OIer，初中生，数理爱好者但数理并不是很好。全栈开发者，愿意且热爱学习一切与互联网有关的内容。
          <br /><br />
          感谢您来到我的个人主页！
        </p>
      </motion.div>
    </Section>
  );
};

export default About;
