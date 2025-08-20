# 정상어학원 문법센터 랜딩페이지

30년 전통 정상어학원의 문법센터 오픈을 위한 랜딩페이지입니다.

## 기술 스택

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Supabase
- **Deployment**: Vercel

## 주요 기능

- 무료 레벨 테스트
- 상담 예약 시스템
- 학생 정보 데이터베이스 수집
- 반응형 디자인

## 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일을 생성하고 Supabase 설정을 추가합니다:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속합니다.

## Supabase 데이터베이스 설정

`supabase/schema.sql` 파일의 SQL을 Supabase SQL Editor에서 실행하여 필요한 테이블을 생성합니다.

## 배포

Vercel에 연결하여 자동 배포가 가능합니다.

```bash
npm run build
```