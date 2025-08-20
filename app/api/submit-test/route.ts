import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // 테스트 결과 저장
    const { error } = await supabase
      .from('kmong_11_test_results')
      .insert([
        {
          name: data.name,
          grade: data.grade,
          phone: data.phone,
          parent_phone: data.parentPhone,
          test_answers: data.answers,
          level: data.level,
          score: data.score,
          created_at: new Date().toISOString()
        }
      ])

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Failed to save test result' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}