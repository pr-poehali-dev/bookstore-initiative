import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function ContactsPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen">
      <section className="bg-brand-dark py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 80% 40%, rgba(255,45,120,0.15) 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="font-body text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">Напишите нам</p>
          <h1 className="font-display text-6xl font-bold text-white mb-4">Контакты</h1>
          <p className="font-body text-white/60 text-lg">Мы отвечаем в течение 2 часов в рабочее время</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="font-display text-3xl font-bold text-brand-dark mb-8">Отправить сообщение</h2>

            {sent ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center animate-scale-in">
                <div className="text-5xl mb-4">📬</div>
                <h3 className="font-display text-2xl font-bold text-green-800 mb-2">Сообщение отправлено!</h3>
                <p className="font-body text-green-700">Мы свяжемся с вами в ближайшее время.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-brand-orange font-body font-semibold hover:underline">
                  Отправить ещё одно
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-body text-sm font-medium text-brand-dark block mb-2">Ваше имя</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="Иван Иванов"
                    className="w-full border border-border rounded-xl px-4 py-3 font-body focus:outline-none focus:border-brand-orange transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-brand-dark block mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                    placeholder="ivan@example.com"
                    className="w-full border border-border rounded-xl px-4 py-3 font-body focus:outline-none focus:border-brand-orange transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-brand-dark block mb-2">Сообщение</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="Ваш вопрос или пожелание..."
                    className="w-full border border-border rounded-xl px-4 py-3 font-body focus:outline-none focus:border-brand-orange transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-orange-600 text-white font-body font-semibold py-4 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Отправить <Icon name="Send" size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div>
            <h2 className="font-display text-3xl font-bold text-brand-dark mb-8">Наши контакты</h2>
            <div className="space-y-5 mb-10">
              {[
                { icon: 'MapPin', title: 'Адрес', value: 'Москва, ул. Арбат, 15, офис 301' },
                { icon: 'Phone', title: 'Телефон', value: '+7 (495) 123-45-67' },
                { icon: 'Mail', title: 'Email', value: 'hello@bukva-books.ru' },
                { icon: 'Clock', title: 'Режим работы', value: 'Пн–Пт: 9:00–19:00, Сб: 10:00–17:00' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border hover:shadow-sm transition-shadow">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name={item.icon} fallback="Info" size={20} className="text-brand-orange" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted-foreground font-medium uppercase tracking-wider">{item.title}</p>
                    <p className="font-body text-brand-dark font-medium mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <h3 className="font-display text-xl font-semibold text-brand-dark mb-4">Мы в соцсетях</h3>
            <div className="flex gap-3">
              {[
                { label: 'ВКонтакте', icon: 'MessageSquare', color: 'bg-blue-500' },
                { label: 'Telegram', icon: 'Send', color: 'bg-sky-500' },
                { label: 'Instagram', icon: 'Camera', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
              ].map((soc, i) => (
                <button key={i} className={`${soc.color} text-white font-body text-sm font-medium px-5 py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2`}>
                  <Icon name={soc.icon} fallback="Link" size={16} />
                  {soc.label}
                </button>
              ))}
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
