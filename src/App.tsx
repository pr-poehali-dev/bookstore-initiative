import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Book } from '@/data/books';
import Navbar from '@/components/Navbar';
import HomePage from '@/pages/HomePage';
import CatalogPage from '@/pages/CatalogPage';
import AboutPage from '@/pages/AboutPage';
import BlogPage from '@/pages/BlogPage';
import ContactsPage from '@/pages/ContactsPage';
import CartPage from '@/pages/CartPage';

interface CartItem extends Book {
  qty: number;
}

export default function App() {
  const [page, setPage] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (book: Book) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === book.id);
      if (existing) return prev.map(i => i.id === book.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...book, qty: 1 }];
    });
  };

  const updateQty = (id: number, delta: number) => {
    setCart(prev => prev
      .map(i => i.id === id ? { ...i, qty: i.qty + delta } : i)
      .filter(i => i.qty > 0)
    );
  };

  const removeItem = (id: number) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen bg-background">
        <Navbar currentPage={page} onNavigate={setPage} cartCount={cartCount} />
        {page === 'home' && <HomePage onNavigate={setPage} onAddToCart={addToCart} />}
        {page === 'catalog' && <CatalogPage onAddToCart={addToCart} />}
        {page === 'about' && <AboutPage onNavigate={setPage} />}
        {page === 'blog' && <BlogPage />}
        {page === 'contacts' && <ContactsPage />}
        {page === 'cart' && <CartPage items={cart} onUpdateQty={updateQty} onRemove={removeItem} onNavigate={setPage} />}
      </div>
    </TooltipProvider>
  );
}
