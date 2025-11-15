import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>Carre Caffe | Русская кухня в Манавгате, Турция</title>
        <meta
          name="description"
          content="Настоящий борщ, пельмени, блины. Уютная атмосфера. Игра в Мафию по субботам."
        />
        <meta property="og:title" content="Carre Caffe — Русская кухня в Манавгате" />
        <meta
          property="og:description"
          content="Борщ, пельмени, блины и домашняя атмосфера. Вечера Мафии каждую субботу."
        />
        <meta property="og:image" content="https://images.unsplash.com/photo-1517248135467-2c7ed3ed3b5a" />
      </Head>
      <body className="bg-cream text-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
