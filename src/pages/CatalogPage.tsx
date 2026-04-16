import { useState, useMemo, useEffect } from 'react';
import { Book, GENRES } from '@/data/books';
import BookCard from '@/components/BookCard';
import Icon from '@/components/ui/icon';
import func2url from '../../backend/func2url.json';

interface CatalogPageProps {
  onAddToCart: (book: Book) => void;
  onOpenModal: (book: Book) => void;
}

export default function CatalogPage({ onAddToCart, onOpenModal }: CatalogPageProps) {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeGenre, setActiveGenre] = useState('Все');
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    setLoading(true);
    fetch(func2url.books)
      .then(r => r.json())
      .then(data => {
        const mapped = data.books.map((b: Record<string, unknown>) => ({
          ...b,
          oldPrice: b.old_price,
        }));
        setBooks(mapped);
      })
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    let result = books.filter(book => {
      const q = search.toLowerCase();
      const matchSearch = !q || book.title.toLowerCase().includes(q) || book.author.toLowerCase().includes(q) || (book.genre ?? '').toLowerCase().includes(q);
      const matchGenre = activeGenre === 'Все' || book.genre === activeGenre;
      return matchSearch && matchGenre;
    });

    if (sortBy === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
  }, [books, search, activeGenre, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-brand-dark py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">Магазин</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-8">Каталог книг</h1>

          <div className="relative max-w-xl">
            <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Поиск по названию, автору или жанру..."
              className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 font-body rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-brand-orange transition-colors"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white">
                <Icon name="X" size={18} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {GENRES.map(genre => (
              <button
                key={genre}
                onClick={() => setActiveGenre(genre)}
                className={`font-body text-sm font-medium px-4 py-2 rounded-full transition-all ${
                  activeGenre === genre
                    ? 'bg-brand-orange text-white'
                    : 'bg-white border border-border text-muted-foreground hover:border-brand-orange hover:text-brand-dark'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="font-body text-sm border border-border rounded-xl px-4 py-2 bg-white focus:outline-none focus:border-brand-orange cursor-pointer"
          >
            <option value="default">По умолчанию</option>
            <option value="price-asc">Сначала дешевле</option>
            <option value="price-desc">Сначала дороже</option>
            <option value="rating">По рейтингу</option>
          </select>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-border animate-pulse">
                <div className="h-52 bg-gray-200" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                  <div className="h-6 bg-gray-200 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Results */}
        {!loading && (
          <>
            <p className="font-body text-muted-foreground text-sm mb-6">
              {filtered.length === 0 ? 'Ничего не найдено' : `Найдено ${filtered.length} книг`}
              {search && <span className="text-brand-dark font-medium"> по запросу «{search}»</span>}
            </p>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filtered.map((book, i) => (
                  <div key={book.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                    <BookCard book={book} onAddToCart={onAddToCart} onOpenModal={onOpenModal} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="font-display text-2xl font-semibold text-brand-dark mb-2">Книги не найдены</h3>
                <p className="font-body text-muted-foreground">Попробуйте изменить запрос или выбрать другой жанр</p>
                <button onClick={() => { setSearch(''); setActiveGenre('Все'); }} className="mt-6 bg-brand-orange text-white font-body font-semibold px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors">
                  Сбросить фильтры
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
