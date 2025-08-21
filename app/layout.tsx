import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DYB최선 문법연구소 × 정상어학원 - 문법센터",
  description: "전 정상어학원 원장 James.Yoo와 DYB최선이 함께하는 새로운 문법교육 브랜드. AI 진단 테스트로 정확한 레벨 측정 후 맞춤 교육 제공",
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