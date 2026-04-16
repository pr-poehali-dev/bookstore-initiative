import { Book } from '@/data/books';
import Icon from '@/components/ui/icon';

interface BookCardProps {
  book: Book;
  onAddToCart: (book: Book) => void;
}

export default function BookCard({ book, onAddToCart }: BookCardProps) {
  return (
    <div className="book-card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-border group cursor-pointer">
      <div className={`${book.cover} h-52 flex items-end p-4 relative`}>
        {book.badge && (
          <span className="absolute top-3 right-3 bg-brand-orange text-white text-xs font-bold font-body px-2 py-1 rounded-full">
            {book.badge}
          </span>
        )}
        <div className="text-white">
          <p className="font-display text-xl font-bold leading-tight line-clamp-2">{book.title}</p>
          <p className="font-body text-sm text-white/80 mt-1">{book.author}</p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={14}
              className={i < book.rating ? 'text-brand-yellow fill-brand-yellow' : 'text-gray-300'}
            />
          ))}
          <span className="text-xs text-muted-foreground font-body ml-1">{book.genre}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="font-body font-bold text-lg text-brand-dark">{book.price} ₽</span>
            {book.oldPrice && (
              <span className="font-body text-sm text-muted-foreground line-through ml-2">{book.oldPrice} ₽</span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(book)}
            className="w-9 h-9 bg-brand-orange hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          >
            <Icon name="Plus" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
