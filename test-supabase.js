const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://bzzjkcrbwwrqlumxigag.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6emprY3Jid3dycWx1bXhpZ2FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MTM0OTUsImV4cCI6MjA0NDM4OTQ5NX0.yuQ9Ofc-s2sSHcRSU2_p9ZtcIL0yracXfVa48ZlmUNY'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testDatabase() {
  console.log('Testing Supabase connection...\n')
  
  // 테이블 존재 확인
  console.log('1. Checking if tables exist...')
  const { data: tables, error: tablesError } = await supabase
    .from('kmong_11_test_results')
    .select('*')
    .limit(1)
  
  if (tablesError) {
    console.error('Error accessing kmong_11_test_results table:', tablesError.message)
    console.log('\nTable might not exist. Please run schema.sql in Supabase SQL Editor.\n')
  } else {
    console.log('✅ kmong_11_test_results table exists')
  }

  // 데이터 조회
  console.log('\n2. Fetching test results...')
  const { data: testResults, error: testError } = await supabase
    .from('kmong_11_test_results')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (testError) {
    console.error('Error fetching test results:', testError)
  } else {
    console.log(`✅ Found ${testResults?.length || 0} test results`)
    if (testResults && testResults.length > 0) {
      console.log('Sample record:', testResults[0])
    }
  }

  // 상담 데이터 조회
  console.log('\n3. Fetching consultations...')
  const { data: consultations, error: consultError } = await supabase
    .from('kmong_11_consultations')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (consultError) {
    console.error('Error fetching consultations:', consultError)
  } else {
    console.log(`✅ Found ${consultations?.length || 0} consultations`)
    if (consultations && consultations.length > 0) {
      console.log('Sample record:', consultations[0])
    }
  }

  // 테스트 데이터 삽입
  console.log('\n4. Inserting test data...')
  const testData = {
    name: 'API 테스트',
    grade: '중1',
    phone: '010-9999-9999',
    test_answers: JSON.stringify(['1', '1', '0', '1', '2']),
    level: 'Intermediate',
    score: 60
  }

  const { data: insertedData, error: insertError } = await supabase
    .from('kmong_11_test_results')
    .insert([testData])
    .select()

  if (insertError) {
    console.error('Error inserting test data:', insertError)
  } else {
    console.log('✅ Successfully inserted test data:', insertedData)
  }
}

testDatabase().catch(console.error)