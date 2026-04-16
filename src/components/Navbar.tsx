import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartCount: number;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Главная' },
  { id: 'catalog', label: 'Каталог' },
  { id: 'about', label: 'О магазине' },
  { id: 'blog', label: 'Блог' },
  { id: 'contacts', label: 'Контакты' },
];

export default function Navbar({ currentPage, onNavigate, cartCount }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate('home')}
            className="font-display text-2xl font-bold text-white tracking-wider"
          >
            БУК<span className="text-brand-orange">ВА</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`nav-link font-body text-sm font-medium transition-colors ${
                  currentPage === item.id ? 'text-brand-orange active' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('cart')}
              className="relative p-2 text-white/80 hover:text-white transition-colors"
            >
              <Icon name="ShoppingBag" size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-orange text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 text-white/80 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Icon name={mobileOpen ? 'X' : 'Menu'} size={22} />
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-brand-dark border-t border-white/10 px-4 py-4 flex flex-col gap-4 animate-fade-in">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setMobileOpen(false); }}
              className={`text-left font-body text-base font-medium py-2 transition-colors ${
                currentPage === item.id ? 'text-brand-orange' : 'text-white/80'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { onNavigate('cart'); setMobileOpen(false); }}
            className="text-left font-body text-base font-medium py-2 text-white/80"
          >
            Корзина {cartCount > 0 && `(${cartCount})`}
          </button>
        </div>
      )}
    </nav>
  );
}
