
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-primary tracking-tight">Portfolio</Link>
        </div>
        <nav className="flex items-center space-x-6">
          {!isAdminPage ? (
            <>
              <a href="#introduction" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">About</a>
              <a href="#projects" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Projects</a>
              <a href="#experience" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Experience</a>
              <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Testimonials</a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Contact</a>
              <Link 
                to="/admin" 
                className="ml-3 px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors">
                Admin
              </Link>
            </>
          ) : (
            <Link 
              to="/" 
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors">
              View Portfolio
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
