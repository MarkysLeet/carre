# Carre Caffe — сайт кафе русской кухни

Полностью готовый к деплою на Vercel проект на Next.js для кафе Carre Caffe в Манавгате.

## Стек
- Next.js (router через `pages/`)
- React 18
- Tailwind CSS
- Framer Motion

## Скрипты
```bash
npm install
npm run dev    # запуск локально на http://localhost:3000
npm run build  # production-сборка
npm start      # запуск production-сборки
```

## Структура
- `pages/` — маршруты (Главная, Меню, О нас, Активности)
- `components/` — UI-компоненты: Navbar, Hero, карточки блюд и активностей и т.д.
- `styles/globals.css` — глобальные стили и подключение Tailwind CSS.

## Деплой
Проект оптимизирован под деплой на [Vercel](https://vercel.com/). Добавьте переменные окружения и кастомные домены при необходимости и выполните `vercel deploy`.
