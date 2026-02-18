import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Intel KDT AI Course - AI 융합 솔루션 전문가 양성 과정',
    template: '%s | Intel KDT AI Course',
  },
  description: '인텔이 인증하는 100% 무료 국비지원 교육. 비전공자도 가능한 실전 AI 프로젝트 과정.',
  keywords: ['AI 교육', '국비지원', '인텔', '코딩 교육', '창업', 'Next.js', 'Supabase'],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: 'Intel KDT AI Course',
    title: 'Intel KDT AI Course - AI 융합 솔루션 전문가 양성 과정',
    description: '인텔이 인증하는 100% 무료 국비지원 교육. 비전공자도 가능한 실전 AI 프로젝트 과정.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
