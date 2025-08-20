const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://bzzjkcrbwwrqlumxigag.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6emprY3Jid3dycWx1bXhpZ2FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MTM0OTUsImV4cCI6MjA0NDM4OTQ5NX0.yuQ9Ofc-s2sSHcRSU2_p9ZtcIL0yracXfVa48ZlmUNY'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function insertSampleData() {
  console.log('Inserting sample data...\n')
  
  // 샘플 테스트 결과 데이터
  const testResults = [
    {
      name: '김민준',
      grade: '중1',
      phone: '010-1234-5678',
      parent_phone: '010-8765-4321',
      test_answers: JSON.stringify(['1', '1', '1', '1', '2']),
      level: 'Advanced',
      score: 80
    },
    {
      name: '이서연',
      grade: '초6',
      phone: '010-2345-6789',
      parent_phone: '010-9876-5432',
      test_answers: JSON.stringify(['1', '0', '1', '2', '1']),
      level: 'Intermediate',
      score: 60
    },
    {
      name: '박지호',
      grade: '중2',
      phone: '010-3456-7890',
      parent_phone: null,
      test_answers: JSON.stringify(['0', '1', '1', '1', '2']),
      level: 'Intermediate',
      score: 60
    },
    {
      name: '정하은',
      grade: '초5',
      phone: '010-4567-8901',
      parent_phone: '010-5678-9012',
      test_answers: JSON.stringify(['0', '0', '1', '0', '1']),
      level: 'Pre-Intermediate',
      score: 40
    },
    {
      name: '최유진',
      grade: '중1',
      phone: '010-5678-9012',
      parent_phone: '010-6789-0123',
      test_answers: JSON.stringify(['1', '1', '1', '1', '1']),
      level: 'Advanced',
      score: 80
    }
  ]

  const { data: insertedTests, error: testError } = await supabase
    .from('kmong_11_test_results')
    .insert(testResults)
    .select()

  if (testError) {
    console.error('Error inserting test results:', testError)
  } else {
    console.log(`✅ Inserted ${insertedTests.length} test results`)
  }

  // 샘플 상담 예약 데이터
  const consultations = [
    {
      name: '김민준',
      grade: '중1',
      phone: '010-1234-5678',
      parent_phone: '010-8765-4321',
      level: 'Advanced',
      preferred_date: '2024-08-28',
      message: '평일 오후 시간대 희망합니다',
      status: 'pending'
    },
    {
      name: '이서연',
      grade: '초6',
      phone: '010-2345-6789',
      parent_phone: '010-9876-5432',
      level: 'Intermediate',
      preferred_date: '2024-08-29',
      message: '주말 상담 가능한가요?',
      status: 'confirmed'
    },
    {
      name: '박지호',
      grade: '중2',
      phone: '010-3456-7890',
      parent_phone: null,
      level: 'Intermediate',
      preferred_date: '2024-08-30',
      message: null,
      status: 'pending'
    },
    {
      name: '정하은',
      grade: '초5',
      phone: '010-4567-8901',
      parent_phone: '010-5678-9012',
      level: 'Pre-Intermediate',
      preferred_date: '2024-08-31',
      message: '개인 맞춤 커리큘럼 상담 희망',
      status: 'confirmed'
    }
  ]

  const { data: insertedConsultations, error: consultError } = await supabase
    .from('kmong_11_consultations')
    .insert(consultations)
    .select()

  if (consultError) {
    console.error('Error inserting consultations:', consultError)
  } else {
    console.log(`✅ Inserted ${insertedConsultations.length} consultations`)
  }

  console.log('\n✅ Sample data insertion completed!')
}

insertSampleData().catch(console.error)