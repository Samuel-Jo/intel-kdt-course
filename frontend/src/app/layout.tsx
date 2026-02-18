import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Intel KDT AI Course Landing Page',
  description: 'AI 융합 솔루션 전문가 양성 과정 - 1인 창업가를 위한 실전 교육',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
