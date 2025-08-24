-- kmong_11_test_results 테이블에 grade_level 컬럼 추가
ALTER TABLE kmong_11_test_results 
ADD COLUMN IF NOT EXISTS grade_level VARCHAR(10);

-- kmong_11_consultations 테이블에 grade_level 컬럼 추가
ALTER TABLE kmong_11_consultations 
ADD COLUMN IF NOT EXISTS grade_level VARCHAR(10);

-- 기존 데이터에 기본값 설정 (선택사항 - 기존 데이터를 7급으로 설정)
UPDATE kmong_11_test_results SET grade_level = '7급' WHERE grade_level IS NULL;
UPDATE kmong_11_consultations SET grade_level = '7급' WHERE grade_level IS NULL;