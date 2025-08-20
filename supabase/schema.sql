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
  preferred_date DATE,
  message TEXT,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- 인덱스 생성
CREATE INDEX idx_kmong_11_test_results_created_at ON kmong_11_test_results(created_at DESC);
CREATE INDEX idx_kmong_11_consultations_created_at ON kmong_11_consultations(created_at DESC);
CREATE INDEX idx_kmong_11_consultations_status ON kmong_11_consultations(status);