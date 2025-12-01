import Section from './Section';
import { motion } from 'framer-motion';

const characters = [
  { name: "Mahiro Oyama", source: "Oniichan is Done For!", img: "https://storage.moegirl.org.cn/moegirl/commons/1/1e/%E5%88%AB%E5%BD%93%E6%AC%A7%E5%B0%BC%E9%85%B1%E4%BA%86%EF%BC%81%E4%B8%80%E8%BF%85%E7%A4%BE_%E7%AC%AC%E4%B8%80%E5%8D%B7.jpg" },
  { name: "Hoshino Takanashi", source: "Blue Archive", img: "https://storage.moegirl.org.cn/moegirl/commons/e/e0/BA_Pic_100034965_p0.png!/fw/800/watermark/url/L21vZWdpcmwvd2F0ZXJtYXJrLnBuZw==/align/southeast/margin/10x10/opacity/50?v=20230523135844" },
];

const Favorites = () => {
  return (
    <Section id="favorites" title="Favorite Characters">
      <div className="flex flex-wrap justify-center gap-8">
        {characters.map((char, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-3xl shadow-md bg-white cursor-pointer border-4 border-white w-full max-w-xs md:max-w-sm"
            whileHover={{ scale: 1.03, rotate: 1 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="aspect-[3/4] overflow-hidden bg-gray-100">
              <img src={char.img} alt={char.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-12 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold font-handwriting">{char.name}</h3>
              <p className="text-sm opacity-90 font-medium">{char.source}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Favorites;
