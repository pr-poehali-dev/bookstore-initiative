import Icon from '@/components/ui/icon';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const VALUES = [
  { icon: 'Heart', title: 'Любовь к книгам', desc: 'Каждый сотрудник — страстный читатель. Мы знаем каждую книгу изнутри.' },
  { icon: 'Zap', title: 'Быстрая доставка', desc: 'Доставляем в течение 1-3 дней по всей России. Бесплатно от 1500 ₽.' },
  { icon: 'Star', title: 'Качество', desc: 'Только официальные издания от проверенных издательств.' },
  { icon: 'Users', title: 'Сообщество', desc: 'Клуб читателей с живыми встречами, обсуждениями и книжными марафонами.' },
];

const TEAM = [
  { name: 'Анна Белова', role: 'Основатель', color: 'bg-gradient-to-br from-rose-400 to-pink-600' },
  { name: 'Дмитрий Иванов', role: 'Главный редактор', color: 'bg-gradient-to-br from-sky-400 to-blue-600' },
  { name: 'Ольга Смирнова', role: 'Куратор каталога', color: 'bg-gradient-to-br from-amber-400 to-orange-500' },
];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-dark py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(255,92,26,0.15) 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="font-body text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">О нас</p>
          <h1 className="font-display text-6xl sm:text-7xl font-bold text-white mb-6 max-w-2xl">
            Место, где<br />живут книги
          </h1>
          <p className="font-body text-white/70 text-xl max-w-xl leading-relaxed">
            БУКВА — это не просто магазин. Это сообщество людей, которые верят, что правильная книга может изменить всё.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-brand-orange font-semibold text-sm uppercase tracking-widest mb-4">Наша история</p>
            <h2 className="font-display text-4xl font-bold text-brand-dark mb-6">С 2011 года мы помогаем людям читать</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              БУКВА началась с маленького прилавка на книжном рынке. Наш основатель Анна верила, что хорошая книга должна быть доступна каждому.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Сегодня мы — один из крупнейших онлайн-магазинов страны. Более 50 000 наименований, собственный клуб читателей и команда из настоящих книголюбов.
            </p>
            <button
              onClick={() => onNavigate('contacts')}
              className="bg-brand-orange hover:bg-orange-600 text-white font-body font-semibold px-7 py-3 rounded-xl transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              Связаться с нами <Icon name="ArrowRight" size={16} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-brand-orange rounded-3xl p-8 text-white flex flex-col justify-between aspect-square">
              <Icon name="BookOpen" size={32} className="text-white/80" />
              <div>
                <div className="font-display text-4xl font-bold">50K+</div>
                <div className="font-body text-white/80 text-sm mt-1">книг в каталоге</div>
              </div>
            </div>
            <div className="bg-brand-blue rounded-3xl p-8 text-white flex flex-col justify-between aspect-square mt-8">
              <Icon name="Users" size={32} className="text-white/80" />
              <div>
                <div className="font-display text-4xl font-bold">120K</div>
                <div className="font-body text-white/80 text-sm mt-1">читателей</div>
              </div>
            </div>
            <div className="bg-brand-yellow rounded-3xl p-8 text-brand-dark flex flex-col justify-between aspect-square -mt-4">
              <Icon name="Award" size={32} className="text-brand-dark/70" />
              <div>
                <div className="font-display text-4xl font-bold">15</div>
                <div className="font-body text-brand-dark/70 text-sm mt-1">лет опыта</div>
              </div>
            </div>
            <div className="bg-brand-pink rounded-3xl p-8 text-white flex flex-col justify-between aspect-square mt-4">
              <Icon name="Star" size={32} className="text-white/80" />
              <div>
                <div className="font-display text-4xl font-bold">4.9</div>
                <div className="font-body text-white/80 text-sm mt-1">рейтинг</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2 text-center">Принципы</p>
          <h2 className="font-display text-4xl font-bold text-brand-dark mb-12 text-center">Почему выбирают нас</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-border hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-5">
                  <Icon name={val.icon} fallback="Star" size={24} className="text-brand-orange" />
                </div>
                <h3 className="font-display text-xl font-semibold text-brand-dark mb-2">{val.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <p className="font-body text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">Команда</p>
        <h2 className="font-display text-4xl font-bold text-brand-dark mb-12">Люди за БУКВОЙ</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {TEAM.map((member, i) => (
            <div key={i} className="text-center animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className={`${member.color} w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                <Icon name="User" size={40} className="text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-brand-dark">{member.name}</h3>
              <p className="font-body text-muted-foreground text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-brand-dark border-t border-white/10 py-8 px-4 text-center">
        <p className="font-body text-white/40 text-sm">© 2026 БУКВА — книжный магазин. Все права защищены.</p>
      </footer>
    </div>
  );
}