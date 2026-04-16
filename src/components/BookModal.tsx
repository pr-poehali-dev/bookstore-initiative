import { useEffect } from 'react';
import { Book } from '@/data/books';
import Icon from '@/components/ui/icon';

interface BookModalProps {
  book: Book | null;
  onClose: () => void;
  onAddToCart: (book: Book) => void;
}

export default function BookModal({ book, onClose, onAddToCart }: BookModalProps) {
  useEffect(() => {
    if (!book) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [book, onClose]);

  if (!book) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />

      {/* Modal */}
      <div
        className="relative bg-white w-full sm:max-w-2xl sm:rounded-3xl rounded-t-3xl overflow-hidden shadow-2xl animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        {/* Cover header */}
        <div className={`${book.cover} h-56 sm:h-64 flex items-end p-6 relative`}>
          {book.badge && (
            <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold font-body px-3 py-1 rounded-full border border-white/30">
              {book.badge}
            </span>
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <Icon name="X" size={18} />
          </button>

          <div className="text-white">
            <p className="font-body text-sm text-white/70 uppercase tracking-widest mb-1">{book.genre}</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">{book.title}</h2>
            <p className="font-body text-white/80 mt-1 text-lg">{book.author}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-5">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={16}
                  className={i < book.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}
                />
              ))}
            </div>
            <span className="font-body text-sm text-muted-foreground">{book.rating}.0 / 5</span>
          </div>

          {/* Description */}
          {book.description && (
            <p className="font-body text-brand-dark leading-relaxed mb-6">{book.description}</p>
          )}

          {/* Meta */}
          <div className="grid grid-cols-3 gap-3 mb-7">
            {book.year && (
              <div className="bg-secondary rounded-2xl p-4 text-center">
                <p className="font-body text-xs text-muted-foreground mb-1">Год</p>
                <p className="font-display text-lg font-bold text-brand-dark">{book.year}</p>
              </div>
            )}
            {book.pages && (
              <div className="bg-secondary rounded-2xl p-4 text-center">
                <p className="font-body text-xs text-muted-foreground mb-1">Страниц</p>
                <p className="font-display text-lg font-bold text-brand-dark">{book.pages}</p>
              </div>
            )}
            {book.publisher && (
              <div className="bg-secondary rounded-2xl p-4 text-center">
                <p className="font-body text-xs text-muted-foreground mb-1">Издатель</p>
                <p className="font-display text-lg font-bold text-brand-dark">{book.publisher}</p>
              </div>
            )}
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="font-display text-3xl font-bold text-brand-dark">{book.price} ₽</span>
              {book.oldPrice && (
                <span className="font-body text-base text-muted-foreground line-through ml-3">{book.oldPrice} ₽</span>
              )}
              {book.oldPrice && (
                <span className="ml-2 text-sm font-body font-bold text-green-600">
                  −{Math.round((1 - book.price / book.oldPrice) * 100)}%
                </span>
              )}
            </div>
            <button
              onClick={() => { onAddToCart(book); onClose(); }}
              className="bg-brand-orange hover:bg-orange-600 text-white font-body font-bold px-7 py-3.5 rounded-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 whitespace-nowrap"
            >
              <Icon name="ShoppingBag" size={18} />
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
