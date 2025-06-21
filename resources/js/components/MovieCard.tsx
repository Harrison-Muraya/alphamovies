import { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

interface Movie {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoPlayerOpen, setIsVideoPlayerOpen] = useState(false);
  const title = movie.title || movie.name;
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  
  // Demo video URL - in a real app, this would come from your API
  const videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  const handlePlayClick = () => {
    setIsVideoPlayerOpen(true);
  };

  return (
    <>
      <div
        className="relative min-w-[200px] h-[300px] cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-full rounded-lg overflow-hidden bg-gray-900">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          
          {isHovered && (
            <div className="absolute inset-0 bg-black/70 animate-fade-in">
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
                  {title}
                </h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <button 
                    onClick={handlePlayClick}
                    className="bg-white text-black p-1.5 rounded-full hover:bg-gray-200 transition-colors duration-200"
                  >
                    <Play className="w-3 h-3" />
                  </button>
                  <button className="border border-gray-400 text-white p-1.5 rounded-full hover:border-white transition-colors duration-200">
                    <Plus className="w-3 h-3" />
                  </button>
                  <button className="border border-gray-400 text-white p-1.5 rounded-full hover:border-white transition-colors duration-200">
                    <ThumbsUp className="w-3 h-3" />
                  </button>
                  <button className="border border-gray-400 text-white p-1.5 rounded-full hover:border-white transition-colors duration-200 ml-auto">
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
                
                <div className="flex items-center space-x-2 text-xs text-gray-300">
                  <span className="bg-green-600 px-1 py-0.5 rounded text-white font-semibold">
                    {Math.round(movie.vote_average * 10)}% Match
                  </span>
                  <span>
                    {movie.release_date?.slice(0, 4) || movie.first_air_date?.slice(0, 4)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <VideoPlayer
        isOpen={isVideoPlayerOpen}
        onClose={() => setIsVideoPlayerOpen(false)}
        videoUrl={videoUrl}
        title={title || 'Unknown Title'}
      />
    </>
  );
};

export default MovieCard;