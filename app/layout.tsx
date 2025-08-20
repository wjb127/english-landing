import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "정상어학원 문법센터 - 30년 전통의 체계적인 영어 문법 교육",
  description: "30년 경력 James.Yoo 원장이 직접 지도하는 문법센터. AI 진단 테스트로 정확한 레벨 측정 후 맞춤 교육 제공",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}