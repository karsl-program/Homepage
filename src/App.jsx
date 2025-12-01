import Hero from './components/Hero';
import About from './components/About';
import Favorites from './components/Favorites';
import Interests from './components/Interests';
import TechStack from './components/TechStack';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-gray-800 selection:bg-primary/30 relative overflow-hidden">
       <div className="fixed inset-0 z-[-2]">
          <img src="https://cdn.luogu.com.cn/upload/image_hosting/fqist0jx.png" alt="" className="w-full h-full object-cover filter blur-md scale-110" />
       </div>
       <div className="fixed inset-0 z-[-1] bg-white/30"></div>

       <Hero />
       <div className="space-y-20 md:space-y-32 pb-10">
          <About />
          <Favorites />
          <Interests />
          <TechStack />
          <MusicPlayer />
       </div>
       <Footer />
    </div>
  )
}

export default App;
