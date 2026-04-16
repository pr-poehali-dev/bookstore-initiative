export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  price: number;
  oldPrice?: number;
  cover: string;
  rating: number;
  badge?: string;
}

export const GENRES = ['Все', 'Роман', 'Детектив', 'Фантастика', 'Поэзия', 'Психология', 'История', 'Детская'];

export const BOOKS: Book[] = [
  { id: 1, title: 'Мастер и Маргарита', author: 'Михаил Булгаков', genre: 'Роман', price: 590, oldPrice: 890, cover: 'bg-gradient-to-br from-purple-600 to-red-500', rating: 5, badge: 'Хит' },
  { id: 2, title: 'Дюна', author: 'Фрэнк Герберт', genre: 'Фантастика', price: 780, cover: 'bg-gradient-to-br from-amber-400 to-orange-600', rating: 5, badge: 'Бестселлер' },
  { id: 3, title: 'Преступление и наказание', author: 'Фёдор Достоевский', genre: 'Роман', price: 450, cover: 'bg-gradient-to-br from-slate-700 to-slate-900', rating: 4 },
  { id: 4, title: 'Шерлок Холмс', author: 'Артур Конан Дойл', genre: 'Детектив', price: 620, oldPrice: 750, cover: 'bg-gradient-to-br from-green-600 to-teal-700', rating: 5, badge: 'Скидка' },
  { id: 5, title: 'Атомные привычки', author: 'Джеймс Клир', genre: 'Психология', price: 890, cover: 'bg-gradient-to-br from-sky-500 to-blue-700', rating: 5, badge: 'Новинка' },
  { id: 6, title: '1984', author: 'Джордж Оруэлл', genre: 'Фантастика', price: 520, cover: 'bg-gradient-to-br from-zinc-600 to-zinc-900', rating: 4 },
  { id: 7, title: 'Стихи о прекрасной даме', author: 'Александр Блок', genre: 'Поэзия', price: 380, cover: 'bg-gradient-to-br from-rose-400 to-pink-600', rating: 4 },
  { id: 8, title: 'Сапиенс', author: 'Юваль Харари', genre: 'История', price: 960, oldPrice: 1100, cover: 'bg-gradient-to-br from-yellow-400 to-amber-600', rating: 5, badge: 'Хит' },
];

export const BLOG_POSTS = [
  { id: 1, title: '10 книг, которые изменят ваш взгляд на мир', date: '12 апреля 2026', category: 'Подборки', readTime: '5 мин', color: 'bg-brand-orange' },
  { id: 2, title: 'Почему детективы помогают развить логику', date: '8 апреля 2026', category: 'Интересное', readTime: '3 мин', color: 'bg-brand-blue' },
  { id: 3, title: 'Как читать 50 книг в год: личный опыт', date: '1 апреля 2026', category: 'Советы', readTime: '7 мин', color: 'bg-brand-pink' },
];
