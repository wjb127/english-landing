"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import LevelTest from "@/components/LevelTest"
import { ChevronRight, BookOpen, Trophy, Users, Clock, Phone, CheckCircle, Award, Target, Calendar } from "lucide-react"

export default function Home() {
  const [showTest, setShowTest] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [testResult, setTestResult] = useState<any>(null)

  const handleTestComplete = (data: any) => {
    setTestResult(data)
    setShowResult(true)
    setShowTest(false)
    
    // API 호출하여 데이터 저장
    fetch('/api/submit-test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data.userInfo,
        test_answers: data.testResult.answers,
        level: data.testResult.level,
        score: data.testResult.score
      })
    })
  }

  const handleStartTest = () => {
    setShowTest(true)
  }

  const handleReservation = async () => {
    if (!testResult) return
    
    try {
      const response = await fetch('/api/book-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...testResult.userInfo,
          level: testResult.testResult.level,
          message: '레벨 테스트 완료 후 상담 신청'
        })
      })
      
      if (response.ok) {
        alert('상담 예약이 완료되었습니다. 곧 연락드리겠습니다.')
      }
    } catch (error) {
      alert('예약 중 오류가 발생했습니다. 전화로 문의해주세요.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              DYB최선 × 정상어학원<br />
              <span className="text-yellow-300">문법센터</span> 새롭게 시작합니다!
            </h1>
            <p className="text-xl mb-4 opacity-95">
              전 정상어학원 원장 James.Yoo와 DYB최선이 함께하는 문법연구소
            </p>
            <p className="text-lg mb-8 opacity-90">
              8월 26일 화요일 오전 11:00 설명회 | 초5~중3 학생 및 학부모 대상
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-8"
                onClick={() => document.getElementById('test-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                무료 레벨테스트 시작 <ChevronRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              >
                <Phone className="mr-2" /> 041-414-5115
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            문법에서 문장력까지, <span className="text-red-600">완성의 마지막 한 조각</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            DYB최선 문법연구소 × 정상어학원의 차별화된 교육 시스템
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="bg-blue-600 text-white rounded-lg px-3 py-1 text-sm font-bold inline-block mb-3">
                  차이점 1
                </div>
                <CardTitle className="text-lg">AI 진단 테스트 후,<br/>개인 맞춤 커리큘럼 설계 및 상담</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• 정확한 레벨 진단</li>
                  <li>• 맞춤형 학습 경로 설계</li>
                  <li>• 1:1 전문 상담 제공</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="bg-blue-600 text-white rounded-lg px-3 py-1 text-sm font-bold inline-block mb-3">
                  차이점 2
                </div>
                <CardTitle className="text-lg">주 1회, 본원 수업과 함께 듣는<br/>효율적 수업 운영</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• 부담 없는 주 1회 수업</li>
                  <li>• 본원 수업과 시너지 효과</li>
                  <li>• 체계적인 진도 관리</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="bg-blue-600 text-white rounded-lg px-3 py-1 text-sm font-bold inline-block mb-3">
                  차이점 3
                </div>
                <CardTitle className="text-lg">문법 핵심 패턴+소리 훈련으로<br/>내신/수행평가/수능 완벽 대비</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• 패턴으로 이해하는 문법</li>
                  <li>• 소리 훈련으로 체득</li>
                  <li>• 시험 완벽 대비</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="bg-blue-600 text-white rounded-lg px-3 py-1 text-sm font-bold inline-block mb-3">
                  차이점 4
                </div>
                <CardTitle className="text-lg">7급~1급 커리큘럼 이수 후<br/>Pass 인증으로 눈에 보이는 학습 완료</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• 체계적인 7급~1급 시스템</li>
                  <li>• Pass 인증서 발급</li>
                  <li>• 눈에 보이는 성취도 확인</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Level Test Section */}
      <section id="test-section" className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {!showTest && !showResult && (
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  무료 레벨 테스트
                </h2>
                <p className="text-gray-600 mb-8">
                  AI 기반 진단으로 정확한 레벨을 측정하고 맞춤 학습을 시작하세요
                </p>
                <Card className="max-w-md mx-auto">
                  <CardHeader>
                    <CardTitle>7급 영어문법 진단테스트</CardTitle>
                    <CardDescription>
                      초등학교 5학년 수준 - 45문항 (약 20-30분 소요)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-lg py-6"
                      onClick={handleStartTest}
                    >
                      무료 테스트 시작하기
                      <ChevronRight className="ml-2" />
                    </Button>
                    <p className="text-sm text-gray-500 mt-4">
                      * 테스트 후 즉시 레벨 확인 및 상담 예약 가능
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}

            {showTest && !showResult && (
              <LevelTest onComplete={handleTestComplete} />
            )}

            {showResult && testResult && (
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="text-green-600 w-10 h-10" />
                  </div>
                  <CardTitle className="text-2xl">테스트 완료!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-gray-600 mb-2">{testResult.userInfo.name} 학생의 진단 결과</p>
                    <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-lg p-6 my-4">
                      <p className="text-4xl font-bold text-red-600 mb-2">{testResult.testResult.level}</p>
                      <div className="flex justify-center items-center gap-4 text-lg">
                        <span className="font-semibold">점수:</span>
                        <span className="text-2xl font-bold">{testResult.testResult.score}점</span>
                      </div>
                      <p className="text-gray-600 mt-2">
                        {testResult.testResult.correctCount}/{testResult.testResult.totalQuestions} 문제 정답
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-3 flex items-center justify-center gap-2">
                      <Target className="w-5 h-5" />
                      맞춤 학습 추천
                    </h3>
                    <div className="text-left space-y-2">
                      {testResult.testResult.score >= 80 ? (
                        <>
                          <p className="text-gray-700">✅ 7급 문법 기초가 탄탄합니다!</p>
                          <p className="text-gray-700">✅ 6급 진급 준비가 가능합니다</p>
                          <p className="text-gray-700">✅ 심화 패턴 학습을 추천합니다</p>
                        </>
                      ) : testResult.testResult.score >= 60 ? (
                        <>
                          <p className="text-gray-700">✅ 기본 문법 이해도가 양호합니다</p>
                          <p className="text-gray-700">✅ 부족한 영역 집중 보완 필요</p>
                          <p className="text-gray-700">✅ 체계적인 복습을 추천합니다</p>
                        </>
                      ) : (
                        <>
                          <p className="text-gray-700">✅ 기초부터 차근차근 시작하세요</p>
                          <p className="text-gray-700">✅ 1:1 맞춤 지도가 효과적입니다</p>
                          <p className="text-gray-700">✅ 꾸준한 학습이 중요합니다</p>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-lg py-6"
                      onClick={handleReservation}
                    >
                      <Calendar className="mr-2" /> 무료 상담 예약하기
                    </Button>
                    <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-500">
                      <span>📞 전화 문의: 041-414-5115</span>
                      <span className="hidden sm:inline">|</span>
                      <span>⏰ 상담 시간: 평일 10:00 ~ 20:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            8월 26일 설명회에 참여하세요!
          </h2>
          <p className="text-xl mb-8 opacity-95">
            문법을 끝내고, 문장을 마스터하라!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <p className="font-semibold">일시</p>
              <p>8/26(화) 오전 11:00</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <p className="font-semibold">대상</p>
              <p>초5 ~ 중3 학생 및 학부모</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <p className="font-semibold">문의</p>
              <p>041-414-5115</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Image Section */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-4">
          <img 
            src="/images/banner-bottom.png" 
            alt="정상어학원 문법센터 - 30년 경력 James.Yoo 원장"
            className="w-full max-w-6xl mx-auto block"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 font-semibold">DYB최선 문법연구소 × 정상어학원</p>
          <p className="text-gray-400 mb-2">문법센터 | 30년 경력 James.Yoo 원장</p>
          <p className="text-gray-400 text-sm">전 정상어학원 원장과 DYB최선이 함께하는 새로운 문법교육 브랜드</p>
          <p className="text-gray-400 mt-4 text-sm">© 2024 DYB최선 문법연구소. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}