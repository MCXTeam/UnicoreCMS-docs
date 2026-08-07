import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import SearchDialog from '@/components/search';
import { appName, appTagline } from '@/lib/shared';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: {
    default: `${appName} — документация`,
    template: `%s · ${appName}`,
  },
  description: appTagline,
};

const translations = {
  search: 'Поиск',
  searchNoResult: 'Ничего не нашлось',
  toc: 'Содержание',
  tocNoHeadings: 'Заголовков нет',
  lastUpdate: 'Обновлено',
  chooseLanguage: 'Выбрать язык',
  nextPage: 'Дальше',
  previousPage: 'Назад',
  chooseTheme: 'Тема',
  editOnGithub: 'Открыть на GitHub',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ru" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ SearchDialog }} i18n={{ locale: 'ru', translations }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
