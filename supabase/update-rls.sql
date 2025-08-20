-- 기존 RLS 정책 삭제 (이미 있는 경우)
DROP POLICY IF EXISTS "Service role can select test results" ON kmong_11_test_results;
DROP POLICY IF EXISTS "Service role can select consultations" ON kmong_11_consultations;
DROP POLICY IF EXISTS "Service role can update consultations" ON kmong_11_consultations;
DROP POLICY IF EXISTS "Anyone can select test results" ON kmong_11_test_results;
DROP POLICY IF EXISTS "Anyone can select consultations" ON kmong_11_consultations;
DROP POLICY IF EXISTS "Anyone can update consultations" ON kmong_11_consultations;

-- 새로운 RLS 정책 생성 (임시로 모두 공개 - 실제 운영시 인증 추가 필요)
CREATE POLICY "Anyone can select test results" ON kmong_11_test_results
  FOR SELECT USING (true);

CREATE POLICY "Anyone can select consultations" ON kmong_11_consultations
  FOR SELECT USING (true);

CREATE POLICY "Anyone can update consultations" ON kmong_11_consultations
  FOR UPDATE USING (true);