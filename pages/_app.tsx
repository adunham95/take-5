import { theme } from '@/theme/theme';
import type { AppProps } from 'next/app';
import { ThemeUIProvider } from 'theme-ui';
import { Roboto_Slab } from 'next/font/google';
const font = Roboto_Slab({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeUIProvider theme={theme}>
      <main className={font.className}>
        <Component {...pageProps} />
      </main>
    </ThemeUIProvider>
  );
}
