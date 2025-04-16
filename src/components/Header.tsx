
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header: React.FC = () => {
  const location = useLocation();
  const isIndexPage = location.pathname === '/';
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const MobileNavLinks = () => (
    <div className="flex flex-col space-y-4 py-4">
      <>
        <a href="#introduction" onClick={() => setIsOpen(false)} className="text-base font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-4 py-2 rounded-lg shadow-md transition-all duration-300">About</a>
        <a href="#projects" onClick={() => setIsOpen(false)} className="text-base font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-4 py-2 rounded-lg shadow-md transition-all duration-300">Projects</a>
        <a href="#experience" onClick={() => setIsOpen(false)} className="text-base font-medium text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 px-4 py-2 rounded-lg shadow-md transition-all duration-300">Experience</a>
        <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-base font-medium text-white bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 px-4 py-2 rounded-lg shadow-md transition-all duration-300">Testimonials</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className="text-base font-medium text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-4 py-2 rounded-lg shadow-md transition-all duration-300">Contact</a>
      </>
      {!isIndexPage && (
        <Link 
          to="/"
          onClick={() => setIsOpen(false)} 
          className="text-base font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors px-4 py-2">
          View Portfolio
        </Link>
      )}
    </div>
  );

  const DesktopNavLinks = () => (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
      <>
        <a href="#introduction" className="text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg shadow-md transition-all duration-300">About</a>
        <a href="#projects" className="text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg shadow-md transition-all duration-300">Projects</a>
        <a href="#experience" className="text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg shadow-md transition-all duration-300">Experience</a>
        <a href="#testimonials" className="text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg shadow-md transition-all duration-300 hidden sm:block">Testimonials</a>
        <a href="#contact" className="text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg shadow-md transition-all duration-300">Contact</a>
      </>
      {!isIndexPage && (
        <Link 
          to="/" 
          className="text-xs sm:text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors px-2 sm:px-3 md:px-4 py-1.5 sm:py-2">
          View Portfolio
        </Link>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-primary tracking-tight">Portfolio</Link>
        </div>
        
        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button 
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
                aria-label="Main menu"
                aria-expanded="false"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <MobileNavLinks />
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center">
            <DesktopNavLinks />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
