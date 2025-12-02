import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const friendGroups = [
  {
    id: 'net',
    label: 'Network Friends',
    list: [
      { name: "cleversheep2011", avatar: "https://cdn.luogu.com.cn/upload/usericon/1264654.png", bio: "OIer and math dalao", link: "https://shearbyte.dev/" },
      { name: "小寻寻", avatar: "https://q1.qlogo.cn/g?b=qq&nk=760966144&s=100", bio: "来自广东的猫娘", link: "https://www.misaka23323.com" },
    ]
  },
  {
    id: 'school',
    label: 'Schoolmates',
    list: [
      { name: "harlan", avatar: "https://eb118-file.cdn.bcebos.com/upload/7c8d29777635476a96d004d56072541c_1078272698.png", bio: "OIer and math dalao", link: "https://harlan1015.github.io/" },
      { name: "蔬菜vegetables_awa", avatar: "https://cdn.luogu.com.cn/upload/usericon/1219481.png", bio: "OIer and Minecraft player", link: "https://space.bilibili.com/3546745413831251"}
    ]
  }
];

const Friends = () => {
  const [activeTab, setActiveTab] = useState(friendGroups[0].id);

  return (
    <div className="w-full max-w-4xl mx-auto mb-20 px-4">
      <h3 className="text-center text-xl font-bold text-gray-800 mb-10 flex items-center justify-center gap-4">
        <span className="h-px w-8 bg-gray-300"></span>
        My Friends
        <span className="h-px w-8 bg-gray-300"></span>
      </h3>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {friendGroups.map((group) => (
          <button
            key={group.id}
            onClick={() => setActiveTab(group.id)}
            className={`px-6 py-2 rounded-full font-bold transition-all duration-300 border-2 ${
              activeTab === group.id 
                ? 'bg-white border-primary text-primaryDark shadow-md' 
                : 'bg-transparent border-transparent text-gray-500 hover:bg-white/50'
            }`}
          >
            {group.label}
          </button>
        ))}
      </div>

      <div className="min-h-[150px]">
        <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap justify-center gap-8 md:gap-12"
            >
              {friendGroups.find(g => g.id === activeTab).list.map((friend, i) => (
                <a key={i} href={friend.link} className="flex flex-col items-center gap-3 group no-underline w-24">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:border-primary transition-colors bg-white"
                  >
                    <img src={friend.avatar} alt={friend.name} className="w-full h-full object-cover" />
                  </motion.div>
                  <div className="text-center">
                    <span className="block text-sm font-bold text-gray-800 group-hover:text-primary transition-colors">{friend.name}</span>
                    <span className="block text-xs text-gray-500">{friend.bio}</span>
                  </div>
                </a>
              ))}
            </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Friends;
