import React from 'react';
import { Palette, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Palette className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-gray-800">GGJJ Studio</span>
          </div>
          <div className="flex space-x-6 text-gray-400">
             <div className="flex items-center hover:text-primary transition-colors cursor-default">
               <MessageCircle className="h-5 w-5 mr-2" />
               微信联系方式: Jen--------
             </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-100 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} GGJJ Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;