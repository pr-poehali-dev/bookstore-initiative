import { Book } from '@/data/books';
import Icon from '@/components/ui/icon';

interface CartItem extends Book {
  qty: number;
}

interface CartPageProps {
  items: CartItem[];
  onUpdateQty: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
  onNavigate: (page: string) => void;
}

export default function CartPage({ items, onUpdateQty, onRemove, onNavigate }: CartPageProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen">
      <section className="bg-brand-dark py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">Покупки</p>
          <h1 className="font-display text-5xl font-bold text-white">Корзина</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {items.length === 0 ? (
          <div className="text-center py-24 animate-fade-in">
            <div className="text-8xl mb-6">🛒</div>
            <h2 className="font-display text-3xl font-bold text-brand-dark mb-3">Корзина пуста</h2>
            <p className="font-body text-muted-foreground mb-8">Самое время найти что-нибудь интересное!</p>
            <button
              onClick={() => onNavigate('catalog')}
              className="bg-brand-orange hover:bg-orange-600 text-white font-body font-semibold px-8 py-4 rounded-2xl transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              Перейти в каталог <Icon name="ArrowRight" size={18} />
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map(item => (
                <div key={item.id} className="bg-white rounded-2xl p-5 border border-border flex gap-4 items-center animate-fade-in">
                  <div className={`${item.cover} w-16 h-20 rounded-xl shrink-0 flex items-end p-2`}>
                    <span className="text-white font-display text-xs font-bold line-clamp-2 leading-tight">{item.title}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-semibold text-brand-dark truncate">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{item.author}</p>
                    <p className="font-body font-bold text-brand-orange mt-1">{item.price} ₽</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => onUpdateQty(item.id, -1)}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-brand-orange transition-colors"
                    >
                      <Icon name="Minus" size={14} />
                    </button>
                    <span className="font-body font-bold text-brand-dark w-5 text-center">{item.qty}</span>
                    <button
                      onClick={() => onUpdateQty(item.id, 1)}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-brand-orange transition-colors"
                    >
                      <Icon name="Plus" size={14} />
                    </button>
                    <button onClick={() => onRemove(item.id)} className="ml-2 text-muted-foreground hover:text-red-500 transition-colors">
                      <Icon name="Trash2" size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div>
              <div className="bg-white rounded-2xl border border-border p-6 sticky top-24">
                <h3 className="font-display text-xl font-bold text-brand-dark mb-5">Итого</h3>
                <div className="space-y-3 mb-5">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between font-body text-sm">
                      <span className="text-muted-foreground truncate max-w-[60%]">{item.title} ×{item.qty}</span>
                      <span className="font-medium text-brand-dark">{item.price * item.qty} ₽</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between font-body font-bold text-lg">
                    <span>Сумма</span>
                    <span className="text-brand-orange">{total} ₽</span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground mt-1">Доставка рассчитывается при оформлении</p>
                </div>
                <button className="w-full bg-brand-orange hover:bg-orange-600 text-white font-body font-bold py-4 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                  Оформить заказ <Icon name="ArrowRight" size={18} />
                </button>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="w-full mt-3 text-brand-orange font-body text-sm font-medium py-2 hover:underline"
                >
                  Продолжить покупки
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="bg-brand-dark border-t border-white/10 py-8 px-4 text-center mt-8">
        <p className="font-body text-white/40 text-sm">© 2026 БУКВА — книжный магазин. Все права защищены.</p>
      </footer>
    </div>
  );
}
