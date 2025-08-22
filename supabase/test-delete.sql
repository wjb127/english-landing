-- DELETE API가 실행하는 SQL 쿼리 예시
-- id가 특정 값인 레코드를 삭제

DELETE FROM kmong_11_consultations 
WHERE id = 1;

-- 또는 service role을 사용할 때는 RLS를 우회하므로
-- 아래와 같이 직접 삭제 가능
DELETE FROM kmong_11_consultations 
WHERE id = ?;  -- ?는 실제 id 값으로 대체됨