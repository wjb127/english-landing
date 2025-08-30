"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default function AnswerKeyPage() {
  const answerData = {
    "3급": {
      grade: "중학교 2학년 2학기",
      sections: [
        {
          title: "I. 인지 능력 문제 (1-25번)",
          answers: [
            "① (that)", "① (has been)", "① (had better)", "① (is)", "① (how)",
            "② (talking)", "① (Being)", "③ (where)", "① (which)", "② (could)",
            "③ (happily)", "④ (lock)", "② (are)", "③ (to meet → meeting)", "⑤ (is → are)",
            "⑤ (to finish → finishing)", "⑤ (to solve → solving)", "⑤ (showed → shown)", 
            "② (can → could)", "⑤ (I knew → did I know)", "① (Each)", "② (being)",
            "① (why)", "② (Although)", "② (which)"
          ]
        },
        {
          title: "II. 감각 능력 문제 (26-45번)",
          answers: [
            "(B) what → that", "(C) studied → studying", "(B) are → is", "(C) to meeting → meeting",
            "(C) to raining → to be raining", "(A) Study → Studying", "(C) are → is", 
            "(C) to having → to have", "(C) can → could", "(B) that → which",
            "(C) has → have", "(D) shocked → was shocked", "(D) than → to",
            "(D) goes → go/should go", "(C) are → is", "(C) happily → happy",
            "(D) to read → reading", "(C) wants → want", "(B) he will arrive → he arrives",
            "(D) so → as"
          ]
        },
        {
          title: "III. 주관식 영작 (46-50번)",
          answers: [
            "46. That he is honest is known to everyone / Everyone knows that he is honest",
            "47. As it was raining, we canceled the game / It raining, we canceled the game",
            "48. if/whether, can",
            "49. is, read",
            "50. who/that, will"
          ]
        }
      ]
    },
    "4급": {
      grade: "중학교 2학년 1학기",
      sections: [
        {
          title: "I. 인지 능력 문제 (1-25번)",
          answers: [
            "② (have been)", "③ (is read)", "③ (should)", "② (what)", "② (are)",
            "③ (at)", "③ (to buy)", "① (president)", "② (difficult)", "② (the better)",
            "② (to talk)", "① (must finish)", "④ (when should I leave)", 
            "① (have been there last year → went there)", "③ (I was boring → I was bored)",
            "④ (Neither of them are → is)", "④ (enjoy to read → enjoy reading)",
            "⑤ (has stolen → was stolen)", "③ (since 5 years ago → for 5 years)",
            "⑤ (If I study more → As I study more)", "② (are)", "③ (meeting)",
            "① (why)", "② (How)", "④ (such a kind)"
          ]
        },
        {
          title: "II. 감각 능력 문제 (26-45번)",
          answers: [
            "(B) have seen → saw", "(D) she → her", "(B) or → nor", "(B) which → who/that",
            "(C) were → was", "(C) to studying → to study", "(D) is he doing → he is doing",
            "(C) built → was built", "(B) has gone → has been", "(C) get up → getting up",
            "(D) to write → write", "(B) are → is", "(D) to can't → that she can't",
            "(D) to honest → to be honest", "(D) he helped → helped", "(C) bored → boring",
            "(D) than → to", "(D) to understand → understanding", "(D) the more safe → the safer",
            "(B) have lived → has lived"
          ]
        },
        {
          title: "III. 주관식 영작 (46-50번)",
          answers: [
            "46. I have met him (before)",
            "47. was, written",
            "48. what, wants",
            "49. She made me happy",
            "50. whom/who/that, met"
          ]
        }
      ]
    },
    "5급": {
      grade: "중학교 1학년",
      sections: [
        {
          title: "I. 인지 능력 문제 (1-25번)",
          answers: [
            "① (why)", "② (knows)", "① (can)", "② (to)", "② (delicious)",
            "① (him)", "① (clean)", "③ (to read)", "④ (sleeping)", "② (interested)",
            "③ (to study)", "② (are)", "② (Unless)", "① (is)", "② (to)",
            "③ (studying)", "② (how)", "① (is)", "② (like)", "② (until)",
            "⑤ (to watching)", "② (are)", "③ (excited)", 
            "① (I went to shopping → I went shopping)", 
            "⑤ (Because of I missed → Because I missed)"
          ]
        },
        {
          title: "II. 감각 능력 문제 (26-45번)",
          answers: [
            "(B) have → has", "(D) go → to go", "(C) are → is", "(C) to listen → listening",
            "(D) to cry → cry", "(C) interested → interesting", "(C) is → are",
            "(C) many work → much work", "(D) to enter → enter", "(D) will wait → wait",
            "(C) are → is", "(D) than → to", "(D) to understand → understanding",
            "(D) as Tom → Tom", "(B) have → has", "(C) happily → happy",
            "(D) should I do → I should do", "(C) but → 삭제", "(B) are → is",
            "(C) understands → understand"
          ]
        },
        {
          title: "III. 주관식 영작 (46-50번)",
          answers: [
            "46. Everyone knows the news",
            "47. me, to",
            "48. Though/Although, finished",
            "49. I have many books to read",
            "50. was, to"
          ]
        }
      ]
    },
    "6급": {
      grade: "초등학교 6학년",
      sections: [
        {
          title: "I. 인지 능력 문제 (1-25번)",
          answers: [
            "③ (went)", "④ (were)", "② (goes)", "① (do)", "① (when)",
            "① (something)", "① (me)", "① (happy)", "② (more interesting)", "① (enough)",
            "① (since)", "② (did)", "② (would)", "① (had)", "① (is)",
            "③ (I have to go)", "⑤ (going shopping)", "① (studying)", "① (the most)",
            "③ (the tallest)", "① (There was a book)", "⑤ (met → have met)",
            "④ (until he arrives)", "② (My bike was stolen)", "① (How)"
          ]
        },
        {
          title: "II. 감각 능력 문제 (26-45번)",
          answers: [
            "(D) did I want → I wanted", "(C) goes → gone", "(B) is → are", "(B) give → gave",
            "(D) to eating → to eat", "(B) was → were", "(D) to seeing → to see",
            "(C) speaks → speak", "(C) to home → home", "(D) bored → boring",
            "(C) has → have", "(C) meet → met", "(B) she was tired → 전체 구조 오류",
            "(B) will → will be", "(C) likes → like", "(B) likes → like",
            "(D) himself → herself", "(B) will have → have", "(B) what → which/that",
            "(C) more faster → faster"
          ]
        },
        {
          title: "III. 주관식 영작 (46-50번)",
          answers: [
            "46. She went to the library yesterday",
            "47. If the weather is nice, we will go on a picnic",
            "48. is, are",
            "49. went, played",
            "50. I was happy to meet him"
          ]
        }
      ]
    },
    "7급": {
      grade: "초등학교 5학년",
      sections: [
        {
          title: "Part A: 인지 능력 문제 (1-25번)",
          answers: [
            "② (is)", "② (She doesn't like pizza)", "② (Are they happy?)", "③ (studies)",
            "③ (It fly in the sky)", "③ (The boy runs fast)", "② (her)", "② (He helps me)",
            "② (I see them)", "② (beautiful)", "② (She looks happy)", "② (She became a teacher)",
            "② (to eat)", "② (I like reading books)", "② (My hobby is singing)",
            "② (to become)", "② (well)", "② (He is a careful driver)", 
            "① (What a beautiful flower!)", "③ (because)", "① (I like apples and oranges)",
            "③ (It was raining, so we stayed home)", "② (taller)", 
            "③ (She is prettier than her sister)", "③ (He is the tallest in the class)"
          ]
        },
        {
          title: "Part B: 감각 능력 문제 (26-45번)",
          answers: [
            "(B) is → are", "(C) goes → go", "(B) do → does", "(C) looks → look",
            "(D) wasn't → weren't", "(C) he → him", "(C) on → at", "(D) every days → every day",
            "(B) will → would", "(C) is → was", "(D) most → more", "(C) finished → have finished",
            "(D) play → to play", "(C) buyed → bought", "(B) will → would",
            "(D) interested → interesting", "(C) did → do", "(C) when → until",
            "(C) are → is", "(B) more 삭제"
          ]
        },
        {
          title: "Part C: 영작 능력 (46-50번)",
          answers: [
            "46. I get up at 7 (o'clock) every morning / I wake up at 7 every morning",
            "47. She is an English teacher",
            "48. Do, Does",
            "49. We are doing (our) homework now",
            "50. He went to the park yesterday"
          ]
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-2">영어 문법 진단테스트 정답표</h1>
          <p className="text-center text-gray-600">new_test 폴더 기준</p>
        </div>

        <Tabs defaultValue="3급" className="w-full">
          <TabsList className="grid grid-cols-5 w-full max-w-3xl mx-auto mb-8">
            {Object.keys(answerData).map((level) => (
              <TabsTrigger key={level} value={level}>
                {level}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(answerData).map(([level, data]) => (
            <TabsContent key={level} value={level}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{level} 정답표</span>
                    <Badge variant="outline" className="text-sm">
                      {data.grade}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {data.sections.map((section, idx) => (
                      <div key={idx}>
                        <h3 className="font-semibold text-lg mb-4 text-gray-800 border-b pb-2">
                          {section.title}
                        </h3>
                        {section.title.includes("주관식") ? (
                          <div className="space-y-2">
                            {section.answers.map((answer, ansIdx) => (
                              <div key={ansIdx} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                <p className="text-sm text-gray-700 break-all">{answer}</p>
                              </div>
                            ))}
                            <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                              <p className="text-sm text-gray-600 flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                                <span>
                                  슬래시(/)로 구분된 복수 정답 모두 인정, 괄호 안의 내용은 선택사항
                                </span>
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                            {section.answers.map((answer, ansIdx) => (
                              <div
                                key={ansIdx}
                                className="bg-white border rounded-lg p-3 text-center hover:shadow-sm transition-shadow"
                              >
                                <div className="font-semibold text-sm text-gray-500 mb-1">
                                  {section.title.includes("감각") ? ansIdx + 26 : ansIdx + 1}번
                                </div>
                                <div className="text-sm font-medium text-gray-800">
                                  {answer}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-2">채점 기준</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 객관식 & 오류 찾기: 정답과 정확히 일치해야 정답 인정</li>
                      <li>• 주관식: 문법적으로 맞으면 정답 (대소문자 구분 없음)</li>
                      <li>• 총 50문제 (객관식 25 + 오류 찾기 20 + 주관식 5)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}