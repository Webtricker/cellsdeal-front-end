import { Inter } from 'next/font/google';
import './globals.css';
import ReduxProvider from '@/provider/reduxProvider';
import { ThemeProvider } from '@/provider/ThemeProvider';
import { Button } from '@/components/ui/button';

export const revalidate = 240;

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`wt_fs-base z-0 ${inter.className} ${inter.variable} antialiased`}>
        <ThemeProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </ThemeProvider>
        <div className='grid min-h-screen place-items-center'>
          <Button size={'lg'}>Content Button</Button>
        </div>
      </body>
    </html>
  );
}
