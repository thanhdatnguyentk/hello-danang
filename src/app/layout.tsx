import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vietnam Terrain — Khám phá Việt Nam từ một góc nhìn khác',
  description:
    'Nền tảng khám phá địa hình 3D tương tác về cảnh quan, núi rừng, bờ biển và kỳ quan thiên nhiên Việt Nam.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased select-none overflow-hidden">
        {children}
      </body>
    </html>
  );
}
