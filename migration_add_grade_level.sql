-- ================================================================================
-- DYB최선 문법연구소 × 정상어학원 데이터베이스 마이그레이션
-- 작성일: 2025-08-24
-- 목적: 급수(grade_level) 필드 추가 및 기존 데이터 업데이트
-- ================================================================================

-- --------------------------------------------------------------------------------
-- 1. 테이블 구조 업데이트
-- --------------------------------------------------------------------------------

-- kmong_11_test_results 테이블에 grade_level 컬럼 추가
ALTER TABLE kmong_11_test_results 
ADD COLUMN IF NOT EXISTS grade_level VARCHAR(10);

-- kmong_11_consultations 테이블에 grade_level 컬럼 추가
ALTER TABLE kmong_11_consultations 
ADD COLUMN IF NOT EXISTS grade_level VARCHAR(10);

-- --------------------------------------------------------------------------------
-- 2. 기존 데이터 마이그레이션
-- --------------------------------------------------------------------------------

-- level 필드가 "급수 - 레벨" 형태인 경우 급수 부분만 추출
-- 예: "3급 - Advanced" → "3급"
UPDATE kmong_11_test_results 
SET grade_level = SPLIT_PART(level, ' - ', 1)
WHERE grade_level IS NULL 
  AND level LIKE '%급%';

UPDATE kmong_11_consultations 
SET grade_level = SPLIT_PART(level, ' - ', 1)
WHERE grade_level IS NULL 
  AND level LIKE '%급%';

-- --------------------------------------------------------------------------------
-- 3. 기본값 설정 (급수 정보가 없는 기존 데이터)
-- --------------------------------------------------------------------------------

-- level 필드가 "Advanced", "Intermediate" 등으로만 되어있는 경우 7급으로 설정
UPDATE kmong_11_test_results 
SET grade_level = '7급'
WHERE grade_level IS NULL;

UPDATE kmong_11_consultations 
SET grade_level = '7급'  
WHERE grade_level IS NULL;

-- --------------------------------------------------------------------------------
-- 4. 데이터 검증 쿼리 (실행 후 확인용)
-- --------------------------------------------------------------------------------

-- 업데이트 결과 확인
SELECT 
  'test_results' as table_name,
  COUNT(*) as total_records,
  COUNT(grade_level) as records_with_grade_level,
  COUNT(DISTINCT grade_level) as unique_grade_levels
FROM kmong_11_test_results

UNION ALL

SELECT 
  'consultations' as table_name,
  COUNT(*) as total_records,
  COUNT(grade_level) as records_with_grade_level,
  COUNT(DISTINCT grade_level) as unique_grade_levels
FROM kmong_11_consultations;

-- 급수별 분포 확인
SELECT 
  grade_level,
  COUNT(*) as count
FROM kmong_11_test_results
WHERE grade_level IS NOT NULL
GROUP BY grade_level
ORDER BY grade_level;

-- 최근 데이터 샘플 확인 (상위 10개)
SELECT 
  id,
  name,
  grade,
  level,
  grade_level,
  created_at
FROM kmong_11_test_results
ORDER BY created_at DESC
LIMIT 10;