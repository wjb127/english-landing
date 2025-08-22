"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, BookOpen, Calendar, TrendingUp, Phone, Mail, User, GraduationCap, Award, Clock, Lock, Edit, Trash2, X } from "lucide-react"

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
  score?: number
  preferred_date?: string
  message?: string
  status: string
  created_at: string
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [consultations, setConsultations] = useState<Consultation[]>([])
  const [stats, setStats] = useState({
    totalTests: 0,
    totalConsultations: 0,
    todayTests: 0,
    pendingConsultations: 0
  })
  const [loading, setLoading] = useState(true)
  const [editingConsultation, setEditingConsultation] = useState<Consultation | null>(null)
  const [editForm, setEditForm] = useState<Consultation | null>(null)

  useEffect(() => {
    // Check if already authenticated in session
    const authStatus = sessionStorage.getItem('adminAuth')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
      fetchData()
    } else {
      setLoading(false)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'kmong_english_2025!') {
      setIsAuthenticated(true)
      sessionStorage.setItem('adminAuth', 'true')
      fetchData()
    } else {
      alert('비밀번호가 올바르지 않습니다.')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('adminAuth')
    setPassword("")
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      // 테스트 결과 가져오기
      const testResponse = await fetch('/api/admin/test-results')
      let testData = []
      if (testResponse.ok) {
        testData = await testResponse.json()
      }
      
      // 상담 예약 가져오기
      const consultationResponse = await fetch('/api/admin/consultations')
      let consultationData = []
      if (consultationResponse.ok) {
        consultationData = await consultationResponse.json()
      }

      setTestResults(Array.isArray(testData) ? testData : [])
      setConsultations(Array.isArray(consultationData) ? consultationData : [])

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

  const handleEdit = (consultation: Consultation) => {
    setEditingConsultation(consultation)
    setEditForm({ ...consultation })
  }

  const handleSaveEdit = async () => {
    if (!editForm) return

    try {
      const response = await fetch('/api/admin/consultations', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editForm)
      })

      if (response.ok) {
        setEditingConsultation(null)
        setEditForm(null)
        fetchData()
        alert('수정되었습니다.')
      } else {
        alert('수정 중 오류가 발생했습니다.')
      }
    } catch (error) {
      console.error('Error updating consultation:', error)
      alert('수정 중 오류가 발생했습니다.')
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return

    try {
      const response = await fetch(`/api/admin/consultations?id=${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        fetchData()
        alert('삭제되었습니다.')
      } else {
        alert('삭제 중 오류가 발생했습니다.')
      }
    } catch (error) {
      console.error('Error deleting consultation:', error)
      alert('삭제 중 오류가 발생했습니다.')
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

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Lock className="text-blue-600 w-8 h-8" />
            </div>
            <CardTitle className="text-2xl">관리자 로그인</CardTitle>
            <CardDescription>
              DYB최선 문법연구소 × 정상어학원 관리자 페이지
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="password">비밀번호</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력하세요"
                  autoFocus
                />
              </div>
              <Button type="submit" className="w-full">
                로그인
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              DYB최선 문법연구소 × 정상어학원 - 관리자 대시보드
            </h1>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-500">
                문법센터 관리 시스템
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                로그아웃
              </Button>
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

        {/* Consultation Bookings */}
        <Card>
          <CardHeader>
            <CardTitle>상담 예약 및 레벨 테스트 현황</CardTitle>
            <CardDescription>레벨 테스트를 완료한 학생들의 상담 예약 현황입니다</CardDescription>
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
                    <th className="text-left p-2">학부모 연락처</th>
                    <th className="text-left p-2">
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        맞춘 문제수
                      </div>
                    </th>
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
                      <td className="p-2">{consultation.parent_phone || '-'}</td>
                      <td className="p-2">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-600">
                          {consultation.score ? `${consultation.score}/45` : '-'}
                        </span>
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
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleEdit(consultation)}
                          >
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="text-red-600 hover:bg-red-50"
                            onClick={() => handleDelete(consultation.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
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

      {/* Edit Modal */}
      {editingConsultation && editForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-lg mx-4">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>상담 정보 수정</CardTitle>
                <Button 
                  size="sm" 
                  variant="ghost"
                  onClick={() => {
                    setEditingConsultation(null)
                    setEditForm(null)
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="edit-name">이름</Label>
                <Input
                  id="edit-name"
                  value={editForm.name}
                  onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="edit-grade">학년</Label>
                <Input
                  id="edit-grade"
                  value={editForm.grade}
                  onChange={(e) => setEditForm({...editForm, grade: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="edit-phone">연락처</Label>
                <Input
                  id="edit-phone"
                  value={editForm.phone}
                  onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="edit-parent-phone">학부모 연락처</Label>
                <Input
                  id="edit-parent-phone"
                  value={editForm.parent_phone || ''}
                  onChange={(e) => setEditForm({...editForm, parent_phone: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="edit-status">상태</Label>
                <Select 
                  value={editForm.status}
                  onValueChange={(value) => setEditForm({...editForm, status: value})}
                >
                  <SelectTrigger id="edit-status">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">대기중</SelectItem>
                    <SelectItem value="confirmed">확정</SelectItem>
                    <SelectItem value="completed">완료</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="edit-message">메모</Label>
                <Textarea
                  id="edit-message"
                  value={editForm.message || ''}
                  onChange={(e) => setEditForm({...editForm, message: e.target.value})}
                  rows={3}
                />
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button 
                  variant="outline"
                  onClick={() => {
                    setEditingConsultation(null)
                    setEditForm(null)
                  }}
                >
                  취소
                </Button>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={handleSaveEdit}
                >
                  저장
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}