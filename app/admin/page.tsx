"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, Calendar, TrendingUp, Phone, Mail, User, GraduationCap, Award, Clock } from "lucide-react"

interface TestResult {
  id: number
  name: string
  grade: string
  phone: string
  parent_phone?: string
  level: string
  score: number
  test_answers?: any
  created_at: string
}

interface Consultation {
  id: number
  name: string
  grade: string
  phone: string
  parent_phone?: string
  level: string
  preferred_date?: string
  message?: string
  status: string
  created_at: string
}

export default function AdminDashboard() {
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [consultations, setConsultations] = useState<Consultation[]>([])
  const [stats, setStats] = useState({
    totalTests: 0,
    totalConsultations: 0,
    todayTests: 0,
    pendingConsultations: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      // 테스트 결과 가져오기
      const testResponse = await fetch('/api/admin/test-results')
      const testData = await testResponse.json()
      
      // 상담 예약 가져오기
      const consultationResponse = await fetch('/api/admin/consultations')
      const consultationData = await consultationResponse.json()

      setTestResults(testData || [])
      setConsultations(consultationData || [])

      // 통계 계산
      const today = new Date().toDateString()
      const todayTestCount = (testData || []).filter(
        (t: TestResult) => new Date(t.created_at).toDateString() === today
      ).length
      const pendingCount = (consultationData || []).filter(
        (c: Consultation) => c.status === "pending"
      ).length

      setStats({
        totalTests: testData?.length || 0,
        totalConsultations: consultationData?.length || 0,
        todayTests: todayTestCount,
        pendingConsultations: pendingCount
      })
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusUpdate = async (id: number, status: string) => {
    try {
      const response = await fetch('/api/admin/consultations', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status })
      })

      if (response.ok) {
        fetchData() // 데이터 새로고침
      }
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "text-green-600 bg-green-100"
      case "Intermediate": return "text-blue-600 bg-blue-100"
      case "Pre-Intermediate": return "text-yellow-600 bg-yellow-100"
      case "Beginner": return "text-red-600 bg-red-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "text-green-600 bg-green-100"
      case "pending": return "text-yellow-600 bg-yellow-100"
      case "completed": return "text-blue-600 bg-blue-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              정상어학원 문법센터 - 관리자 대시보드
            </h1>
            <div className="text-sm text-gray-500">
              크몽 프로젝트 #11
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {loading && (
          <div className="text-center py-8">
            <p className="text-gray-500">데이터를 불러오는 중...</p>
          </div>
        )}
        {!loading && (
          <>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">총 테스트 응시</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalTests}</div>
              <p className="text-xs text-muted-foreground">전체 레벨 테스트 완료</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">오늘 테스트</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.todayTests}</div>
              <p className="text-xs text-muted-foreground">오늘 응시한 학생</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">상담 예약</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalConsultations}</div>
              <p className="text-xs text-muted-foreground">전체 상담 예약</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">대기중 상담</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pendingConsultations}</div>
              <p className="text-xs text-muted-foreground">확인 필요</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Test Results */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>최근 레벨 테스트 결과</CardTitle>
            <CardDescription>최근 응시한 학생들의 테스트 결과입니다</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        이름
                      </div>
                    </th>
                    <th className="text-left p-2">
                      <div className="flex items-center gap-1">
                        <GraduationCap className="h-4 w-4" />
                        학년
                      </div>
                    </th>
                    <th className="text-left p-2">
                      <div className="flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        연락처
                      </div>
                    </th>
                    <th className="text-left p-2">
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        레벨
                      </div>
                    </th>
                    <th className="text-left p-2">점수</th>
                    <th className="text-left p-2">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        응시일
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {testResults.map((result) => (
                    <tr key={result.id} className="border-b hover:bg-gray-50">
                      <td className="p-2 font-medium">{result.name}</td>
                      <td className="p-2">{result.grade}</td>
                      <td className="p-2">{result.phone}</td>
                      <td className="p-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(result.level)}`}>
                          {result.level}
                        </span>
                      </td>
                      <td className="p-2">{result.score}점</td>
                      <td className="p-2 text-sm text-gray-500">
                        {new Date(result.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Consultation Bookings */}
        <Card>
          <CardHeader>
            <CardTitle>상담 예약 현황</CardTitle>
            <CardDescription>상담 예약 신청 목록입니다</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">이름</th>
                    <th className="text-left p-2">학년</th>
                    <th className="text-left p-2">연락처</th>
                    <th className="text-left p-2">레벨</th>
                    <th className="text-left p-2">희망일</th>
                    <th className="text-left p-2">상태</th>
                    <th className="text-left p-2">메모</th>
                    <th className="text-left p-2">액션</th>
                  </tr>
                </thead>
                <tbody>
                  {consultations.map((consultation) => (
                    <tr key={consultation.id} className="border-b hover:bg-gray-50">
                      <td className="p-2 font-medium">{consultation.name}</td>
                      <td className="p-2">{consultation.grade}</td>
                      <td className="p-2">{consultation.phone}</td>
                      <td className="p-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(consultation.level)}`}>
                          {consultation.level}
                        </span>
                      </td>
                      <td className="p-2">
                        {consultation.preferred_date ? 
                          new Date(consultation.preferred_date).toLocaleDateString() : 
                          "-"
                        }
                      </td>
                      <td className="p-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(consultation.status)}`}>
                          {consultation.status === "pending" ? "대기중" : 
                           consultation.status === "confirmed" ? "확정" : "완료"}
                        </span>
                      </td>
                      <td className="p-2 text-sm text-gray-500 max-w-xs truncate">
                        {consultation.message || "-"}
                      </td>
                      <td className="p-2">
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Phone className="h-3 w-3 mr-1" />
                            연락
                          </Button>
                          {consultation.status === "pending" && (
                            <Button 
                              size="sm" 
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => handleStatusUpdate(consultation.id, 'confirmed')}
                            >
                              확정
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Export Buttons */}
        <div className="mt-8 flex gap-4">
          <Button variant="outline">
            <Mail className="h-4 w-4 mr-2" />
            데이터 내보내기 (Excel)
          </Button>
          <Button variant="outline">
            설명회 참석자 관리
          </Button>
        </div>
        </>
        )}
      </div>
    </div>
  )
}