import Section from './Section';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Calculator } from 'lucide-react';

const Interests = () => {
  return (
    <Section id="interests" title="Interests">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div 
          className="space-y-6"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/20 rounded-xl text-primaryDark">
                <Code size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">
              信息学竞赛 | OI
            </h3>
          </div>
          
          <p className="text-gray-600 text-lg">
            学习新的算法或数据结构是一个体会前人智慧结晶的过程，我时常为前人强大的思维能力所震撼，也锻炼了自己。
          </p>
          
          <div className="flex flex-col gap-4">
             <a href="https://www.luogu.com.cn/user/1033564" target="_blank" rel="noopener noreferrer" className="block group no-underline">
                <div className="w-full bg-gradient-to-r from-[#3498db] to-[#8e44ad] p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 relative overflow-hidden">
                   <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                   <h4 className="text-2xl font-bold mb-1 font-handwriting">Luogu Profile</h4>
                   <p className="text-white/80 font-medium text-sm">User: karsl (ID: 1033564)</p>
                   <div className="mt-4 flex items-center gap-2 text-sm bg-white/20 w-fit px-3 py-1 rounded-lg backdrop-blur-sm">
                      <ExternalLink size={14} /> Visit Profile
                   </div>
                </div>
             </a>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://codeforces.com/profile/karslcn" target="_blank" rel="noopener noreferrer" 
               className="px-6 py-3 bg-[#1f8dd6] text-white rounded-full font-bold hover:bg-[#1a7bbd] transition-all hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-blue-200">
               View on Codeforces <ExternalLink size={18} />
            </a>
            <a href="https://atcoder.jp/users/karsl" target="_blank" rel="noopener noreferrer" 
               className="px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-gray-400">
               View on AtCoder <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="space-y-6"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
           <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-secondary/20 rounded-xl text-secondaryDark">
                <Calculator size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">
              Math & Physics
            </h3>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-secondary/30 relative overflow-hidden">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl"></div>
            
            <p className="text-gray-600 leading-relaxed text-lg relative z-10">
              解决数学问题的纯粹的智力游戏让我十分享受。我热衷于学习更多新鲜的数学或物理知识。
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4 relative z-10">
                <motion.div whileHover={{ scale: 1.05 }} className="bg-secondary/10 p-4 rounded-2xl text-center text-secondaryDark font-bold cursor-default">微积分</motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-accent/20 p-4 rounded-2xl text-center text-yellow-700 font-bold cursor-default">数论</motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-primary/10 p-4 rounded-2xl text-center text-primaryDark font-bold cursor-default">群论</motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-teal-100 p-4 rounded-2xl text-center text-teal-700 font-bold cursor-default">组合数学</motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Interests;
