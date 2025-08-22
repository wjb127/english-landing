-- kmong_11_consultations 테이블에 DELETE 정책 추가
CREATE POLICY "Anyone can delete consultations" ON kmong_11_consultations
  FOR DELETE USING (true);