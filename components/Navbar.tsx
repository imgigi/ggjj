import React from 'react';
import { Palette } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center w-full justify-center md:justify-start">
            <div className="flex-shrink-0">
              <span className="flex items-center gap-2 font-bold text-xl text-gray-800">
                <Palette className="h-6 w-6 text-primary" />
                <span>GGJJ Studio</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;