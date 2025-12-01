import Section from './Section';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Music, ExternalLink } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const songs = [
  { 
    title: "Cherry Pop", 
    artist: "DECO*27 / Hatsune Miku", 
    cover: "https://placehold.co/300x300/fbcfe8/ffffff?text=Cherry+Pop", 
    link: "https://music.163.com/#/song?id=2719630556",
    mp3: "https://music.163.com/song/media/outer/url?id=2719630556.mp3"
  },
  { 
    title: "Imasugu Rinne", 
    artist: "Nakiso / Hatsune Miku", 
    cover: "https://placehold.co/300x300/bae6fd/ffffff?text=Rinne", 
    link: "https://music.163.com/#/song?id=2730639960",
    mp3: "https://music.163.com/song/media/outer/url?id=2730639960.mp3"
  },
  { 
    title: "Nyandet", 
    artist: "Yabas / Hatsune Miku", 
    cover: "https://placehold.co/300x300/fde047/ffffff?text=Nyandet", 
    link: "https://music.163.com/song?id=2085420515",
    mp3: "https://music.163.com/song/media/outer/url?id=2085420515.mp3" 
  },
  { 
    title: "Onigokko", 
    artist: "Haruno / Luo Tianyi", 
    cover: "https://placehold.co/300x300/a7f3d0/ffffff?text=Onigokko", 
    link: "https://music.163.com/song?id=2724081969",
    mp3: "https://music.163.com/song/media/outer/url?id=2724081969.mp3" 
  },
  { 
    title: "Float", 
    artist: "Adeliae / Hatsune Miku", 
    cover: "https://placehold.co/300x300/e9d5ff/ffffff?text=Float", 
    link: "https://music.163.com/song?id=2721295033",
    mp3: "https://music.163.com/song/media/outer/url?id=2721295033.mp3" 
  },
  { 
    title: "Non-breath Oblige", 
    artist: "PinocchioP / Hatsune Miku", 
    cover: "https://placehold.co/300x300/fecaca/ffffff?text=Non-breath", 
    link: "https://music.163.com/song?id=1849309117",
    mp3: "https://music.163.com/song/media/outer/url?id=1849309117.mp3" 
  },
];

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(error => {
        console.error("Playback failed:", error);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(error => {
        console.error("Playback failed:", error);
        setIsPlaying(false);
      });
    }
  }, [currentSong]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
  };

  const handlePrev = () => {
    setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length);
  };
  
  const handleEnded = () => {
    handleNext();
  };


  return (
    <Section id="music" title="My Playlist">
      <audio 
        ref={audioRef} 
        src={songs[currentSong].mp3} 
        onEnded={handleEnded} 
      />
      <div className="w-full flex justify-center mb-6">
         <a href="https://music.163.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-md">
            <Music size={18} /> <span>Listen on Netease Cloud Music</span>
         </a>
      </div>
      <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border-4 border-white flex flex-col md:flex-row max-w-5xl w-full mx-auto">
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-primary/20 to-secondary/20 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <motion.div
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear", paused: !isPlaying }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[50px] border-white/10 rounded-full -z-0"
            />

            <motion.div 
                key={currentSong}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-48 h-48 md:w-64 md:h-64 rounded-3xl shadow-2xl overflow-hidden mb-8 relative z-10"
            >
                <img src={songs[currentSong].cover} alt="cover" className="w-full h-full object-cover" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-1 relative z-10">{songs[currentSong].title}</h3>
            <p className="text-gray-500 font-medium mb-8 relative z-10">{songs[currentSong].artist}</p>
            
            <div className="flex items-center gap-6 relative z-10">
                <button 
                    onClick={handlePrev}
                    className="p-4 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-primary shadow-sm hover:shadow-md transition-all"
                >
                    <SkipBack size={24} fill="currentColor" />
                </button>
                <button 
                    onClick={handlePlayPause}
                    className="p-6 bg-primary text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
                >
                    {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" />}
                </button>
                <button 
                     onClick={handleNext}
                    className="p-4 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-primary shadow-sm hover:shadow-md transition-all"
                >
                    <SkipForward size={24} fill="currentColor" />
                </button>
                <a 
                    href={songs[currentSong].link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-primary shadow-sm hover:shadow-md transition-all"
                    title="Play on External Site"
                >
                    <ExternalLink size={24} />
                </a>
            </div>
        </div>

        <div className="w-full md:w-1/2 p-8 bg-white overflow-y-auto max-h-[500px]">
            <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Music size={20} /> Up Next
            </h4>
            <div className="space-y-3">
                {songs.map((song, index) => (
                    <motion.div 
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setCurrentSong(index)}
                        className={`p-4 rounded-2xl flex items-center gap-4 cursor-pointer transition-colors ${currentSong === index ? 'bg-primary/10 border-primary/20 border' : 'hover:bg-gray-50 border border-transparent'}`}
                    >
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                            <img src={song.cover} alt={song.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                            <h5 className={`font-bold ${currentSong === index ? 'text-primaryDark' : 'text-gray-700'}`}>{song.title}</h5>
                            <p className="text-sm text-gray-500">{song.artist}</p>
                        </div>
                        {currentSong === index && (
                             <div className="flex gap-1">
                                <div className="w-1 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                <div className="w-1 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-1 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                             </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </Section>
  );
};

export default MusicPlayer;
