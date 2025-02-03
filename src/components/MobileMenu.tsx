import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 dark:text-gray-300"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg py-4 px-6 z-50">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/blog" 
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Блог
            </Link>
            <Link 
              to="/store" 
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Магазин
            </Link>
            <Link 
              to="/tools" 
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Инструменты
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}