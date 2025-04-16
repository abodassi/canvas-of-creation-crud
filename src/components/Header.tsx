
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
        <a href="#introduction" onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-700 hover:text-primary transition-colors">About</a>
        <a href="#projects" onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-700 hover:text-primary transition-colors">Projects</a>
        <a href="#experience" onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-700 hover:text-primary transition-colors">Experience</a>
        <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-700 hover:text-primary transition-colors">Testimonials</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-700 hover:text-primary transition-colors">Contact</a>
        <Link 
          to="/admin"
          onClick={() => setIsOpen(false)} 
          className="text-base font-medium text-gray-700 hover:text-primary transition-colors">
          Admin
        </Link>
      </>
      {!isIndexPage && (
        <Link 
          to="/"
          onClick={() => setIsOpen(false)} 
          className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors">
          View Portfolio
        </Link>
      )}
    </div>
  );

  const DesktopNavLinks = () => (
    <div className="flex items-center space-x-6">
      <>
        <a href="#introduction" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">About</a>
        <a href="#projects" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Projects</a>
        <a href="#experience" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Experience</a>
        <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Testimonials</a>
        <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Contact</a>
        <Link 
          to="/admin" 
          className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
          Admin
        </Link>
      </>
      {!isIndexPage && (
        <Link 
          to="/" 
          className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors">
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
          <nav className="flex items-center space-x-6">
            <DesktopNavLinks />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
