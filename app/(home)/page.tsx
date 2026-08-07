import Link from 'next/link';
import { Boxes, CreditCard, KeyRound, LayoutDashboard, Languages, Terminal } from 'lucide-react';
import { appName } from '@/lib/shared';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Сайт и админка',
    text: 'Публичный сайт на Nuxt, отдельная админка и один NestJS-бэкенд под ними.',
  },
  {
    icon: Boxes,
    title: 'Магазин и донат',
    text: 'Товары, категории, серверы, корзина, донат-группы с правами и сроками.',
  },
  {
    icon: CreditCard,
    title: 'Платёжки',
    text: 'Пополнение баланса через агрегаторы, промокоды, история операций.',
  },
  {
    icon: Terminal,
    title: 'Выдача через RCON',
    text: 'Покупку можно доставить прямо в игру: очередь команд, ретраи, пресеты плагинов.',
  },
  {
    icon: KeyRound,
    title: 'Права и роли',
    text: 'Гибкие права до отдельной кнопки в админке, 2FA, интеграция с лаунчером.',
  },
  {
    icon: Languages,
    title: 'Языки',
    text: 'Интерфейс и контент переводятся из админки, без правок кода.',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center px-4 py-20">
      <div className="flex max-w-3xl flex-col items-center text-center">
        <span className="mb-6 rounded-full border border-fd-border px-3 py-1 text-xs text-fd-muted-foreground">
          Документация
        </span>
        <h1 className="mb-4 text-5xl font-bold tracking-tight">{appName}</h1>
        <p className="mb-8 text-lg text-fd-muted-foreground">
          Движок сайта для Minecraft-проекта: новости, магазин, донат, мониторинг серверов и
          админка, из которой всё это настраивается.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/docs/start"
            className="rounded-lg bg-fd-primary px-6 py-3 font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
          >
            Начать
          </Link>
          <Link
            href="/docs/admin"
            className="rounded-lg border border-fd-border px-6 py-3 font-medium transition-colors hover:bg-fd-accent"
          >
            Админу проекта
          </Link>
          <Link
            href="/docs/api"
            className="rounded-lg border border-fd-border px-6 py-3 font-medium transition-colors hover:bg-fd-accent"
          >
            API
          </Link>
        </div>
      </div>

      <div className="mt-20 grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-xl border border-fd-border bg-fd-card p-5 text-left transition-colors hover:bg-fd-accent/40"
          >
            <Icon className="mb-3 size-5 text-fd-primary" />
            <h2 className="mb-1 font-medium">{title}</h2>
            <p className="text-sm text-fd-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
