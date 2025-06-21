import { useState, useEffect } from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between px-4 py-4 md:px-12">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl md:text-3xl font-bold text-red-600 tracking-wider">
            ALPHA
          </h1>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">TV Shows</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">Movies</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">New & Popular</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">My List</a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors duration-200" />
          <Bell className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors duration-200" />
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors duration-200">
            <User className="w-4 h-4 text-white" />
          </div>
          <Menu className="w-5 h-5 text-white md:hidden cursor-pointer hover:text-gray-300 transition-colors duration-200" />
        </div>
      </div>
    </header>
  );
};

export default Header;
