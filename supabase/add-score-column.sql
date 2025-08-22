-- kmong_11_consultations 테이블에 score 컬럼 추가
ALTER TABLE kmong_11_consultations 
ADD COLUMN IF NOT EXISTS score INTEGER;

-- 기존 데이터에 기본값 설정 (선택사항)
-- UPDATE kmong_11_consultations SET score = 0 WHERE score IS NULL;