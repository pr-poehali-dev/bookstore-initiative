import { Book, BOOKS, BLOG_POSTS } from '@/data/books';
import BookCard from '@/components/BookCard';
import Icon from '@/components/ui/icon';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onAddToCart: (book: Book) => void;
  onOpenModal: (book: Book) => void;
}

const MARQUEE_ITEMS = ['Новинки недели', 'Бестселлеры', 'Скидки до 40%', 'Быстрая доставка', 'Подарочные сертификаты', 'Клуб читателей'];

export default function HomePage({ onNavigate, onAddToCart, onOpenModal }: HomePageProps) {
  const featured = BOOKS.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-dark relative overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20"
          style={{ background: 'radial-gradient(ellipse at top right, #FF5C1A 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-15"
          style={{ background: 'radial-gradient(ellipse at bottom left, #1A2BFF 0%, transparent 60%)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 px-4 py-2 rounded-full text-sm font-body mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              Более 50 000 книг в наличии
            </div>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-none mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Читай.<br />
              <span className="text-gradient-orange">Живи.</span><br />
              Открывай.
            </h1>
            <p className="font-body text-lg text-white/70 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Книжный магазин с душой — находите книги, которые меняют жизнь
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={() => onNavigate('catalog')}
                className="bg-brand-orange hover:bg-orange-600 text-white font-body font-semibold px-8 py-4 rounded-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                Смотреть каталог <Icon name="ArrowRight" size={18} />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="border border-white/30 hover:border-white text-white font-body font-semibold px-8 py-4 rounded-2xl transition-all hover:bg-white/10"
              >
                О нас
              </button>
            </div>
          </div>
        </div>

        {/* Floating book spines decoration */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 animate-float">
          {['bg-purple-500', 'bg-amber-400', 'bg-sky-500', 'bg-rose-500', 'bg-emerald-500'].map((color, i) => (
            <div
              key={i}
              className={`${color} rounded-lg opacity-80`}
              style={{
                width: `${40 + i * 8}px`,
                height: '140px',
                transform: `rotate(${-5 + i * 3}deg)`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-brand-orange py-3 overflow-hidden">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="font-body font-semibold text-white text-sm px-8 flex items-center gap-3">
              {item} <span className="text-white/50">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Featured books */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-body text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">Рекомендуем</p>
            <h2 className="font-display text-5xl font-bold text-brand-dark">Хиты продаж</h2>
          </div>
          <button
            onClick={() => onNavigate('catalog')}
            className="hidden sm:flex items-center gap-2 font-body text-sm font-semibold text-brand-orange hover:underline"
          >
            Все книги <Icon name="ArrowRight" size={16} />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((book, i) => (
            <div key={book.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <BookCard book={book} onAddToCart={onAddToCart} onOpenModal={onOpenModal} />
            </div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="bg-brand-blue rounded-3xl p-10 sm:p-16 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute left-1/3 bottom-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2" />
          <div className="relative z-10">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
              Скидка 20%<br />на первый заказ
            </h2>
            <p className="font-body text-white/70 text-lg">При подписке на нашу рассылку</p>
          </div>
          <button
            onClick={() => onNavigate('contacts')}
            className="relative z-10 bg-white text-brand-blue font-body font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-transform flex items-center gap-2 whitespace-nowrap"
          >
            Получить скидку <Icon name="Zap" size={18} />
          </button>
        </div>
      </section>

      {/* Blog preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-body text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">Читайте</p>
            <h2 className="font-display text-5xl font-bold text-brand-dark">Наш блог</h2>
          </div>
          <button
            onClick={() => onNavigate('blog')}
            className="hidden sm:flex items-center gap-2 font-body text-sm font-semibold text-brand-orange hover:underline"
          >
            Все статьи <Icon name="ArrowRight" size={16} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow cursor-pointer animate-fade-in group"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`${post.color} h-36 flex items-end p-5`}>
                <span className="font-body text-xs font-bold text-white/80 uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors leading-snug">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-muted-foreground text-xs font-body">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} чтения</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-dark py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '50 000+', label: 'Книг в каталоге' },
            { num: '120 000+', label: 'Довольных читателей' },
            { num: '15 лет', label: 'На рынке' },
            { num: '4.9 ★', label: 'Средний рейтинг' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="font-display text-4xl font-bold text-brand-orange mb-2">{stat.num}</div>
              <div className="font-body text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark border-t border-white/10 py-8 px-4 text-center">
        <p className="font-body text-white/40 text-sm">© 2026 БУКВА — книжный магазин. Все права защищены.</p>
      </footer>
    </div>
  );
}