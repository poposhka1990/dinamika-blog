import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-blue-600">Главная</Link>
              <Link to="/blog" className="block hover:text-blue-600">Блог</Link>
              <Link to="/store" className="block hover:text-blue-600">Магазин</Link>
              <Link to="/tools" className="block hover:text-blue-600">Инструменты</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <div className="space-y-2">
              <p>Email: info@dynamika.ru</p>
              <p>Тел: +7 (999) 123-45-67</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Адрес</h3>
            <p>г. Москва, ул. Спортивная, д. 1</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Социальные сети</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p>© 2024 Динамика. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}