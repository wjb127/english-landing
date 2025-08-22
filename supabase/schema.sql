-- 테스트 결과 테이블
CREATE TABLE kmong_11_test_results (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  grade VARCHAR(20) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  parent_phone VARCHAR(20),
  test_answers JSONB,
  level VARCHAR(50),
  score INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 상담 예약 테이블
CREATE TABLE kmong_11_consultations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  grade VARCHAR(20) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  parent_phone VARCHAR(20),
  level VARCHAR(50),
  score INTEGER,
  preferred_date DATE,
  message TEXT,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- 인덱스 생성
CREATE INDEX idx_kmong_11_test_results_created_at ON kmong_11_test_results(created_at DESC);
CREATE INDEX idx_kmong_11_consultations_created_at ON kmong_11_consultations(created_at DESC);
CREATE INDEX idx_kmong_11_consultations_status ON kmong_11_consultations(status);

-- RLS (Row Level Security) 정책 설정
ALTER TABLE kmong_11_test_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE kmong_11_consultations ENABLE ROW LEVEL SECURITY;

-- 테스트 결과 테이블 정책
-- 누구나 INSERT 가능 (테스트 제출)
CREATE POLICY "Anyone can insert test results" ON kmong_11_test_results
  FOR INSERT WITH CHECK (true);

-- 누구나 SELECT 가능 (임시로 공개 - 실제 운영시 인증 추가 필요)
CREATE POLICY "Anyone can select test results" ON kmong_11_test_results
  FOR SELECT USING (true);

-- 상담 예약 테이블 정책  
-- 누구나 INSERT 가능 (상담 신청)
CREATE POLICY "Anyone can insert consultations" ON kmong_11_consultations
  FOR INSERT WITH CHECK (true);

-- 누구나 SELECT 가능 (임시로 공개 - 실제 운영시 인증 추가 필요)
CREATE POLICY "Anyone can select consultations" ON kmong_11_consultations
  FOR SELECT USING (true);

-- 누구나 UPDATE 가능 (임시로 공개 - 실제 운영시 인증 추가 필요)
CREATE POLICY "Anyone can update consultations" ON kmong_11_consultations
  FOR UPDATE USING (true);