"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, ChevronLeft, Trophy, Target, BookOpen, Clock } from "lucide-react"
import { 
  gradeInfo, 
  grade1Questions,
  grade2Questions,
  grade3Questions,
  grade4Questions,
  grade5Questions,
  grade6Questions 
} from "@/lib/testData"

// 7급 테스트 문제 (초등학교 5학년 수준) - 객관식 40문항
const testQuestions = [
  // 인지적 문법능력 (1-25번)
  {
    id: 1,
    category: "인지적 문법능력",
    type: "objective",
    question: "다음 빈칸에 알맞은 것을 고르시오.",
    sentence: "Tom _______ a student.",
    options: ["am", "is", "are", "be", "been"],
    correct: 1,
    topic: "be동사"
  },
  {
    id: 2,
    category: "인지적 문법능력",
    type: "objective",
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
    type: "objective",
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
    type: "objective",
    question: "빈칸에 알맞은 것을 고르시오.",
    sentence: "My sister _______ English every day.",
    options: ["study", "studys", "studies", "studying", "studied"],
    correct: 2,
    topic: "3인칭 단수"
  },
  {
    id: 5,
    category: "인지적 문법능력",
    type: "objective",
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
    type: "objective",
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
    type: "objective",
    question: "빈칸에 알맞은 것을 고르시오.",
    sentence: "I like _______. She is kind.",
    options: ["she", "her", "hers", "herself", "she's"],
    correct: 1,
    topic: "목적격 대명사"
  },
  {
    id: 8,
    category: "인지적 문법능력",
    type: "objective",
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
    type: "objective",
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
    type: "objective",
    question: "빈칸에 알맞은 것을 고르시오.",
    sentence: "The flower is _______.",
    options: ["beauty", "beautiful", "beautifully", "more beauty", "beautify"],
    correct: 1,
    topic: "형용사"
  },
  {
    id: 11,
    category: "인지적 문법능력",
    type: "objective",
    question: "다음 중 어법상 올바른 것은?",
    options: [
      "She looks happily.",
      "She looks happy.",
      "She looks happiness.",
      "She looks more happily.",
      "She look happy."
    ],
    correct: 1,
    topic: "감각동사 보어"
  },
  {
    id: 12,
    category: "인지적 문법능력",
    type: "objective",
    question: "2형식 문장은?",
    options: [
      "I eat an apple.",
      "She became a teacher.",
      "We play soccer.",
      "They give me a book.",
      "He studies hard."
    ],
    correct: 1,
    topic: "문장 형식"
  },
  {
    id: 13,
    category: "인지적 문법능력",
    type: "objective",
    question: "빈칸에 알맞은 것을 고르시오.",
    sentence: "I want _______ pizza.",
    options: ["eat", "to eat", "eating", "ate", "eats"],
    correct: 1,
    topic: "to부정사"
  },
  {
    id: 14,
    category: "인지적 문법능력",
    type: "objective",
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
    type: "objective",
    question: "\"내 취미는 노래하는 것이다\"를 영어로 하면?",
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
    type: "objective",
    question: "빈칸에 들어갈 말로 가장 적절한 것은?",
    sentence: "My dream is _______ a doctor.",
    options: ["become", "to become", "becoming", "became", "becomes"],
    correct: 1,
    topic: "to부정사"
  },
  {
    id: 17,
    category: "인지적 문법능력",
    type: "objective",
    question: "빈칸에 알맞은 것을 고르시오.",
    sentence: "She sings very _______.",
    options: ["good", "well", "nice", "pretty", "best"],
    correct: 1,
    topic: "부사"
  },
  {
    id: 18,
    category: "인지적 문법능력",
    type: "objective",
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
    type: "objective",
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
    type: "objective",
    question: "빈칸에 알맞은 것을 고르시오.",
    sentence: "I was late _______ the bus was delayed.",
    options: ["and", "but", "because", "so", "or"],
    correct: 2,
    topic: "접속사"
  },
  {
    id: 21,
    category: "인지적 문법능력",
    type: "objective",
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
    type: "objective",
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
    type: "objective",
    question: "빈칸에 알맞은 것을 고르시오.",
    sentence: "Tom is _______ than Mike.",
    options: ["tall", "taller", "tallest", "more tall", "most tall"],
    correct: 1,
    topic: "비교급"
  },
  {
    id: 24,
    category: "인지적 문법능력",
    type: "objective",
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
    type: "objective",
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
  // 감각적 문법능력 (26-40번)
  {
    id: 26,
    category: "감각적 문법능력",
    type: "objective",
    question: "다음 문장에서 어법상 어색한 부분을 고르시오.",
    sentence: "I am more tall than my brother.",
    options: ["I", "am", "more tall", "than", "my brother"],
    correct: 2,
    topic: "비교급"
  },
  {
    id: 27,
    category: "감각적 문법능력",
    type: "objective",
    question: "다음 문장에서 어법상 어색한 부분을 고르시오.",
    sentence: "She don't like apples very much.",
    options: ["She", "don't", "like", "apples", "very much"],
    correct: 1,
    topic: "3인칭 단수"
  },
  {
    id: 28,
    category: "감각적 문법능력",
    type: "objective",
    question: "다음 문장에서 어법상 어색한 부분을 고르시오.",
    sentence: "He plays soccer very good.",
    options: ["He", "plays", "soccer", "very", "good"],
    correct: 4,
    topic: "부사"
  },
  {
    id: 29,
    category: "감각적 문법능력",
    type: "objective",
    question: "다음 문장에서 어법상 어색한 부분을 고르시오.",
    sentence: "They is playing in the park.",
    options: ["They", "is", "playing", "in", "the park"],
    correct: 1,
    topic: "복수 주어"
  },
  {
    id: 30,
    category: "감각적 문법능력",
    type: "objective",
    question: "다음 문장에서 어법상 어색한 부분을 고르시오.",
    sentence: "I want eat some delicious pizza.",
    options: ["I", "want", "eat", "some", "delicious pizza"],
    correct: 2,
    topic: "to부정사"
  },
  {
    id: 31,
    category: "감각적 문법능력",
    type: "objective",
    question: "다음 문장에서 어법상 어색한 부분을 고르시오.",
    sentence: "My hobby is to swimming everyday.",
    options: ["My", "hobby", "is", "to swimming", "everyday"],
    correct: 3,
    topic: "동명사"
  },
  {
    id: 32,
    category: "감각적 문법능력",
    type: "objective",
    question: "다음 문장에서 어법상 어색한 부분을 고르시오.",
    sentence: "She looks very beautifully today.",
    options: ["She", "looks", "very", "beautifully", "today"],
    correct: 3,
    topic: "감각동사"
  },
  {
    id: 33,
    category: "감각적 문법능력",
    type: "objective",
    question: "다음 문장에서 어법상 어색한 부분을 고르시오.",
    sentence: "The book is more interested than the movie.",
    options: ["The book", "is", "more", "interested", "than the movie"],
    correct: 3,
    topic: "형용사"
  },
  {
    id: 34,
    category: "감각적 문법능력",
    type: "objective",
    question: "다음 문장에서 어법상 어색한 부분을 고르시오.",
    sentence: "I like he very much always.",
    options: ["I", "like", "he", "very much", "always"],
    correct: 2,
    topic: "목적격"
  },
  {
    id: 35,
    category: "감각적 문법능력",
    type: "objective",
    question: "다음 문장에서 어법상 어색한 부분을 고르시오.",
    sentence: "We doesn't have enough time.",
    options: ["We", "doesn't", "have", "enough", "time"],
    correct: 1,
    topic: "복수 주어"
  },
  {
    id: 36,
    category: "감각적 문법능력",
    type: "objective",
    question: "올바른 표현을 선택하시오.",
    sentence: "She (look / looks) happy today.",
    options: ["look", "looks"],
    correct: 1,
    topic: "3인칭 단수"
  },
  {
    id: 37,
    category: "감각적 문법능력",
    type: "objective",
    question: "올바른 표현을 선택하시오.",
    sentence: "I like (he / him) very much.",
    options: ["he", "him"],
    correct: 1,
    topic: "목적격"
  },
  {
    id: 38,
    category: "감각적 문법능력",
    type: "objective",
    question: "올바른 표현을 선택하시오.",
    sentence: "The movie is very (interesting / interested).",
    options: ["interesting", "interested"],
    correct: 0,
    topic: "형용사"
  },
  {
    id: 39,
    category: "감각적 문법능력",
    type: "objective",
    question: "올바른 표현을 선택하시오.",
    sentence: "We (don't / doesn't) like coffee.",
    options: ["don't", "doesn't"],
    correct: 0,
    topic: "복수 주어"
  },
  {
    id: 40,
    category: "감각적 문법능력",
    type: "objective",
    question: "올바른 표현을 선택하시오.",
    sentence: "This is (a / an) orange.",
    options: ["a", "an"],
    correct: 1,
    topic: "관사"
  }
]

// 주관식 문제 (41-45번)
const subjectiveQuestions = [
  {
    id: 41,
    category: "주관식 문제",
    type: "subjective",
    question: "다음 우리말을 영어로 완성하시오.",
    korean: "나의 수학책은 나의 영어책보다 두 배나 두껍다.",
    sentence: "My math book is _____________ my English book.",
    hint: "(two times, thick)",
    answers: ["two times thicker than", "twice thicker than", "2 times thicker than"],
    topic: "비교급 + 배수표현"
  },
  {
    id: 42,
    category: "주관식 문제",
    type: "subjective",
    question: "빈칸에 알맞은 be동사를 쓰시오.",
    sentence: "Tom and I _______ best friends. We _______ very happy together.",
    answers: ["are, are", "are are"],
    topic: "be동사 복수형"
  },
  {
    id: 43,
    category: "주관식 문제",
    type: "subjective",
    question: "다음 문장을 의문문으로 바꾸시오.",
    sentence: "She studies English every day.",
    prompt: "→ _____________________________?",
    answers: ["Does she study English every day?", "Does she study English every day"],
    topic: "일반동사 의문문"
  },
  {
    id: 44,
    category: "주관식 문제",
    type: "subjective",
    question: "빈칸에 알맞은 형태로 쓰시오. (동사의 형태 주의, 답을 쉼표로 구분하세요)",
    sentence: "My sister _______ (watch) TV now. My brother _______ (play) soccer every Sunday.",
    answers: ["is watching, plays", "is watching plays", "is watching,plays"],
    topic: "현재진행 vs 현재"
  },
  {
    id: 45,
    category: "주관식 문제",
    type: "subjective",
    question: "다음 우리말을 영어로 완성하시오.",
    korean: "나는 피자 먹는 것을 좋아한다.",
    sentence: "I like _____________ pizza.",
    answers: ["eating", "to eat"],
    topic: "좋아하는 것 표현"
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
      answers: any[]
      score: number
      level: string
      correctCount: number
      totalQuestions: number
    }
  }) => void
}

export default function LevelTest({ onComplete }: LevelTestProps) {
  const [step, setStep] = useState<'grade' | 'info' | 'test' | 'subjective' | 'result'>('grade')
  const [selectedGrade, setSelectedGrade] = useState<string>('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [currentSubjective, setCurrentSubjective] = useState(0)
  const [userInfo, setUserInfo] = useState({
    name: '',
    grade: '',
    phone: '',
    parentPhone: '',
    memo: ''
  })
  const [answers, setAnswers] = useState<number[]>([])
  const [subjectiveAnswers, setSubjectiveAnswers] = useState<string[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [subjectiveInput, setSubjectiveInput] = useState<string>('')
  const [startTime, setStartTime] = useState<Date | null>(null)
  const [showProgress, setShowProgress] = useState(false)

  // 선택된 급수에 따라 문제 선택
  const getQuestionsForGrade = (grade: string) => {
    switch(grade) {
      case '1급':
        return { objective: grade1Questions.objective, subjective: grade1Questions.subjective }
      case '2급':
        return { objective: grade2Questions.objective, subjective: grade2Questions.subjective }
      case '3급':
        return { objective: grade3Questions.objective, subjective: grade3Questions.subjective }
      case '4급':
        return { objective: grade4Questions.objective, subjective: grade4Questions.subjective }
      case '5급':
        return { objective: grade5Questions.objective, subjective: grade5Questions.subjective }
      case '6급':
        return { objective: grade6Questions.objective, subjective: grade6Questions.subjective }
      case '7급':
      default:
        return { objective: testQuestions, subjective: subjectiveQuestions }
    }
  }
  
  const gradeQuestions = getQuestionsForGrade(selectedGrade)
  const currentTestQuestions = gradeQuestions.objective
  const currentSubjectiveQuestions = gradeQuestions.subjective

  const handleSelectGrade = (grade: string) => {
    setSelectedGrade(grade)
    setStep('info')
  }

  const handleStartTest = () => {
    if (!userInfo.name || !userInfo.grade || !userInfo.phone || !userInfo.parentPhone) {
      alert('필수 정보를 모두 입력해주세요. (학부모 연락처 포함)')
      return
    }
    setStartTime(new Date())
    setStep('test')
    setShowProgress(true)
  }

  const handleAnswer = () => {
    if (selectedAnswer === '') {
      alert('답을 선택해주세요!')
      return
    }

    const newAnswers = [...answers, parseInt(selectedAnswer)]
    setAnswers(newAnswers)
    setSelectedAnswer('')

    if (currentQuestion < currentTestQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // 객관식 완료 후 주관식으로 이동
      setStep('subjective')
      setCurrentSubjective(0)
      setSubjectiveInput('')
    }
  }

  // 답변 선택 시 자동으로 다음 문제로 이동
  const handleAnswerSelection = (value: string) => {
    setSelectedAnswer(value)
    
    // 답변이 저장되지 않은 문제에서만 자동 진행
    if (answers.length === currentQuestion) {
      setTimeout(() => {
        const newAnswers = [...answers, parseInt(value)]
        setAnswers(newAnswers)
        setSelectedAnswer('')

        if (currentQuestion < currentTestQuestions.length - 1) {
          setCurrentQuestion(currentQuestion + 1)
        } else {
          // 객관식 완료 후 주관식으로 이동
          setStep('subjective')
          setCurrentSubjective(0)
          setSubjectiveInput('')
        }
      }, 300) // 300ms 딜레이로 선택 확인 후 이동
    }
  }

  const handleSubjectiveAnswer = () => {
    if (subjectiveInput.trim() === '') {
      alert('답을 입력해주세요!')
      return
    }

    const newSubjectiveAnswers = [...subjectiveAnswers, subjectiveInput.trim()]
    setSubjectiveAnswers(newSubjectiveAnswers)
    setSubjectiveInput('')

    if (currentSubjective < currentSubjectiveQuestions.length - 1) {
      setCurrentSubjective(currentSubjective + 1)
    } else {
      calculateResult(answers, newSubjectiveAnswers)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(answers[currentQuestion - 1]?.toString() || '')
    }
  }

  const handlePreviousSubjective = () => {
    if (currentSubjective > 0) {
      setCurrentSubjective(currentSubjective - 1)
      setSubjectiveInput(subjectiveAnswers[currentSubjective - 1] || '')
    } else {
      // 주관식 첫 문제에서 이전 누르면 객관식 마지막으로
      setStep('test')
      setCurrentQuestion(currentTestQuestions.length - 1)
      setSelectedAnswer(answers[currentTestQuestions.length - 1]?.toString() || '')
    }
  }

  const calculateResult = (objectiveAnswers: number[], subjAnswers: string[]) => {
    let correctCount = 0
    
    // 객관식 채점
    currentTestQuestions.forEach((question, index) => {
      if (objectiveAnswers[index] === question.correct) {
        correctCount++
      }
    })

    // 주관식 채점 - 유연한 답변 검증 로직
    currentSubjectiveQuestions.forEach((question, index) => {
      const normalizeAnswer = (text: string) => {
        return text
          .toLowerCase() // 대소문자 구분 없이
          .replace(/[.!?;]/g, '') // 구두점 제거 (마침표, 느낌표, 물음표, 세미콜론)
          .replace(/\s+/g, ' ') // 연속된 공백을 하나로
          .replace(/,\s*/g, ',') // 쉼표 뒤 공백 표준화
          .replace(/wouldn't/g, 'would not')
          .replace(/won't/g, 'will not')
          .replace(/can't/g, 'cannot')
          .replace(/couldn't/g, 'could not')
          .replace(/shouldn't/g, 'should not')
          .replace(/didn't/g, 'did not')
          .replace(/doesn't/g, 'does not')
          .replace(/don't/g, 'do not')
          .replace(/hasn't/g, 'has not')
          .replace(/haven't/g, 'have not')
          .replace(/hadn't/g, 'had not')
          .replace(/isn't/g, 'is not')
          .replace(/aren't/g, 'are not')
          .replace(/wasn't/g, 'was not')
          .replace(/weren't/g, 'were not')
          .replace(/i've/g, 'i have')
          .replace(/you've/g, 'you have')
          .replace(/we've/g, 'we have')
          .replace(/they've/g, 'they have')
          .replace(/he's/g, 'he is')
          .replace(/she's/g, 'she is')
          .replace(/it's/g, 'it is')
          .replace(/that's/g, 'that is')
          .replace(/there's/g, 'there is')
          .replace(/who's/g, 'who is')
          .replace(/what's/g, 'what is')
          .replace(/i'll/g, 'i will')
          .replace(/you'll/g, 'you will')
          .replace(/he'll/g, 'he will')
          .replace(/she'll/g, 'she will')
          .replace(/we'll/g, 'we will')
          .replace(/they'll/g, 'they will')
          .replace(/i'd/g, 'i would')
          .replace(/you'd/g, 'you would')
          .replace(/he'd/g, 'he would')
          .replace(/she'd/g, 'she would')
          .replace(/we'd/g, 'we would')
          .replace(/they'd/g, 'they would')
          .trim()
      }
      
      const userAnswer = normalizeAnswer(subjAnswers[index] || '')
      
      const isCorrect = question.answers.some(answer => {
        const normalizedAnswer = normalizeAnswer(answer)
        // 쉼표로 구분된 답변의 경우 순서 상관없이 비교
        if (normalizedAnswer.includes(',') || userAnswer.includes(',')) {
          const answerParts = normalizedAnswer.split(',').map(s => s.trim()).sort()
          const userParts = userAnswer.split(',').map(s => s.trim()).sort()
          return JSON.stringify(answerParts) === JSON.stringify(userParts)
        }
        return userAnswer === normalizedAnswer
      })
      
      if (isCorrect) {
        correctCount++
      }
    })

    const totalQuestions = currentTestQuestions.length + currentSubjectiveQuestions.length
    const score = Math.round((correctCount / totalQuestions) * 100)
    
    let level = ''
    if (score >= 90) level = 'Advanced'
    else if (score >= 75) level = 'Intermediate'
    else if (score >= 60) level = 'Pre-Intermediate'
    else level = 'Beginner'

    const testResult = {
      answers: [...objectiveAnswers, ...subjAnswers],
      score: correctCount,  // 맞춘 문제 수를 score로 전달
      level,
      correctCount,
      totalQuestions,
      gradeLevel: selectedGrade  // 급수 정보 추가
    }

    setStep('result')
    onComplete({ userInfo, testResult })
  }

  const totalQuestionCount = currentTestQuestions.length + currentSubjectiveQuestions.length
  const currentQuestionNumber = step === 'test' 
    ? currentQuestion + 1 
    : step === 'subjective' 
      ? currentTestQuestions.length + currentSubjective + 1
      : 0
  const progress = (currentQuestionNumber / totalQuestionCount) * 100

  return (
    <div className="max-w-4xl mx-auto">
      {step === 'grade' && (
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">급수 선택</CardTitle>
            <CardDescription className="text-center">
              자신의 학년에 맞는 급수를 선택해주세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(gradeInfo).map(([key, info]) => (
                <Button
                  key={key}
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-start text-left hover:bg-blue-50 hover:border-blue-500"
                  onClick={() => handleSelectGrade(key)}
                >
                  <div className="font-bold text-lg mb-1">{info.level}</div>
                  <div className="text-sm text-gray-600 mb-1">추천 학년: {info.grade}</div>
                  <div className="text-xs text-gray-500">{info.description}</div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {step === 'info' && (
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Target className="text-blue-600 w-8 h-8" />
            </div>
            <CardTitle className="text-2xl">{selectedGrade} 영어문법 진단테스트</CardTitle>
            <CardDescription className="text-lg mt-2">
              {gradeInfo[selectedGrade as keyof typeof gradeInfo]?.grade} 수준 - {gradeInfo[selectedGrade as keyof typeof gradeInfo]?.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                테스트 구성
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• 총 45문항 (객관식 40문항 + 주관식 5문항)</li>
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
                <Label htmlFor="parentPhone">학부모 연락처 <span className="text-red-500">*</span></Label>
                <Input
                  id="parentPhone"
                  value={userInfo.parentPhone}
                  onChange={(e) => setUserInfo({...userInfo, parentPhone: e.target.value})}
                  placeholder="010-0000-0000"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="memo">상담 시 참고사항 (선택)</Label>
                <Textarea
                  id="memo"
                  value={userInfo.memo}
                  onChange={(e) => setUserInfo({...userInfo, memo: e.target.value})}
                  placeholder="상담 시 참고하실 내용이나 질문사항을 입력해주세요."
                  rows={3}
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
                문제 {currentQuestion + 1} / {totalQuestionCount}
              </CardTitle>
              {selectedLevel === '1급' && (
                <span className="text-sm text-gray-500">
                  {(currentTestQuestions[currentQuestion] as any).category}
                </span>
              )}
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
                  {currentTestQuestions[currentQuestion].question}
                </p>
                {currentTestQuestions[currentQuestion].sentence && (
                  <p className="text-lg bg-white p-3 rounded border">
                    {currentTestQuestions[currentQuestion].sentence}
                  </p>
                )}
              </div>

              <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelection}>
                <div className="space-y-3">
                  {currentTestQuestions[currentQuestion].options.map((option, index) => (
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
                className={currentQuestion > 0 ? "bg-yellow-100 hover:bg-yellow-200 border-yellow-400 text-yellow-800" : ""}
              >
                <ChevronLeft className="mr-2" />
                이전
              </Button>
              {/* 마지막 문제이거나 이미 답변한 문제일 때만 다음 버튼 표시 */}
              {(currentQuestion === currentTestQuestions.length - 1 || answers.length > currentQuestion) && (
                <Button
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={handleAnswer}
                >
                  {currentQuestion === currentTestQuestions.length - 1 ? '주관식으로' : '다음'}
                  <ChevronRight className="ml-2" />
                </Button>
              )}
              {/* 아직 답변하지 않은 문제에서는 힌트 텍스트 표시 */}
              {currentQuestion < currentTestQuestions.length - 1 && answers.length === currentQuestion && (
                <div className="text-sm text-gray-500 flex items-center">
                  답변을 선택하면 자동으로 다음 문제로 이동합니다
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {step === 'subjective' && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <CardTitle>
                문제 {currentTestQuestions.length + currentSubjective + 1} / {totalQuestionCount}
              </CardTitle>
              <span className="text-sm text-gray-500">
                주관식 문제
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
                  {currentSubjectiveQuestions[currentSubjective].question}
                </p>
                {currentSubjectiveQuestions[currentSubjective].korean && (
                  <p className="text-base text-gray-700 mb-2">
                    {currentSubjectiveQuestions[currentSubjective].korean}
                  </p>
                )}
                {currentSubjectiveQuestions[currentSubjective].sentence && (
                  <p className="text-lg bg-white p-3 rounded border font-mono">
                    {currentSubjectiveQuestions[currentSubjective].sentence}
                  </p>
                )}
                {currentSubjectiveQuestions[currentSubjective].prompt && (
                  <p className="text-lg mt-2">
                    {currentSubjectiveQuestions[currentSubjective].prompt}
                  </p>
                )}
                {currentSubjectiveQuestions[currentSubjective].hint && (
                  <p className="text-sm text-gray-500 mt-2">
                    힌트: {currentSubjectiveQuestions[currentSubjective].hint}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="subjective-answer">답안 입력</Label>
                <Input
                  id="subjective-answer"
                  value={subjectiveInput}
                  onChange={(e) => setSubjectiveInput(e.target.value)}
                  placeholder="답을 입력하세요"
                  className="mt-2 text-lg"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSubjectiveAnswer()
                    }
                  }}
                />
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={handlePreviousSubjective}
                className="bg-yellow-100 hover:bg-yellow-200 border-yellow-400 text-yellow-800"
              >
                <ChevronLeft className="mr-2" />
                이전
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={handleSubjectiveAnswer}
              >
                {currentSubjective === currentSubjectiveQuestions.length - 1 ? '제출하기' : '다음'}
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