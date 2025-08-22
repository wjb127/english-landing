// 급수별 테스트 데이터
export const gradeInfo = {
  '1급': { level: '1급', grade: '고2~고3', description: '최고 수준의 영어 실력' },
  '2급': { level: '2급', grade: '고1~고2', description: '고급 영어 실력' },
  '3급': { level: '3급', grade: '중3~고1', description: '중상급 영어 실력' },
  '4급': { level: '4급', grade: '중2~중3', description: '중급 영어 실력' },
  '5급': { level: '5급', grade: '중1~중2', description: '초중급 영어 실력' },
  '6급': { level: '6급', grade: '초6~중1', description: '초급 영어 실력' },
  '7급': { level: '7급', grade: '초5~초6', description: '기초 영어 실력' },
}

// 6급 테스트 문제 (초등학교 6학년 수준)
export const grade6Questions = {
  objective: [
    {
      id: 1,
      question: "다음 빈칸에 알맞은 것을 고르시오.",
      sentence: "Where _______ you go yesterday?",
      options: ["do", "does", "did", "will", "are"],
      correct: 2
    },
    {
      id: 2,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "She can plays the piano.",
        "She can play the piano.",
        "She can playing the piano.",
        "She can to play the piano.",
        "She cans play the piano."
      ],
      correct: 1
    },
    {
      id: 3,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "There _______ many students in the classroom.",
      options: ["is", "are", "am", "be", "was"],
      correct: 1
    },
    {
      id: 4,
      question: "다음 문장의 의미로 올바른 것은?",
      sentence: "I didn't go to school yesterday.",
      options: [
        "나는 어제 학교에 갔다.",
        "나는 어제 학교에 가지 않았다.",
        "나는 학교에 가고 싶지 않다.",
        "나는 매일 학교에 간다.",
        "나는 내일 학교에 갈 것이다."
      ],
      correct: 1
    },
    {
      id: 5,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "My father _______ to work by car every day.",
      options: ["go", "goes", "going", "went", "will go"],
      correct: 1
    },
    // ... 더 많은 문제들 추가
  ],
  subjective: [
    {
      id: 46,
      question: "다음 문장을 과거형으로 바꾸시오.",
      sentence: "She goes to school by bus every day.",
      answers: ["She went to school by bus every day.", "She went to school by bus every day"]
    },
    {
      id: 47,
      question: "빈칸에 알맞은 be동사를 쓰시오. (쉼표로 구분)",
      sentence: "There _______ a book on the table. There _______ many people in the park.",
      answers: ["is, are", "is,are"]
    },
    {
      id: 48,
      question: "다음 문장을 의문문으로 바꾸시오.",
      sentence: "They played soccer yesterday.",
      answers: ["Did they play soccer yesterday?", "Did they play soccer yesterday"]
    },
    {
      id: 49,
      question: "빈칸에 알맞은 형태로 쓰시오. (쉼표로 구분)",
      sentence: "She _______ (can, play) the piano very well. I want _______ (eat) some pizza.",
      answers: ["can play, to eat", "can play,to eat"]
    },
    {
      id: 50,
      question: "다음 우리말을 영어로 완성하시오.",
      sentence: "나는 그에게 선물을 주었다. = I _______ a present.",
      answers: ["gave him", "gave him a", "gave to him"]
    }
  ]
}

// 7급은 기존 testQuestions와 subjectiveQuestions 사용