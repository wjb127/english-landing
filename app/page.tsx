"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ChevronRight, BookOpen, Trophy, Users, Clock, Phone, CheckCircle, Award, Target, Calendar } from "lucide-react"

export default function Home() {
  const [showTest, setShowTest] = useState(false)
  const [testStep, setTestStep] = useState(0)
  const [userInfo, setUserInfo] = useState({
    name: "",
    grade: "",
    phone: "",
    parentPhone: ""
  })
  const [testAnswers, setTestAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [userLevel, setUserLevel] = useState("")

  const testQuestions = [
    {
      question: "Choose the correct form of the verb.",
      sentence: "She _____ to school every day.",
      options: ["go", "goes", "going", "gone"],
      correct: 1
    },
    {
      question: "Select the correct article.",
      sentence: "I saw _____ eagle flying in the sky.",
      options: ["a", "an", "the", "no article"],
      correct: 1
    },
    {
      question: "Choose the correct tense.",
      sentence: "By next month, I _____ here for five years.",
      options: ["will live", "will have lived", "am living", "have lived"],
      correct: 1
    },
    {
      question: "Select the correct preposition.",
      sentence: "She is good _____ mathematics.",
      options: ["in", "at", "on", "for"],
      correct: 1
    },
    {
      question: "Choose the correct form.",
      sentence: "If I _____ rich, I would travel the world.",
      options: ["am", "was", "were", "will be"],
      correct: 2
    }
  ]

  const handleStartTest = () => {
    if (userInfo.name && userInfo.grade && userInfo.phone) {
      setShowTest(true)
    } else {
      alert("모든 정보를 입력해주세요.")
    }
  }

  const handleTestAnswer = (answer: string) => {
    const newAnswers = [...testAnswers, answer]
    setTestAnswers(newAnswers)
    
    if (testStep < testQuestions.length - 1) {
      setTestStep(testStep + 1)
    } else {
      calculateResult(newAnswers)
    }
  }

  const calculateResult = (answers: string[]) => {
    let correctCount = 0
    answers.forEach((answer, index) => {
      if (parseInt(answer) === testQuestions[index].correct) {
        correctCount++
      }
    })
    
    const percentage = (correctCount / testQuestions.length) * 100
    let level = ""
    
    if (percentage >= 80) level = "Advanced"
    else if (percentage >= 60) level = "Intermediate"
    else if (percentage >= 40) level = "Pre-Intermediate"
    else level = "Beginner"
    
    setUserLevel(level)
    setShowResult(true)
  }

  const handleReservation = () => {
    alert("상담 예약이 완료되었습니다. 곧 연락드리겠습니다.")
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
      <section id="test-section" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              무료 레벨 테스트
            </h2>
            
            {!showTest && !showResult && (
              <Card>
                <CardHeader>
                  <CardTitle>학생 정보 입력</CardTitle>
                  <CardDescription>
                    정확한 레벨 측정을 위해 아래 정보를 입력해주세요.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">학생 이름</Label>
                    <Input 
                      id="name" 
                      placeholder="이름을 입력하세요"
                      value={userInfo.name}
                      onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="grade">학년</Label>
                    <Input 
                      id="grade" 
                      placeholder="예: 초5, 중1"
                      value={userInfo.grade}
                      onChange={(e) => setUserInfo({...userInfo, grade: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">학생 연락처</Label>
                    <Input 
                      id="phone" 
                      placeholder="010-0000-0000"
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="parentPhone">학부모 연락처 (선택)</Label>
                    <Input 
                      id="parentPhone" 
                      placeholder="010-0000-0000"
                      value={userInfo.parentPhone}
                      onChange={(e) => setUserInfo({...userInfo, parentPhone: e.target.value})}
                    />
                  </div>
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700"
                    onClick={handleStartTest}
                  >
                    레벨 테스트 시작하기
                  </Button>
                </CardContent>
              </Card>
            )}

            {showTest && !showResult && (
              <Card>
                <CardHeader>
                  <CardTitle>문제 {testStep + 1} / {testQuestions.length}</CardTitle>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                    <div 
                      className="bg-red-600 h-2 rounded-full transition-all"
                      style={{ width: `${((testStep + 1) / testQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">{testQuestions[testStep].question}</p>
                    <p className="text-lg mb-4 p-4 bg-gray-50 rounded">{testQuestions[testStep].sentence}</p>
                    <RadioGroup onValueChange={handleTestAnswer}>
                      {testQuestions[testStep].options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-2 mb-3">
                          <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                          <Label htmlFor={`option-${index}`} className="cursor-pointer text-base">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
            )}

            {showResult && (
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="text-green-600 w-10 h-10" />
                  </div>
                  <CardTitle className="text-2xl">테스트 완료!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-gray-600 mb-2">{userInfo.name} 학생의 레벨은</p>
                    <p className="text-4xl font-bold text-red-600">{userLevel}</p>
                    <p className="text-gray-500 mt-2">레벨입니다</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="font-semibold mb-2">추천 학습 과정</p>
                    <p className="text-gray-600">
                      {userLevel === "Advanced" && "고급 문법 패턴과 실전 응용 중심 학습"}
                      {userLevel === "Intermediate" && "중급 문법 강화 및 패턴 훈련"}
                      {userLevel === "Pre-Intermediate" && "기본 문법 체계 확립 및 기초 패턴 학습"}
                      {userLevel === "Beginner" && "기초 문법부터 차근차근 체계적 학습"}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700"
                      onClick={handleReservation}
                    >
                      <Calendar className="mr-2" /> 상담 예약하기
                    </Button>
                    <p className="text-sm text-gray-500">
                      상담 문의: 041-414-5115
                    </p>
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