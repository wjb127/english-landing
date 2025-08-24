-- 테이블 구조 확인 쿼리

-- 1. kmong_11_test_results 테이블의 모든 컬럼 정보 확인
SELECT 
    column_name,
    data_type,
    character_maximum_length,
    is_nullable,
    column_default
FROM 
    information_schema.columns
WHERE 
    table_name = 'kmong_11_test_results'
ORDER BY 
    ordinal_position;

-- 2. kmong_11_consultations 테이블의 모든 컬럼 정보 확인
SELECT 
    column_name,
    data_type,
    character_maximum_length,
    is_nullable,
    column_default
FROM 
    information_schema.columns
WHERE 
    table_name = 'kmong_11_consultations'
ORDER BY 
    ordinal_position;

-- 3. grade_level 컬럼이 있는지 간단히 확인
SELECT 
    table_name,
    column_name,
    data_type,
    character_maximum_length
FROM 
    information_schema.columns
WHERE 
    table_name IN ('kmong_11_test_results', 'kmong_11_consultations')
    AND column_name = 'grade_level';

-- 4. 각 테이블의 grade_level 값 분포 확인 (데이터가 있는 경우)
SELECT 
    'kmong_11_test_results' as table_name,
    grade_level,
    COUNT(*) as count
FROM 
    kmong_11_test_results
GROUP BY 
    grade_level
UNION ALL
SELECT 
    'kmong_11_consultations' as table_name,
    grade_level,
    COUNT(*) as count
FROM 
    kmong_11_consultations
GROUP BY 
    grade_level
ORDER BY 
    table_name, grade_level;