import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // 상담 예약 저장
    const { error } = await supabase
      .from('kmong_11_consultations')
      .insert([
        {
          name: data.name,
          grade: data.grade,
          phone: data.phone,
          parent_phone: data.parentPhone,
          level: data.level,
          preferred_date: data.preferredDate,
          message: data.message,
          created_at: new Date().toISOString()
        }
      ])

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Failed to book consultation' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}