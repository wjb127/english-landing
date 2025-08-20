-- 샘플 테스트 결과 데이터
INSERT INTO kmong_11_test_results (name, grade, phone, parent_phone, test_answers, level, score, created_at) VALUES
('김민준', '중1', '010-1234-5678', '010-8765-4321', '["1", "1", "1", "1", "2"]', 'Advanced', 80, NOW() - INTERVAL '1 day'),
('이서연', '초6', '010-2345-6789', '010-9876-5432', '["1", "0", "1", "2", "1"]', 'Intermediate', 60, NOW() - INTERVAL '2 days'),
('박지호', '중2', '010-3456-7890', NULL, '["0", "1", "1", "1", "2"]', 'Intermediate', 60, NOW() - INTERVAL '3 days'),
('정하은', '초5', '010-4567-8901', '010-5678-9012', '["0", "0", "1", "0", "1"]', 'Pre-Intermediate', 40, NOW() - INTERVAL '4 days'),
('최유진', '중1', '010-5678-9012', '010-6789-0123', '["1", "1", "1", "1", "1"]', 'Advanced', 80, NOW() - INTERVAL '5 days'),
('강민서', '초6', '010-6789-0123', NULL, '["0", "0", "0", "1", "0"]', 'Beginner', 20, NOW() - INTERVAL '6 days'),
('윤서준', '중3', '010-7890-1234', '010-8901-2345', '["1", "1", "2", "1", "2"]', 'Advanced', 100, NOW()),
('임채원', '초5', '010-8901-2345', '010-9012-3456', '["1", "0", "0", "0", "1"]', 'Pre-Intermediate', 40, NOW()),
('조은비', '중2', '010-9012-3456', NULL, '["1", "1", "0", "1", "2"]', 'Intermediate', 60, NOW()),
('남도윤', '중1', '010-0123-4567', '010-1234-5678', '["0", "0", "0", "0", "0"]', 'Beginner', 0, NOW() - INTERVAL '7 days');

-- 샘플 상담 예약 데이터
INSERT INTO kmong_11_consultations (name, grade, phone, parent_phone, level, preferred_date, message, status, created_at) VALUES
('김민준', '중1', '010-1234-5678', '010-8765-4321', 'Advanced', '2024-08-28', '평일 오후 시간대 희망합니다', 'pending', NOW() - INTERVAL '1 day'),
('이서연', '초6', '010-2345-6789', '010-9876-5432', 'Intermediate', '2024-08-29', '주말 상담 가능한가요?', 'confirmed', NOW() - INTERVAL '2 days'),
('박지호', '중2', '010-3456-7890', NULL, 'Intermediate', '2024-08-30', NULL, 'pending', NOW() - INTERVAL '3 days'),
('정하은', '초5', '010-4567-8901', '010-5678-9012', 'Pre-Intermediate', '2024-08-31', '개인 맞춤 커리큘럼 상담 희망', 'confirmed', NOW() - INTERVAL '4 days'),
('최유진', '중1', '010-5678-9012', '010-6789-0123', 'Advanced', '2024-09-01', '고급반 수업 일정 문의', 'pending', NOW()),
('윤서준', '중3', '010-7890-1234', '010-8901-2345', 'Advanced', '2024-09-02', '수능 대비 특별반 문의', 'pending', NOW()),
('임채원', '초5', '010-8901-2345', '010-9012-3456', 'Pre-Intermediate', '2024-09-03', '기초반부터 시작하고 싶습니다', 'confirmed', NOW() - INTERVAL '5 days'),
('조은비', '중2', '010-9012-3456', NULL, 'Intermediate', '2024-09-04', '내신 대비 프로그램 문의', 'pending', NOW());

-- 통계 확인 쿼리 (테스트용)
SELECT 
  (SELECT COUNT(*) FROM kmong_11_test_results) as total_tests,
  (SELECT COUNT(*) FROM kmong_11_consultations) as total_consultations,
  (SELECT COUNT(*) FROM kmong_11_test_results WHERE DATE(created_at) = CURRENT_DATE) as today_tests,
  (SELECT COUNT(*) FROM kmong_11_consultations WHERE status = 'pending') as pending_consultations;