-- 중복 데이터 삭제 쿼리

-- 테스트 결과에서 중복 삭제 (최신 것만 남기고 삭제)
DELETE FROM kmong_11_test_results
WHERE id NOT IN (
    SELECT MIN(id)
    FROM kmong_11_test_results
    GROUP BY name, phone, grade
);

-- 상담 예약에서 중복 삭제 (최신 것만 남기고 삭제)
DELETE FROM kmong_11_consultations
WHERE id NOT IN (
    SELECT MIN(id)
    FROM kmong_11_consultations
    GROUP BY name, phone, grade
);

-- 또는 모든 데이터 삭제하고 다시 시작하려면:
-- TRUNCATE TABLE kmong_11_test_results RESTART IDENTITY CASCADE;
-- TRUNCATE TABLE kmong_11_consultations RESTART IDENTITY CASCADE;