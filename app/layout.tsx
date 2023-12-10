import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './style/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Miryang | Frontend Engineer',
  description: 'miryang.dev, 프론트엔드 개발자의 블로그, Lazy Frontend Engineer who likes to travel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
