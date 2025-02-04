import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Activity } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { PaceCalculator } from './components/PaceCalculator';
import { MobileMenu } from './components/MobileMenu';
import { Footer } from './components/Footer';
import { blogPosts } from './data/blog';
import { products, bmaiProducts, antaProducts } from './data/products';

function App() {
  const latestPost = blogPosts[0];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-post', 'DynamicsClub/207');
    script.setAttribute('data-width', '100%');
    
    const container = document.getElementById('telegram-widget');
    if (container) {
      container.innerHTML = '';
      container.appendChild(script);
    }
  }, []);

  return (
    <Router future={{
      v7_startTransition: true,
    }}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Activity className="h-8 w-8 text-blue-600" />
                <Link to="/" ><span className="ml-2 text-xl font-bold">Динамика</span></Link>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/" className="hover:text-blue-600">Главная</Link>
                <Link to="/blog" className="hover:text-blue-600">Блог</Link>
                <Link to="/store" className="hover:text-blue-600">Магазин</Link>
                <Link to="/tools" className="hover:text-blue-600">Утилиты</Link>
                <ThemeToggle />
              </div>
              <div className="flex md:hidden items-center space-x-4">
                <ThemeToggle />
                <MobileMenu />
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={
              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-bold mb-6">Статьи</h2>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <img src={latestPost.image} alt="" className="w-full h-64 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{latestPost.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{latestPost.excerpt}</p>
                      <div className="space-y-2">
                        <Link to={`/blog/${latestPost.id}`} className="block text-blue-600 hover:underline">
                          Читать далее →
                        </Link>
                        <Link to="/blog" className="block text-blue-600 hover:underline">
                          Больше статей →
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-2">Динамика.Store</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">Купи лучшие кроссовки из Китая</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.slice(0, window.innerWidth < 768 ? 1 : 3).map(product => (
                      <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <img src={product.image} alt="" className="w-full h-48 object-cover" />
                        <div className="p-6">
                          <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-bold">{product.price} ₽</span>
                            <Link to="/store" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                              Больше моделей
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-6">Утилиты для бегунов</h2>
                  <PaceCalculator />
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-6">Больше актуального в Telegram</h2>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div id="telegram-widget" className="p-6" />
                    <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-post="DynamicsClub/207" data-width="100%"></script>
                  </div>
                </section>
              </div>
            } />
            
            <Route path="/blog" element={
              <div className="space-y-8">
                <h1 className="text-3xl font-bold mb-8">Блог</h1>
                <div className="grid gap-8">
                  {blogPosts.map(post => (
                    <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img src={post.image} alt="" className="w-full h-48 md:h-full object-cover" />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">{post.date}</span>
                            <Link to={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                              Читать далее →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            } />

            <Route path="/blog/:id/*" element={
              <div className="space-y-8">
                {blogPosts.map(post => (
                  <Routes key={post.id}>
                    <Route path={post.id} element={
                      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <img src={post.image} alt="" className="w-full h-64 object-cover" />
                        <div className="p-6">
                          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                          <span className="text-sm text-gray-500 block mb-6">{post.date}</span>
                          <div className="prose dark:prose-invert max-w-none">
                            <p className="text-gray-600 dark:text-gray-300 mb-6 whitespace-pre-line">
                              {post.content}
                            </p>
                          </div>
                          <Link to="/blog" className="text-blue-600 hover:underline">
                            Больше статей →
                          </Link>
                        </div>
                      </article>
                    } />
                  </Routes>
                ))}
              </div>
            } />

            <Route path="/store" element={
              <div className="space-y-12">
                <h1 className="text-3xl font-bold mb-2">Динамика.Store</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-8">Купи лучшие кроссовки из Китая</p>
                
                <section>
                  <h2 className="text-2xl font-bold mb-6">BMAI</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bmaiProducts.map(product => (
                      <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <img src={product.image} alt="" className="w-full h-48 object-cover" />
                        <div className="p-6">
                          <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-bold">{product.price} ₽</span>
                            <a href={product.buyLink} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                              Купить
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-6">Anta</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {antaProducts.map(product => (
                      <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <img src={product.image} alt="" className="w-full h-48 object-cover" />
                        <div className="p-6">
                          <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-bold">{product.price} ₽</span>
                            <a href={product.buyLink} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                              Купить
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold mb-6">Как сделать заказ</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">1. Оформление заказа</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Выберите нужную модель и размер, нажмите кнопку "Купить". Заполните форму заказа с вашими контактными данными.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">2. Оплата</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Мы принимаем оплату картами Мир, СБП и Тинькофф. После оформления заказа вы получите ссылку на оплату.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">3. Доставка</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Доставка осуществляется СДЭК или Почтой России. Срок доставки 10-14 дней. Стоимость доставки рассчитывается автоматически при оформлении заказа.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">4. Гарантия</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        На все товары действует гарантия 30 дней. В случае обнаружения брака мы вернем деньги или заменим товар.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            } />

            <Route path="/tools" element={
              <div className="space-y-8">
                <h1 className="text-3xl font-bold mb-8">Утилиты</h1>
                <PaceCalculator />
              </div>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;