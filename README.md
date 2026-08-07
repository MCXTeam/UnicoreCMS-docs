# UnicoreCMS Docs

Документация UnicoreCMS. Собрана на [Fumadocs](https://fumadocs.dev) поверх Next.js, выгружается в статику.

## Запуск

```bash
pnpm install
pnpm dev
```

Откроется на http://localhost:3000.

## Сборка

```bash
pnpm build
```

Результат — статический сайт в `out/`. Можно отдавать любым веб-сервером.

Если сайт живёт не в корне домена (например, GitHub Pages по адресу `user.github.io/repo`), укажите префикс:

```bash
DOCS_BASE_PATH=/repo pnpm build
```

## Где что лежит

| Путь | Что там |
| --- | --- |
| `content/docs/` | Сами страницы в MDX |
| `content/docs/*/meta.json` | Разделы: заголовок, иконка, порядок страниц |
| `lib/shared.ts` | Название проекта, ссылки на репозитории |
| `app/global.css` | Палитра |
| `components/mdx.tsx` | Компоненты, доступные в MDX без импорта |

## Как добавить страницу

1. Создать `.mdx` в нужной папке `content/docs/`.
2. В начале файла — frontmatter:

```mdx
---
title: Заголовок
description: Одна строка о содержании
---
```

3. Добавить имя файла (без расширения) в `pages` соседнего `meta.json`.

Двоеточие в `description` нужно экранировать кавычками — иначе YAML не разберёт строку.

## Компоненты в MDX

Доступны без импорта: `Callout`, `Card`, `Cards`, `Tabs`/`Tab`, `Steps`/`Step`, `Files`/`Folder`/`File`, `Accordions`/`Accordion`, `TypeTable`.

Иконки из `lucide-react` импортируются в самом файле:

```mdx
import { Rocket } from 'lucide-react';

<Card title="Начало" icon={<Rocket />} href="/docs/start" />
```

## Разделы

- **Начало работы** — установка, `.env`, первый запуск, обновление
- **Админу проекта** — всё, что настраивается через панель
- **Разработчику** — устройство репозитория, сервер, фронты, база, сборка
- **Интеграции и API** — REST, ключи, лаунчер, плагин, платежи, вебсокеты
