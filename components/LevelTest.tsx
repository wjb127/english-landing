"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ChevronRight, ChevronLeft, Trophy, Target, BookOpen, Clock } from "lucide-react"

// 7급 테스트 문제 (초등학교 5학년 수준)
const testQuestions = [
  // 인지적 문법능력 (1-25번)
  {
    id: 1,
    category: "인지적 문법능력",
    question: "다음 빈칸에 알맞은 것을 고르시오.",
    sentence: "Tom _______ a student.",
    options: ["am", "is", "are", "be", "been"],
    correct: 1,
    topic: "be동사"
  },
  {
    id: 2,
    category: "인지적 문법능력",
    question: "다음 중 어법상 올바른 것은?",
    options: [
      "She don't like pizza.",
      "She doesn't like pizza.",
      "She not like pizza.",
      "She no like pizza.",
      "She doesn't likes pizza."
    ],
    correct: 1,
    topic: "일반동사 부정"
  },
  {
    id: 3,
    category: "인지적 문법능력",
    question: "다음 문장을 의문문으로 바꾸면?",
    sentence: "They are happy.",
    options: [
      "Do they happy?",
      "Are they happy?",
      "Is they happy?",
      "They are happy?",
      "Does they happy?"
    ],
    correct: 1,
    topic: "be동사 의문문"
  },
  {
    id: 4,
    category: "인지적 문법능력",
    question: "빈칸에 알맞은 것을 고르시오.",
    sentence: "My sister _______ English every day.",
    options: ["study", "studys", "studies", "studying", "studied"],
    correct: 2,
    topic: "3인칭 단수"
  },
  {
    id: 5,
    category: "인지적 문법능력",
    question: "다음 중 어법상 틀린 것은?",
    options: [
      "He plays soccer.",
      "She watches TV.",
      "It fly in the sky.",
      "The cat sleeps.",
      "Tom reads books."
    ],
    correct: 2,
    topic: "3인칭 단수"
  },
  {
    id: 6,
    category: "인지적 문법능력",
    question: "다음 문장에서 동사의 형태가 올바른 것은?",
    options: [
      "The boy run fast.",
      "The boys runs fast.",
      "The boy runs fast.",
      "A boy run fast.",
      "The boy running fast."
    ],
    correct: 2,
    topic: "주어-동사 일치"
  },
  {
    id: 7,
    category: "인지적 문법능력",
    question: "빈칸에 알맞은 것을 고르시오.",
    sentence: "I like _______. She is kind.",
    options: ["she", "her", "hers", "herself", "she's"],
    correct: 1,
    topic: "목적격 대명사"
  },
  {
    id: 8,
    category: "인지적 문법능력",
    question: "다음 중 어법상 올바른 것은?",
    options: [
      "He helps I.",
      "He helps me.",
      "He helps my.",
      "He helps mine.",
      "He helps myself."
    ],
    correct: 1,
    topic: "목적격 대명사"
  },
  {
    id: 9,
    category: "인지적 문법능력",
    question: "우리말을 영어로 올바르게 옮긴 것은?",
    sentence: "나는 그들을 본다.",
    options: [
      "I see they.",
      "I see them.",
      "I see their.",
      "I see theirs.",
      "I see themselves."
    ],
    correct: 1,
    topic: "목적격 대명사"
  },
  {
    id: 10,
    category: "인지적 문법능력",
    question: "빈칸에 알맞은 것을 고르시오.",
    sentence: "The flower is _______.",
    options: ["beauty", "beautiful", "beautifully", "more beauty", "beautify"],
    correct: 1,
    topic: "형용사"
  },
  {
    id: 11,
    category: "인지적 문법능력",
    question: "다음 중 어법상 올바른 것은?",
    options: [
      "She looks happily.",
      "She looks happy.",
      "She looks happiness.",
      "She looks more happily.",
      "She look happy."
    ],
    correct: 1,
    topic: "감각동사"
  },
  {
    id: 12,
    category: "인지적 문법능력",
    question: "2형식 문장은?",
    options: [
      "I eat an apple.",
      "She became a teacher.",
      "We play soccer.",
      "They give me a book.",
      "He studies hard."
    ],
    correct: 1,
    topic: "문장형식"
  },
  {
    id: 13,
    category: "인지적 문법능력",
    question: "빈칸에 알맞은 것을 고르시오.",
    sentence: "I want _______ pizza.",
    options: ["eat", "to eat", "eating", "ate", "eats"],
    correct: 1,
    topic: "to부정사"
  },
  {
    id: 14,
    category: "인지적 문법능력",
    question: "다음 중 어법상 올바른 것은?",
    options: [
      "I like read books.",
      "I like reading books.",
      "I like to reading books.",
      "I like reads books.",
      "I like readed books."
    ],
    correct: 1,
    topic: "동명사"
  },
  {
    id: 15,
    category: "인지적 문법능력",
    question: "내 취미는 노래하는 것이다를 영어로 하면?",
    options: [
      "My hobby is sing.",
      "My hobby is singing.",
      "My hobby is to singing.",
      "My hobby singing.",
      "My hobby sings."
    ],
    correct: 1,
    topic: "동명사"
  },
  {
    id: 16,
    category: "인지적 문법능력",
    question: "빈칸에 들어갈 말로 가장 적절한 것은?",
    sentence: "My dream is _______ a doctor.",
    options: ["become", "to become", "becoming", "became", "becomes"],
    correct: 1,
    topic: "to부정사"
  },
  {
    id: 17,
    category: "인지적 문법능력",
    question: "빈칸에 알맞은 것을 고르시오.",
    sentence: "She sings very _______.",
    options: ["good", "well", "nice", "pretty", "best"],
    correct: 1,
    topic: "부사"
  },
  {
    id: 18,
    category: "인지적 문법능력",
    question: "다음 중 어법상 올바른 것은?",
    options: [
      "He is a carefully driver.",
      "He is a careful driver.",
      "He drives very careful.",
      "He careful drives.",
      "He is carefully driver."
    ],
    correct: 1,
    topic: "형용사"
  },
  {
    id: 19,
    category: "인지적 문법능력",
    question: "감탄문으로 옳은 것은?",
    options: [
      "What a beautiful flower!",
      "How a beautiful flower!",
      "What beautiful a flower!",
      "How beautiful a flower!",
      "What beautifully flower!"
    ],
    correct: 0,
    topic: "감탄문"
  },
  {
    id: 20,
    category: "인지적 문법능력",
    question: "빈칸에 알맞은 것을 고르시오.",
    sentence: "I was late _______ the bus was delayed.",
    options: ["and", "but", "because", "so", "or"],
    correct: 2,
    topic: "접속사"
  },
  {
    id: 21,
    category: "인지적 문법능력",
    question: "다음 중 어법상 올바른 것은?",
    options: [
      "I like apples and oranges.",
      "I like apples but oranges.",
      "I like apples because oranges.",
      "I like apples so oranges.",
      "I like apples or oranges good."
    ],
    correct: 0,
    topic: "접속사"
  },
  {
    id: 22,
    category: "인지적 문법능력",
    question: "문장을 자연스럽게 연결하면?",
    sentence: "It was raining. We stayed home.",
    options: [
      "It was raining, and we stayed home.",
      "It was raining, but we stayed home.",
      "It was raining, so we stayed home.",
      "It was raining, because we stayed home.",
      "It was raining, or we stayed home."
    ],
    correct: 2,
    topic: "접속사"
  },
  {
    id: 23,
    category: "인지적 문법능력",
    question: "빈칸에 알맞은 것을 고르시오.",
    sentence: "Tom is _______ than Mike.",
    options: ["tall", "taller", "tallest", "more tall", "most tall"],
    correct: 1,
    topic: "비교급"
  },
  {
    id: 24,
    category: "인지적 문법능력",
    question: "다음 중 어법상 올바른 것은?",
    options: [
      "She is more prettier than her sister.",
      "She is prettyer than her sister.",
      "She is prettier than her sister.",
      "She is most pretty than her sister.",
      "She is more pretty than her sister."
    ],
    correct: 2,
    topic: "비교급"
  },
  {
    id: 25,
    category: "인지적 문법능력",
    question: "최상급 표현으로 올바른 것은?",
    options: [
      "He is the most tall in the class.",
      "He is the taller in the class.",
      "He is the tallest in the class.",
      "He is most tallest in the class.",
      "He is more tallest in the class."
    ],
    correct: 2,
    topic: "최상급"
  },
  // 감각적 문법능력 (26-45번) - 틀린 부분 찾기 & 올바른 표현 선택
  {
    id: 26,
    category: "감각적 문법능력",
    question: "다음 문장에서 어법상 어색한 부분은?",
    sentence: "I am more tall than my brother.",
    options: ["I", "am", "more tall", "than", "my brother"],
    correct: 2,
    topic: "비교급 오류"
  },
  {
    id: 27,
    category: "감각적 문법능력",
    question: "다음 문장에서 어법상 어색한 부분은?",
    sentence: "She don't like apples very much.",
    options: ["She", "don't", "like", "apples", "very much"],
    correct: 1,
    topic: "3인칭 단수 오류"
  },
  {
    id: 28,
    category: "감각적 문법능력",
    question: "다음 문장에서 어법상 어색한 부분은?",
    sentence: "He plays soccer very good.",
    options: ["He", "plays", "soccer", "very", "good"],
    correct: 4,
    topic: "부사 오류"
  },
  {
    id: 29,
    category: "감각적 문법능력",
    question: "다음 문장에서 어법상 어색한 부분은?",
    sentence: "They is playing in the park.",
    options: ["They", "is", "playing", "in", "the park"],
    correct: 1,
    topic: "주어-동사 불일치"
  },
  {
    id: 30,
    category: "감각적 문법능력",
    question: "다음 문장에서 어법상 어색한 부분은?",
    sentence: "I want eat some delicious pizza.",
    options: ["I", "want eat", "some", "delicious", "pizza"],
    correct: 1,
    topic: "to부정사 누락"
  },
  {
    id: 31,
    category: "감각적 문법능력",
    question: "다음 문장에서 어법상 어색한 부분은?",
    sentence: "My hobby is to swimming everyday.",
    options: ["My", "hobby", "is", "to swimming", "everyday"],
    correct: 3,
    topic: "동명사 오류"
  },
  {
    id: 32,
    category: "감각적 문법능력",
    question: "다음 문장에서 어법상 어색한 부분은?",
    sentence: "She looks very beautifully today.",
    options: ["She", "looks", "very", "beautifully", "today"],
    correct: 3,
    topic: "감각동사 보어"
  },
  {
    id: 33,
    category: "감각적 문법능력",
    question: "다음 문장에서 어법상 어색한 부분은?",
    sentence: "The book is more interested than the movie.",
    options: ["The book", "is", "more", "interested", "than the movie"],
    correct: 3,
    topic: "형용사 선택"
  },
  {
    id: 34,
    category: "감각적 문법능력",
    question: "다음 문장에서 어법상 어색한 부분은?",
    sentence: "I like he very much always.",
    options: ["I", "like", "he", "very much", "always"],
    correct: 2,
    topic: "목적격 오류"
  },
  {
    id: 35,
    category: "감각적 문법능력",
    question: "다음 문장에서 어법상 어색한 부분은?",
    sentence: "We doesn't have enough time.",
    options: ["We", "doesn't", "have", "enough", "time"],
    correct: 1,
    topic: "복수 주어"
  },
  {
    id: 36,
    category: "감각적 문법능력",
    question: "올바른 표현을 선택하시오.",
    sentence: "She (look / looks) happy today.",
    options: ["look", "looks"],
    correct: 1,
    topic: "3인칭 단수"
  },
  {
    id: 37,
    category: "감각적 문법능력",
    question: "올바른 표현을 선택하시오.",
    sentence: "I like (he / him) very much.",
    options: ["he", "him"],
    correct: 1,
    topic: "목적격"
  },
  {
    id: 38,
    category: "감각적 문법능력",
    question: "올바른 표현을 선택하시오.",
    sentence: "The movie is very (interesting / interested).",
    options: ["interesting", "interested"],
    correct: 0,
    topic: "형용사"
  },
  {
    id: 39,
    category: "감각적 문법능력",
    question: "올바른 표현을 선택하시오.",
    sentence: "We (don't / doesn't) like coffee.",
    options: ["don't", "doesn't"],
    correct: 0,
    topic: "복수 주어"
  },
  {
    id: 40,
    category: "감각적 문법능력",
    question: "올바른 표현을 선택하시오.",
    sentence: "This is (a / an) orange.",
    options: ["a", "an"],
    correct: 1,
    topic: "관사"
  },
  {
    id: 41,
    category: "감각적 문법능력",
    question: "올바른 표현을 선택하시오.",
    sentence: "The test was (easy / easily) for me.",
    options: ["easy", "easily"],
    correct: 0,
    topic: "형용사"
  },
  {
    id: 42,
    category: "감각적 문법능력",
    question: "올바른 표현을 선택하시오.",
    sentence: "They (is / are) my best friends.",
    options: ["is", "are"],
    correct: 1,
    topic: "be동사"
  },
  {
    id: 43,
    category: "감각적 문법능력",
    question: "올바른 표현을 선택하시오.",
    sentence: "She runs (quick / quickly).",
    options: ["quick", "quickly"],
    correct: 1,
    topic: "부사"
  },
  {
    id: 44,
    category: "감각적 문법능력",
    question: "올바른 표현을 선택하시오.",
    sentence: "I have (a / an) useful book.",
    options: ["a", "an"],
    correct: 0,
    topic: "관사"
  },
  {
    id: 45,
    category: "감각적 문법능력",
    question: "올바른 표현을 선택하시오.",
    sentence: "This is (my / mine) pencil.",
    options: ["my", "mine"],
    correct: 0,
    topic: "소유격"
  }
]

// 급수별 학년 매핑
const gradeMapping = {
  "7급": "초등학교 5학년",
  "6급": "초등학교 6학년",
  "5급": "중학교 1학년",
  "4급": "중학교 2학년",
  "3급": "중학교 3학년",
  "2급": "고등학교 1학년",
  "1급": "고등학교 2-3학년"
}

interface LevelTestProps {
  onComplete: (data: {
    userInfo: {
      name: string
      grade: string
      phone: string
      parentPhone?: string
    }
    testResult: {
      answers: number[]
      score: number
      level: string
      correctCount: number
      totalQuestions: number
    }
  }) => void
}

export default function LevelTest({ onComplete }: LevelTestProps) {
  const [step, setStep] = useState<'info' | 'test' | 'result'>('info')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userInfo, setUserInfo] = useState({
    name: '',
    grade: '',
    phone: '',
    parentPhone: ''
  })
  const [answers, setAnswers] = useState<number[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [startTime, setStartTime] = useState<Date | null>(null)
  const [showProgress, setShowProgress] = useState(false)

  const handleStartTest = () => {
    if (!userInfo.name || !userInfo.grade || !userInfo.phone) {
      alert('필수 정보를 모두 입력해주세요.')
      return
    }
    setStep('test')
    setStartTime(new Date())
    setShowProgress(true)
  }

  const handleAnswer = () => {
    if (!selectedAnswer) {
      alert('답을 선택해주세요.')
      return
    }

    const newAnswers = [...answers, parseInt(selectedAnswer)]
    setAnswers(newAnswers)
    setSelectedAnswer('')

    if (currentQuestion < testQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResult(newAnswers)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(answers[currentQuestion - 1]?.toString() || '')
      setAnswers(answers.slice(0, -1))
    }
  }

  const calculateResult = (allAnswers: number[]) => {
    let correctCount = 0
    allAnswers.forEach((answer, index) => {
      if (answer === testQuestions[index].correct) {
        correctCount++
      }
    })

    const score = Math.round((correctCount / testQuestions.length) * 100)
    
    // 점수에 따른 레벨 판정
    let level = ''
    if (score >= 90) level = '7급 완벽 마스터'
    else if (score >= 80) level = '7급 우수'
    else if (score >= 70) level = '7급 보통'
    else if (score >= 60) level = '7급 보완필요'
    else level = '7급 재학습 권장'

    const testResult = {
      answers: allAnswers,
      score,
      level,
      correctCount,
      totalQuestions: testQuestions.length
    }

    setStep('result')
    onComplete({ userInfo, testResult })
  }

  const progress = ((currentQuestion + 1) / testQuestions.length) * 100

  return (
    <div className="max-w-4xl mx-auto">
      {step === 'info' && (
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Target className="text-blue-600 w-8 h-8" />
            </div>
            <CardTitle className="text-2xl">7급 영어문법 진단테스트</CardTitle>
            <CardDescription className="text-lg mt-2">
              초등학교 5학년 수준 - 영어 기초 문법 완전 정복!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                테스트 구성
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• 총 45문항 (인지적 25문항 + 감각적 20문항)</li>
                <li>• 예상 소요시간: 약 20-30분</li>
                <li>• 즉시 레벨 측정 및 맞춤 상담 예약</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">학생 이름 *</Label>
                <Input
                  id="name"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                  placeholder="홍길동"
                />
              </div>
              <div>
                <Label htmlFor="grade">학년 *</Label>
                <Input
                  id="grade"
                  value={userInfo.grade}
                  onChange={(e) => setUserInfo({...userInfo, grade: e.target.value})}
                  placeholder="예: 초5, 중1"
                />
              </div>
              <div>
                <Label htmlFor="phone">학생 연락처 *</Label>
                <Input
                  id="phone"
                  value={userInfo.phone}
                  onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                  placeholder="010-0000-0000"
                />
              </div>
              <div>
                <Label htmlFor="parentPhone">학부모 연락처 (선택)</Label>
                <Input
                  id="parentPhone"
                  value={userInfo.parentPhone}
                  onChange={(e) => setUserInfo({...userInfo, parentPhone: e.target.value})}
                  placeholder="010-0000-0000"
                />
              </div>
            </div>

            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
              onClick={handleStartTest}
            >
              테스트 시작하기
              <ChevronRight className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 'test' && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <CardTitle>
                문제 {currentQuestion + 1} / {testQuestions.length}
              </CardTitle>
              <span className="text-sm text-gray-500">
                {testQuestions[currentQuestion].category}
              </span>
            </div>
            {showProgress && (
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-lg mb-2">
                  {testQuestions[currentQuestion].question}
                </p>
                {testQuestions[currentQuestion].sentence && (
                  <p className="text-lg bg-white p-3 rounded border">
                    {testQuestions[currentQuestion].sentence}
                  </p>
                )}
              </div>

              <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                <div className="space-y-3">
                  {testQuestions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label 
                        htmlFor={`option-${index}`} 
                        className="cursor-pointer flex-1 text-base"
                      >
                        {index + 1}. {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ChevronLeft className="mr-2" />
                이전
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={handleAnswer}
              >
                {currentQuestion === testQuestions.length - 1 ? '제출하기' : '다음'}
                <ChevronRight className="ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 'result' && (
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Trophy className="text-green-600 w-10 h-10" />
            </div>
            <CardTitle className="text-2xl">테스트 완료!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">결과가 처리되었습니다.</p>
            <p className="text-gray-600 mt-2">상담 예약 페이지로 이동합니다...</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}