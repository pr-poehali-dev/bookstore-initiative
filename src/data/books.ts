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
  description?: string;
  year?: number;
  pages?: number;
  publisher?: string;
}

export const GENRES = ['Все', 'Роман', 'Детектив', 'Фантастика', 'Поэзия', 'Психология', 'История', 'Детская'];

export const BOOKS: Book[] = [
  { id: 1, title: 'Мастер и Маргарита', author: 'Михаил Булгаков', genre: 'Роман', price: 590, oldPrice: 890, cover: 'bg-gradient-to-br from-purple-600 to-red-500', rating: 5, badge: 'Хит', year: 1967, pages: 480, publisher: 'АСТ', description: 'Роман о добре и зле, о любви и предательстве. Дьявол приезжает в советскую Москву — и всё переворачивается с ног на голову. Одновременно разворачивается история Понтия Пилата и Иешуа. Один из величайших романов XX века.' },
  { id: 2, title: 'Дюна', author: 'Фрэнк Герберт', genre: 'Фантастика', price: 780, cover: 'bg-gradient-to-br from-amber-400 to-orange-600', rating: 5, badge: 'Бестселлер', year: 1965, pages: 688, publisher: 'АСТ', description: 'Эпическая сага о пустынной планете Арракис — единственном источнике самого ценного вещества во вселенной. История о власти, религии, экологии и человеческом духе. Библия научной фантастики.' },
  { id: 3, title: 'Преступление и наказание', author: 'Фёдор Достоевский', genre: 'Роман', price: 450, cover: 'bg-gradient-to-br from-slate-700 to-slate-900', rating: 4, year: 1866, pages: 592, publisher: 'Эксмо', description: 'Студент Раскольников совершает убийство и пытается оправдать его теорией о "необыкновенных людях". Психологический триллер о совести, вине и искуплении. Один из самых глубоких романов в мировой литературе.' },
  { id: 4, title: 'Шерлок Холмс', author: 'Артур Конан Дойл', genre: 'Детектив', price: 620, oldPrice: 750, cover: 'bg-gradient-to-br from-green-600 to-teal-700', rating: 5, badge: 'Скидка', year: 1892, pages: 512, publisher: 'Азбука', description: 'Полное собрание рассказов о великом сыщике с Бейкер-стрит. Дедукция, логика, необычные преступления и незабываемый дуэт Холмса и Ватсона. Классика детективного жанра на все времена.' },
  { id: 5, title: 'Атомные привычки', author: 'Джеймс Клир', genre: 'Психология', price: 890, cover: 'bg-gradient-to-br from-sky-500 to-blue-700', rating: 5, badge: 'Новинка', year: 2018, pages: 320, publisher: 'МИФ', description: 'Практическое руководство по формированию хороших привычек и избавлению от вредных. Автор объясняет, почему маленькие изменения дают огромные результаты. Более 10 миллионов проданных копий по всему миру.' },
  { id: 6, title: '1984', author: 'Джордж Оруэлл', genre: 'Фантастика', price: 520, cover: 'bg-gradient-to-br from-zinc-600 to-zinc-900', rating: 4, year: 1949, pages: 336, publisher: 'АСТ', description: 'Антиутопия о тоталитарном обществе, где Большой Брат следит за каждым. История Уинстона Смита, осмелившегося думать иначе. Роман-предупреждение, ставший пророческим для целых поколений.' },
  { id: 7, title: 'Стихи о прекрасной даме', author: 'Александр Блок', genre: 'Поэзия', price: 380, cover: 'bg-gradient-to-br from-rose-400 to-pink-600', rating: 4, year: 1904, pages: 192, publisher: 'Азбука', description: 'Первый сборник великого поэта Серебряного века. Стихи о любви, мечте и вечной женственности. Туманные образы, музыкальный ритм и особая петербургская атмосфера — поэзия, завораживающая с первой строки.' },
  { id: 8, title: 'Сапиенс', author: 'Юваль Харари', genre: 'История', price: 960, oldPrice: 1100, cover: 'bg-gradient-to-br from-yellow-400 to-amber-600', rating: 5, badge: 'Хит', year: 2011, pages: 512, publisher: 'Синдбад', description: 'Краткая история человечества от древних людей до наших дней. Почему Homo sapiens завоевал планету? Как появились деньги, религия и государства? Захватывающий взгляд на прошлое, настоящее и будущее нашего вида.' },
];

export const BLOG_POSTS = [
  { id: 1, title: '10 книг, которые изменят ваш взгляд на мир', date: '12 апреля 2026', category: 'Подборки', readTime: '5 мин', color: 'bg-brand-orange' },
  { id: 2, title: 'Почему детективы помогают развить логику', date: '8 апреля 2026', category: 'Интересное', readTime: '3 мин', color: 'bg-brand-blue' },
  { id: 3, title: 'Как читать 50 книг в год: личный опыт', date: '1 апреля 2026', category: 'Советы', readTime: '7 мин', color: 'bg-brand-pink' },
];