-- ================================================================================
-- 기존 데이터 급수 추정 업데이트 (선택 사항)
-- 작성일: 2025-08-24
-- 주의: 이 쿼리는 학년 정보를 기반으로 급수를 추정합니다.
-- ================================================================================

-- 옵션 1: 학년 정보를 기반으로 급수 추정 (권장하지 않음 - 정확하지 않을 수 있음)
-- UPDATE kmong_11_test_results 
-- SET grade_level = 
--   CASE 
--     WHEN grade LIKE '%초5%' OR grade LIKE '%초등5%' OR grade = '5' THEN '7급'
--     WHEN grade LIKE '%초6%' OR grade LIKE '%초등6%' OR grade = '6' THEN '6급'
--     WHEN grade LIKE '%중1%' OR grade = '7' THEN '5급'
--     WHEN grade LIKE '%중2%' OR grade = '8' THEN '4급'
--     WHEN grade LIKE '%중3%' OR grade = '9' THEN '2급'
--     WHEN grade LIKE '%고%' OR grade = '10' OR grade = '11' OR grade = '12' THEN '1급'
--     ELSE '7급'
--   END
-- WHERE created_at < '2025-08-24'
--   AND (grade_level IS NULL OR grade_level = '7급');

-- 옵션 2: 기존 데이터는 '미분류'로 표시 (권장)
UPDATE kmong_11_test_results 
SET grade_level = '미분류'
WHERE created_at < '2025-08-24'
  AND grade_level = '7급';

UPDATE kmong_11_consultations 
SET grade_level = '미분류'
WHERE created_at < '2025-08-24'
  AND grade_level = '7급';

-- 데이터 확인
SELECT 
  grade_level,
  COUNT(*) as count,
  MIN(created_at) as earliest,
  MAX(created_at) as latest
FROM kmong_11_test_results
GROUP BY grade_level
ORDER BY grade_level;