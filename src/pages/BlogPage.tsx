import { BLOG_POSTS } from '@/data/books';
import Icon from '@/components/ui/icon';

const EXTRA_POSTS = [
  { id: 4, title: 'Топ-5 книг по психологии 2026 года', date: '25 марта 2026', category: 'Подборки', readTime: '4 мин', color: 'bg-gradient-to-br from-violet-500 to-purple-700' },
  { id: 5, title: 'Классика vs современность: что читать молодёжи', date: '18 марта 2026', category: 'Обсуждения', readTime: '6 мин', color: 'bg-gradient-to-br from-emerald-400 to-teal-600' },
  { id: 6, title: 'Как выбрать книгу в подарок: полный гид', date: '10 марта 2026', category: 'Советы', readTime: '5 мин', color: 'bg-gradient-to-br from-amber-400 to-yellow-600' },
];

const ALL_POSTS = [...BLOG_POSTS.map(p => ({ ...p, color: p.color + ' text-white' })), ...EXTRA_POSTS];

export default function BlogPage() {
  const [featured, ...rest] = ALL_POSTS;

  return (
    <div className="min-h-screen">
      <section className="bg-brand-dark py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 60%, rgba(26,43,255,0.2) 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="font-body text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">Читайте</p>
          <h1 className="font-display text-6xl font-bold text-white mb-4">Наш блог</h1>
          <p className="font-body text-white/60 text-lg">Подборки, советы и разговоры о книгах</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured post */}
        <article className="mb-12 bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer group animate-fade-in">
          <div className={`${featured.color} h-64 sm:h-80 flex items-end p-8`}>
            <div>
              <span className="font-body text-xs font-bold text-white/80 uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
                {featured.category}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 max-w-xl group-hover:underline">
                {featured.title}
              </h2>
            </div>
          </div>
          <div className="p-8 flex items-center justify-between">
            <div className="flex items-center gap-4 text-muted-foreground text-sm font-body">
              <span>{featured.date}</span>
              <span>·</span>
              <span>{featured.readTime} чтения</span>
            </div>
            <button className="flex items-center gap-2 font-body text-sm font-semibold text-brand-orange hover:underline">
              Читать <Icon name="ArrowRight" size={16} />
            </button>
          </div>
        </article>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-md transition-shadow cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`${post.color} h-40 flex items-end p-5`}>
                <span className="font-body text-xs font-bold text-white/80 uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors leading-snug">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="text-muted-foreground text-xs font-body">
                    {post.date} · {post.readTime}
                  </div>
                  <Icon name="ArrowRight" size={16} className="text-brand-orange" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-brand-dark rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(255,92,26,0.15) 0%, transparent 70%)' }} />
          <div className="relative z-10">
            <h2 className="font-display text-4xl font-bold text-white mb-3">Не пропускайте новые статьи</h2>
            <p className="font-body text-white/60 mb-8">Подпишитесь на рассылку и получайте подборки каждую неделю</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 font-body rounded-xl px-5 py-3 focus:outline-none focus:border-brand-orange"
              />
              <button className="bg-brand-orange hover:bg-orange-600 text-white font-body font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-brand-dark border-t border-white/10 py-8 px-4 text-center mt-8">
        <p className="font-body text-white/40 text-sm">© 2026 БУКВА — книжный магазин. Все права защищены.</p>
      </footer>
    </div>
  );
}
