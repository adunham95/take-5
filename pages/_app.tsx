import { theme } from '@/theme/theme';
import type { AppProps } from 'next/app';
import { ThemeUIProvider } from 'theme-ui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeUIProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeUIProvider>
  );
}
