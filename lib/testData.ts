// 급수별 테스트 데이터
export const gradeInfo = {
  '1급': { level: '1급', grade: '고1', description: '고등학교 1학년' },
  '2급': { level: '2급', grade: '중3', description: '중학교 3학년 수준/고급 문법' },
  '3급': { level: '3급', grade: '중2', description: '중학교 2학년 2학기 수준/복합 문법' },
  '4급': { level: '4급', grade: '중2', description: '중학교 2학년 1학기 수준/심화 문법' },
  '5급': { level: '5급', grade: '중1', description: '중학교 1학년 수준/문법의 체계적 이해' },
  '6급': { level: '6급', grade: '초6', description: '초등학교 6학년' },
  '7급': { level: '7급', grade: '초5', description: '초등학교 5학년' },
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

// 3급 테스트 문제 (중3~고1 수준)
export const grade3Questions = {
  objective: [
    {
      id: 1,
      question: "다음 빈칸에 알맞은 것을 고르시오.",
      sentence: "I think _______ he will pass the exam.",
      options: ["that", "what", "which", "whether", "if"],
      correct: 0
    },
    {
      id: 2,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "I have been studying for three hours.",
        "I have been study for three hours.",
        "I have studying for three hours.",
        "I have been studied for three hours.",
        "I am studying for three hours."
      ],
      correct: 0
    },
    {
      id: 3,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "He _______ be at home now. I saw him there a minute ago.",
      options: ["must", "may", "might", "can't", "could"],
      correct: 0
    },
    {
      id: 4,
      question: "다음 중 수동태로 올바른 것은? \"They look after the children well.\"",
      options: [
        "The children are looked after well by them.",
        "The children are looked well by them.",
        "The children look after well by them.",
        "The children are well looked after them.",
        "The children looked after well by them."
      ],
      correct: 0
    },
    {
      id: 5,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "She was given a beautiful dress _______ her mother.",
      options: ["from", "by", "with", "of", "to"],
      correct: 1
    },
    {
      id: 6,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "The number of students are increasing.",
        "A number of students is absent today.",
        "The number of students is increasing.",
        "A number of student are absent today.",
        "The numbers of students is increasing."
      ],
      correct: 2
    },
    {
      id: 7,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "A lot of water _______ wasted every day.",
      options: ["are", "is", "have", "were", "has"],
      correct: 1
    },
    {
      id: 8,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "What he said are true.",
        "What he said is true.",
        "What he said were true.",
        "What he says are true.",
        "What he say is true."
      ],
      correct: 1
    },
    {
      id: 9,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "I enjoy _______ music in my free time.",
      options: ["listen to", "listening to", "to listen", "listened to", "listen"],
      correct: 1
    },
    {
      id: 10,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "I can't decide whether go or not.",
        "I can't decide whether to go or not.",
        "I can't decide whether going or not.",
        "I can't decide whether went or not.",
        "I can't decide whether will go or not."
      ],
      correct: 1
    },
    {
      id: 11,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "I believe _______ she is honest.",
      options: ["what", "that", "which", "who", "whose"],
      correct: 1
    },
    {
      id: 12,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "She seems be happy today.",
        "She seems to be happy today.",
        "She seems being happy today.",
        "She seems been happy today.",
        "She seem to be happy today."
      ],
      correct: 1
    },
    {
      id: 13,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "I saw him _______ in the garden.",
      options: ["worked", "working", "to work", "works", "work"],
      correct: 1
    },
    {
      id: 14,
      question: "다음 중 to부정사와 동명사의 의미가 다른 것은?",
      options: [
        "I like to swim. / I like swimming.",
        "I want to eat. / I want eating.",
        "I remember to lock the door. / I remember locking the door.",
        "I love to read. / I love reading.",
        "I prefer to walk. / I prefer walking."
      ],
      correct: 2
    },
    {
      id: 15,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "_______ is important to exercise regularly.",
      options: ["That", "This", "It", "What", "Which"],
      correct: 2
    },
    {
      id: 16,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "The book what I read yesterday was interesting.",
        "The book that I read yesterday was interesting.",
        "The book which what I read yesterday was interesting.",
        "The book who I read yesterday was interesting.",
        "The book where I read yesterday was interesting."
      ],
      correct: 1
    },
    {
      id: 17,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "The boy _______ bike was stolen is crying.",
      options: ["who", "whom", "whose", "which", "that"],
      correct: 2
    },
    {
      id: 18,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "This is the school which I study.",
        "This is the school where I study.",
        "This is the school that I study.",
        "This is the school who I study.",
        "This is the school whom I study."
      ],
      correct: 1
    },
    {
      id: 19,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "I know the reason _______ he was late.",
      options: ["which", "that", "what", "why", "when"],
      correct: 3
    },
    {
      id: 20,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "This is how he solved the problem.",
        "This is the way how he solved the problem.",
        "This is what way he solved the problem.",
        "This is how way he solved the problem.",
        "This is the how he solved the problem."
      ],
      correct: 0
    },
    {
      id: 21,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "I wish I _______ taller than I am now.",
      options: ["am", "was", "were", "will be", "have been"],
      correct: 2
    },
    {
      id: 22,
      question: "다음 중 화법전환이 올바른 것은? He said, \"I am busy now.\"",
      options: [
        "He said that he is busy then.",
        "He said that he was busy now.",
        "He said that he was busy then.",
        "He said that he will be busy then.",
        "He said that I was busy then."
      ],
      correct: 2
    },
    {
      id: 23,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "He runs as _______ as his brother does.",
      options: ["fast", "faster", "fastest", "more fast", "most fast"],
      correct: 0
    },
    {
      id: 24,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "He likes not only music but also art.",
        "He likes not only music but art also.",
        "He not only likes music but also art.",
        "He likes not music only but also art.",
        "Not only he likes music but also art."
      ],
      correct: 0
    },
    {
      id: 25,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "She is _______ a teacher _______ a good friend.",
      options: ["not / but", "not only / but also", "neither / nor", "either / or", "both / and"],
      correct: 1
    }
  ],
  subjective: [
    {
      id: 46,
      question: "다음 문장을 4형식 수동태로 바꾸시오.",
      sentence: "My father gave me this watch.",
      answers: [
        "I was given this watch by my father.",
        "I was given this watch by my father",
        "This watch was given to me by my father.",
        "This watch was given to me by my father"
      ]
    },
    {
      id: 47,
      question: "다음 두 문장을 관계대명사를 사용하여 하나로 연결하시오.",
      sentence: "I know the man. His son is a famous actor.",
      answers: [
        "I know the man whose son is a famous actor.",
        "I know the man whose son is a famous actor"
      ]
    },
    {
      id: 48,
      question: "다음 우리말을 영어로 완성하시오. (가주어 it)",
      sentence: "매일 운동하는 것은 건강에 좋다. = _______ is good for health _______ exercise every day.",
      answers: ["It, to", "It,to"]
    },
    {
      id: 49,
      question: "다음 문장을 간접화법으로 바꾸시오.",
      sentence: "She said, \"I will visit you tomorrow.\"",
      answers: [
        "She said that she would visit me the next day.",
        "She said that she would visit me the next day",
        "She said she would visit me the next day.",
        "She said she would visit me the next day"
      ]
    },
    {
      id: 50,
      question: "다음 우리말을 영어로 완성하시오. (소망 표현)",
      sentence: "나는 그때 그곳에 있었으면 좋았을 텐데. = I wish _________________________________ there then.",
      answers: ["I had been", "i had been"]
    }
  ]
}

// 4급 테스트 문제 (중2~중3 수준)
export const grade4Questions = {
  objective: [
    {
      id: 1,
      question: "다음 빈칸에 알맞은 것을 고르시오.",
      sentence: "I wonder _______ so late last night.",
      options: ["why did he come home", "why he came home", "why does he come home", "why he comes home", "why he had come home"],
      correct: 1
    },
    {
      id: 2,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "I have went to Seoul many times.",
        "I have been to Seoul many times.",
        "I have gone to Seoul many times.",
        "I have been gone to Seoul many times.",
        "I have being to Seoul many times."
      ],
      correct: 1
    },
    {
      id: 3,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "She _______ her homework for two hours.",
      options: ["does", "did", "has done", "has been doing", "will do"],
      correct: 3
    },
    {
      id: 4,
      question: "다음 문장의 의미로 올바른 것은? \"You should study harder.\"",
      options: [
        "너는 더 열심히 공부할 수 있다.",
        "너는 더 열심히 공부해야 한다.",
        "너는 더 열심히 공부하고 있다.",
        "너는 더 열심히 공부했다.",
        "너는 더 열심히 공부할 것이다."
      ],
      correct: 1
    },
    {
      id: 5,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "This book _______ by many people.",
      options: ["reads", "is read", "read", "reading", "to read"],
      correct: 1
    },
    {
      id: 6,
      question: "다음 중 수동태로 바꿀 수 없는 것은?",
      options: [
        "She teaches English.",
        "They built a house.",
        "He looks happy.",
        "I wrote a letter.",
        "We clean the room."
      ],
      correct: 2
    },
    {
      id: 7,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "Either Tom or his friends _______ coming to the party.",
      options: ["is", "are", "was", "has", "have"],
      correct: 1
    },
    {
      id: 8,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "Neither the teacher nor the students was happy.",
        "Neither the teacher nor the students were happy.",
        "Neither the teacher nor the student were happy.",
        "Neither the teachers nor the student were happy.",
        "Neither teachers nor student was happy."
      ],
      correct: 1
    },
    {
      id: 9,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "We should discuss _______ this problem carefully.",
      options: ["about", "on", "for", "with", "(no preposition)"],
      correct: 4
    },
    {
      id: 10,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "I'm good at play the piano.",
        "I'm good at playing the piano.",
        "I'm good at to play the piano.",
        "I'm good at played the piano.",
        "I'm good in playing the piano."
      ],
      correct: 1
    },
    {
      id: 11,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "I don't know _______ this computer.",
      options: ["how use", "how to use", "how using", "how used", "how I use"],
      correct: 1
    },
    {
      id: 12,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "We elected him president.",
        "We elected him a president.",
        "We elected him to president.",
        "We elected him as president.",
        "We elected him for president."
      ],
      correct: 0
    },
    {
      id: 13,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "The news made me _______.",
      options: ["surprising", "surprised", "surprise", "to surprise", "being surprised"],
      correct: 1
    },
    {
      id: 14,
      question: "다음 중 어법상 틀린 것은?",
      options: [
        "I saw him cross the street.",
        "I saw him crossing the street.",
        "I saw him to cross the street.",
        "She made me laugh.",
        "They let us go home early."
      ],
      correct: 2
    },
    {
      id: 15,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "_______ is my favorite hobby.",
      options: ["Read books", "Reading books", "To reading books", "Books reading", "Read book"],
      correct: 1
    },
    {
      id: 16,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "I'm exciting about the trip.",
        "I'm excited about the trip.",
        "The trip is excited.",
        "I'm excitement about the trip.",
        "The trip makes me exciting."
      ],
      correct: 1
    },
    {
      id: 17,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "The man _______ is my uncle.",
      options: ["stands there", "standing there", "stood there", "to stand there", "who stand there"],
      correct: 1
    },
    {
      id: 18,
      question: "다음 중 관계대명사가 생략 가능한 것은?",
      options: [
        "The book which is on the table is mine.",
        "The book which I bought yesterday is interesting.",
        "The man who came here is my friend.",
        "The girl who is singing is my sister.",
        "The house which was built last year is beautiful."
      ],
      correct: 1
    },
    {
      id: 19,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "I bought some flowers _______ my mother would be happy.",
      options: ["so that", "so as", "in order", "because", "since"],
      correct: 0
    },
    {
      id: 20,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "The box is too heavy for me to carry it.",
        "The box is too heavy for me to carry.",
        "The box is so heavy for me to carry.",
        "The box is enough heavy for me to carry.",
        "The box is very heavy for me to carry."
      ],
      correct: 1
    },
    {
      id: 21,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "_______ you study, _______ your grades will be.",
      options: ["The harder / the better", "The more hard / the more good", "Harder / better", "The hardest / the best", "More harder / more better"],
      correct: 0
    },
    {
      id: 22,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "This movie is superior than that one.",
        "This movie is superior to that one.",
        "This movie is superior from that one.",
        "This movie is superior of that one.",
        "This movie is superior with that one."
      ],
      correct: 1
    },
    {
      id: 23,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "He _______ work hard when he was young.",
      options: ["did", "does", "do", "was", "has"],
      correct: 0
    },
    {
      id: 24,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "Not all students like math.",
        "All students don't like math.",
        "Students all don't like math.",
        "Students don't all like math.",
        "Don't all students like math."
      ],
      correct: 0
    },
    {
      id: 25,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "I know the reason _______ he was absent.",
      options: ["which", "that", "why", "when", "where"],
      correct: 2
    }
  ],
  subjective: [
    {
      id: 46,
      question: "다음 문장을 수동태로 바꾸시오.",
      sentence: "Someone has stolen my bicycle.",
      answers: [
        "My bicycle has been stolen.",
        "My bicycle has been stolen",
        "My bicycle has been stolen by someone.",
        "My bicycle has been stolen by someone"
      ]
    },
    {
      id: 47,
      question: "다음 두 문장을 관계대명사를 사용하여 하나로 연결하시오.",
      sentence: "I met a man yesterday. He speaks five languages.",
      answers: [
        "I met a man yesterday who speaks five languages.",
        "I met a man yesterday who speaks five languages",
        "I met a man who speaks five languages yesterday.",
        "I met a man who speaks five languages yesterday"
      ]
    },
    {
      id: 48,
      question: "빈칸에 알맞은 형태로 쓰시오.",
      sentence: "I'm _____________ (surprise) at the news. The news is _____________ (surprise) to me.",
      answers: ["surprised, surprising", "surprised,surprising"]
    },
    {
      id: 49,
      question: "다음 우리말을 영어로 완성하시오. (목적 표현)",
      sentence: "나는 영어를 잘하기 위해 열심히 공부한다. = I study hard _________________________________ English well.",
      answers: ["so that I can speak", "in order to speak", "to speak"]
    },
    {
      id: 50,
      question: "다음 문장을 완성하시오. (부분부정)",
      sentence: "모든 학생이 수학을 좋아하는 것은 아니다. = _________________________________ like math.",
      answers: ["Not all students", "not all students"]
    }
  ]
}

// 5급 테스트 문제 (중1~중2 수준)
export const grade5Questions = {
  objective: [
    {
      id: 1,
      question: "다음 빈칸에 알맞은 것을 고르시오.",
      sentence: "I don't know where _______ last night.",
      options: ["did he go", "he went", "does he go", "he goes", "went he"],
      correct: 1
    },
    {
      id: 2,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "You must to study hard.",
        "You must study hard.",
        "You must studying hard.",
        "You musts study hard.",
        "You must studied hard."
      ],
      correct: 1
    },
    {
      id: 3,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "_______ you help me with this problem?",
      options: ["Can", "Must", "Should", "Would", "Might"],
      correct: 0
    },
    {
      id: 4,
      question: "다음 문장의 의미로 올바른 것은? \"Could you open the window?\"",
      options: [
        "너는 창문을 열 수 있니?",
        "창문을 열어주시겠어요?",
        "너는 창문을 열어야 한다.",
        "창문을 열지 마세요.",
        "창문이 열려 있나요?"
      ],
      correct: 1
    },
    {
      id: 5,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "Everyone _______ ready for the test.",
      options: ["are", "is", "have", "were", "has been"],
      correct: 1
    },
    {
      id: 6,
      question: "다음 중 어법상 틀린 것은?",
      options: [
        "Each student has a book.",
        "Somebody is calling you.",
        "Everyone are happy today.",
        "Nobody knows the answer.",
        "Everybody likes ice cream."
      ],
      correct: 2
    },
    {
      id: 7,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "Both Tom and Jerry _______ good at English.",
      options: ["is", "are", "was", "has", "have"],
      correct: 1
    },
    {
      id: 8,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "Several students was absent.",
        "Several students were absent.",
        "Several student were absent.",
        "Several students is absent.",
        "Several student was absent."
      ],
      correct: 1
    },
    {
      id: 9,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "My clothes _______ dirty, so I need to wash them.",
      options: ["is", "are", "was", "has", "have"],
      correct: 1
    },
    {
      id: 10,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "The box of apples are heavy.",
        "The box of apples is heavy.",
        "The box of apple is heavy.",
        "The box of apples were heavy.",
        "The box of apple are heavy."
      ],
      correct: 1
    },
    {
      id: 11,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "She _______ me a beautiful present yesterday.",
      options: ["give", "gives", "gave", "given", "giving"],
      correct: 2
    },
    {
      id: 12,
      question: "다음 문장을 3형식으로 바꾸면? \"I gave him a book.\"",
      options: [
        "I gave a book him.",
        "I gave a book to him.",
        "I gave to him a book.",
        "A book gave I to him.",
        "Him gave I a book."
      ],
      correct: 1
    },
    {
      id: 13,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "We are looking _______ our lost cat.",
      options: ["at", "for", "after", "up", "into"],
      correct: 1
    },
    {
      id: 14,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "She looks like happy.",
        "She looks happily.",
        "She looks happy.",
        "She looks happiness.",
        "She look happy."
      ],
      correct: 2
    },
    {
      id: 15,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "The weather is getting _______.",
      options: ["warm", "warmly", "more warm", "warmness", "warmer"],
      correct: 4
    },
    {
      id: 16,
      question: "다음 중 5형식 문장은?",
      options: [
        "I found the key.",
        "She looks tired.",
        "We made him happy.",
        "They arrived late.",
        "He gave me advice."
      ],
      correct: 2
    },
    {
      id: 17,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "I like _______ books in my free time.",
      options: ["read", "to read", "reading", "both ② and ③", "reads"],
      correct: 3
    },
    {
      id: 18,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "I have something eat.",
        "I have something to eat.",
        "I have something eating.",
        "I have something ate.",
        "I have eat something."
      ],
      correct: 1
    },
    {
      id: 19,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "The movie was very _______.",
      options: ["interesting", "interested", "interest", "interestingly", "interests"],
      correct: 0
    },
    {
      id: 20,
      question: "다음 중 어법상 틀린 것은?",
      options: [
        "I'm interested in music.",
        "The book is very interesting.",
        "She feels boring today.",
        "The class was exciting.",
        "We were surprised at the news."
      ],
      correct: 2
    },
    {
      id: 21,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "When he _______ home, I will call you.",
      options: ["come", "comes", "will come", "came", "coming"],
      correct: 1
    },
    {
      id: 22,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "If it will rain, we won't go.",
        "If it rains, we won't go.",
        "If it rain, we won't go.",
        "If it rained, we won't go.",
        "If it is raining, we won't go."
      ],
      correct: 1
    },
    {
      id: 23,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "She has been studying _______ three hours.",
      options: ["since", "for", "during", "until", "from"],
      correct: 1
    },
    {
      id: 24,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "Although it was raining, but we went out.",
        "Although it was raining, we went out.",
        "Though it was raining, but we went out.",
        "Despite it was raining, we went out.",
        "In spite it was raining, we went out."
      ],
      correct: 1
    },
    {
      id: 25,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "This is one of _______ movies I've ever seen.",
      options: ["the most interesting", "the more interesting", "most interesting", "more interesting", "interesting"],
      correct: 0
    }
  ],
  subjective: [
    {
      id: 46,
      question: "다음 우리말을 영어로 완성하시오.",
      sentence: "너는 이 무거운 상자를 들 수 있니? (능력) = _______ you _______ this heavy box?",
      answers: ["Can, carry", "Can,carry", "can, carry", "can,carry"]
    },
    {
      id: 47,
      question: "다음 문장을 3형식으로 바꾸시오.",
      sentence: "He showed me his new car.",
      answers: [
        "He showed his new car to me.",
        "He showed his new car to me"
      ]
    },
    {
      id: 48,
      question: "빈칸에 알맞은 형태로 쓰시오.",
      sentence: "The story was very _____________ (interest). I was _____________ (interest) in the story.",
      answers: ["interesting, interested", "interesting,interested"]
    },
    {
      id: 49,
      question: "다음 문장을 완성하시오. (시간부사절 미래대용)",
      sentence: "When the rain _____________ (stop), we will go out.",
      answers: ["stops", "stop"]
    },
    {
      id: 50,
      question: "다음 우리말을 영어로 완성하시오.",
      sentence: "나는 그가 옳다고 생각하지 않는다. (부정전이) = I _______ _______ he _______ right.",
      answers: ["don't think, is", "don't think,is", "do not think, is", "do not think,is"]
    }
  ]
}

// 1급 테스트 문제 (고2~고3 수준)
export const grade1Questions = {
  objective: [
    {
      id: 1,
      question: "다음 빈칸에 알맞은 것을 고르시오.",
      sentence: "He _______ always complaining about everything these days.",
      options: ["was", "is", "has been", "will be", "had been"],
      correct: 1
    },
    {
      id: 2,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "I wish I have more time to study.",
        "I wish I had more time to study.",
        "I wish I will have more time to study.",
        "I wish I would have more time to study.",
        "I wish I am having more time to study."
      ],
      correct: 1
    },
    {
      id: 3,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "It _______ that he will resign from his position.",
      options: ["says", "is said", "is saying", "has said", "was saying"],
      correct: 1
    },
    {
      id: 4,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "Two-thirds of the students was absent.",
        "Two-thirds of the students were absent.",
        "Two-third of the students were absent.",
        "Two-thirds of the student were absent.",
        "Two-thirds of the students is absent."
      ],
      correct: 1
    },
    {
      id: 5,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "The majority of the committee _______ against the proposal.",
      options: ["is", "are", "was", "were", "have been"],
      correct: 1
    },
    {
      id: 6,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "Neither Tom nor his parents was at home.",
        "Neither Tom nor his parents were at home.",
        "Neither Tom nor his parent were at home.",
        "Neither Tom nor his parents is at home.",
        "Neither Tom and his parents were at home."
      ],
      correct: 1
    },
    {
      id: 7,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "I told him what _______ so disappointed about the results.",
      options: ["made me feel", "did make me feel", "made me to feel", "make me feel", "making me feel"],
      correct: 0
    },
    {
      id: 8,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "The question is too difficult for me to solve it.",
        "The question is too difficult for me to solve.",
        "The question is so difficult for me to solve it.",
        "The question is very difficult for me to solve it.",
        "The question is enough difficult for me to solve."
      ],
      correct: 1
    },
    {
      id: 9,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "We found the situation extremely difficult _______.",
      options: ["to handle", "to handle it", "handling", "for handling", "of handling"],
      correct: 0
    },
    {
      id: 10,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "When crossing the street, a car hit him.",
        "When crossing the street, he was hit by a car.",
        "When crossed the street, he was hit by a car.",
        "When he crossing the street, a car hit him.",
        "When to cross the street, he was hit by a car."
      ],
      correct: 1
    },
    {
      id: 11,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "_______ in 1990, he moved to Seoul when he was young.",
      options: ["Born", "Being born", "Having born", "To be born", "Birth"],
      correct: 0
    },
    {
      id: 12,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "The man believed to be rich turned out to be poor.",
        "The man believed to being rich turned out to be poor.",
        "The man believed being rich turned out to be poor.",
        "The man believed rich turned out to be poor.",
        "The man believing to be rich turned out to be poor."
      ],
      correct: 0
    },
    {
      id: 13,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "This is the very book _______ I have been looking for.",
      options: ["which", "what", "that", "who", "whose"],
      correct: 2
    },
    {
      id: 14,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "The way which he solved the problem was brilliant.",
        "The way in which he solved the problem was brilliant.",
        "The way that he solved the problem was brilliant.",
        "The way how he solved the problem was brilliant.",
        "both ② and ③"
      ],
      correct: 4
    },
    {
      id: 15,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "The reason _______ he gave for being late was unconvincing.",
      options: ["why", "that", "what", "which", "when"],
      correct: 3
    },
    {
      id: 16,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "Should you need any help, please let me know.",
        "Should you will need any help, please let me know.",
        "Should you needed any help, please let me know.",
        "Should you needing any help, please let me know.",
        "Should you to need any help, please let me know."
      ],
      correct: 0
    },
    {
      id: 17,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "_______ he had not studied hard, he would have failed the exam.",
      options: ["If", "Unless", "Even if", "As if", "Only if"],
      correct: 0
    },
    {
      id: 18,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "Not until he arrived did the meeting begin.",
        "Not until he arrived the meeting began.",
        "Not until he arrived the meeting did begin.",
        "Not until did he arrive the meeting began.",
        "Until he arrived did not the meeting begin."
      ],
      correct: 0
    },
    {
      id: 19,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "Never _______ such a beautiful sunset before.",
      options: ["I have seen", "have I seen", "I had seen", "had I seen", "I saw"],
      correct: 1
    },
    {
      id: 20,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "Hardly had he left when it started to rain.",
        "Hardly he had left when it started to rain.",
        "Hardly had he left than it started to rain.",
        "Hardly he left when it started to rain.",
        "Hardly did he leave when it started to rain."
      ],
      correct: 0
    },
    {
      id: 21,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "_______ more diligent than Tom in our class.",
      options: ["No one is", "Anyone is not", "No one are", "Not anyone is", "None are"],
      correct: 0
    },
    {
      id: 22,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "I don't think he is not honest.",
        "I think he is not honest.",
        "I don't think he is honest.",
        "I not think he is honest.",
        "I think he isn't not honest."
      ],
      correct: 2
    },
    {
      id: 23,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "There is no denying the fact _______ global warming is a serious problem.",
      options: ["which", "what", "that", "whether", "if"],
      correct: 2
    },
    {
      id: 24,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "The more you study, the better your grades become.",
        "The more you study, the more better your grades become.",
        "More you study, better your grades become.",
        "The much you study, the better your grades become.",
        "The more you study, your grades become better."
      ],
      correct: 0
    },
    {
      id: 25,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "I would rather you _______ me the truth.",
      options: ["tell", "told", "telling", "to tell", "have told"],
      correct: 1
    }
  ],
  subjective: [
    {
      id: 46,
      question: "다음 문장을 가정법을 사용하여 다시 쓰시오.",
      sentence: "He didn't listen to my advice, so he made a mistake.",
      answers: [
        "If he had listened to my advice, he wouldn't have made a mistake.",
        "If he had listened to my advice, he would not have made a mistake."
      ]
    },
    {
      id: 47,
      question: "다음 문장을 도치구문으로 바꾸시오.",
      sentence: "He had hardly finished speaking when the phone rang.",
      answers: ["Hardly had he finished speaking when the phone rang."]
    },
    {
      id: 48,
      question: "다음 두 문장을 접속사 + 분사구문으로 연결하시오.",
      sentence: "When I was walking in the park, I met my old friend.",
      answers: ["When walking in the park, I met my old friend."]
    },
    {
      id: 49,
      question: "다음 우리말을 영어로 완성하시오. (동격 that절)",
      sentence: "그가 성공할 것이라는 사실은 의심의 여지가 없다. = There is no doubt _______",
      answers: ["that he will succeed"]
    },
    {
      id: 50,
      question: "다음 우리말을 영어로 완성하시오. (부분부정)",
      sentence: "모든 학생이 영어를 좋아하는 것은 아니다. = _______ English.",
      answers: ["Not all students like", "All students do not like"]
    }
  ]
}

// 2급 테스트 문제 (고1~고2 수준)
export const grade2Questions = {
  objective: [
    {
      id: 1,
      question: "다음 빈칸에 알맞은 것을 고르시오.",
      sentence: "You _______ harder when you were a student.",
      options: ["should study", "should have studied", "should be studying", "should studied", "should to study"],
      correct: 1
    },
    {
      id: 2,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "He might have been arrived by now.",
        "He might have arrived by now.",
        "He might has arrived by now.",
        "He might arrived by now.",
        "He might be have arrived by now."
      ],
      correct: 1
    },
    {
      id: 3,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "She _______ the exam if she had studied harder.",
      options: ["could pass", "could have passed", "could passed", "could be passed", "could have been passed"],
      correct: 1
    },
    {
      id: 4,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "A number of students have arrived.",
        "The number of students have arrived.",
        "A number of student has arrived.",
        "The number of student have arrived.",
        "Number of students has arrived."
      ],
      correct: 0
    },
    {
      id: 5,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "One of my friends _______ to Paris last year.",
      options: ["have been", "has been", "have gone", "has gone", "had been"],
      correct: 1
    },
    {
      id: 6,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "What I need are more time.",
        "What I need is more time.",
        "What I need have more time.",
        "What I needs is more time.",
        "What I need were more time."
      ],
      correct: 1
    },
    {
      id: 7,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "Please turn _______ the music. It's too loud.",
      options: ["off", "down", "up", "on", "over"],
      correct: 1
    },
    {
      id: 8,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "I found it difficulty to solve the problem.",
        "I found it difficult to solve the problem.",
        "I found it difficultly to solve the problem.",
        "I found difficulty to solve the problem.",
        "I found it is difficult to solve the problem."
      ],
      correct: 1
    },
    {
      id: 9,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "He told me _______ I should study abroad.",
      options: ["that", "what", "which", "whether", "who"],
      correct: 3
    },
    {
      id: 10,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "She seems to being happy today.",
        "She seems to be happy today.",
        "She seems being happy today.",
        "She seems be happy today.",
        "She seem to be happy today."
      ],
      correct: 1
    },
    {
      id: 11,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "_______ is necessary for good health.",
      options: ["Exercise", "To exercise", "Exercising", "To exercising", "both ① and ③"],
      correct: 4
    },
    {
      id: 12,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "I heard him to sing in the shower.",
        "I heard him singing in the shower.",
        "I heard him sang in the shower.",
        "I heard him sings in the shower.",
        "I heard him to singing in the shower."
      ],
      correct: 1
    },
    {
      id: 13,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "Having _______ all my homework, I went to bed.",
      options: ["finish", "finished", "finishing", "to finish", "been finished"],
      correct: 1
    },
    {
      id: 14,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "Weather permitting, we will go camping.",
        "Weather permits, we will go camping.",
        "Weather to permit, we will go camping.",
        "Weather permitted, we will go camping.",
        "If weather permitting, we will go camping."
      ],
      correct: 0
    },
    {
      id: 15,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "I saw her _______ with her friends in the park.",
      options: ["talked", "talking", "to talk", "talks", "talk"],
      correct: 1
    },
    {
      id: 16,
      question: "다음 중 계속적 용법으로 쓰인 것은?",
      options: [
        "The book which I bought is interesting.",
        "Tom, who is my friend, lives in Seoul.",
        "The girl whom I met yesterday is kind.",
        "The house that we live in is old.",
        "The reason why he left is unknown."
      ],
      correct: 1
    },
    {
      id: 17,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "Those _______ want to join the club should sign here.",
      options: ["which", "whom", "whose", "who", "what"],
      correct: 3
    },
    {
      id: 18,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "The house which we live is beautiful.",
        "The house which we live in is beautiful.",
        "The house in which we live in is beautiful.",
        "The house what we live in is beautiful.",
        "The house where we live in is beautiful."
      ],
      correct: 1
    },
    {
      id: 19,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "The movie was _______ boring that I fell asleep.",
      options: ["so", "such", "very", "too", "enough"],
      correct: 0
    },
    {
      id: 20,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "However hard he tried, but he couldn't succeed.",
        "However hard he tried, he couldn't succeed.",
        "However he tried hard, he couldn't succeed.",
        "However hardly he tried, he couldn't succeed.",
        "However hard tried he, he couldn't succeed."
      ],
      correct: 1
    },
    {
      id: 21,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "_______ comes first will get the prize.",
      options: ["Who", "Whom", "Whoever", "Whomever", "What"],
      correct: 2
    },
    {
      id: 22,
      question: "다음 중 어법상 올바른 것은?",
      options: [
        "I wish I am taller than I am now.",
        "I wish I was taller than I am now.",
        "I wish I were taller than I am now.",
        "I wish I will be taller than I am now.",
        "I wish I have been taller than I am now."
      ],
      correct: 2
    },
    {
      id: 23,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "He speaks English _______ he were a native speaker.",
      options: ["as", "like", "as if", "such as", "so as"],
      correct: 2
    },
    {
      id: 24,
      question: "다음 중 강조구문으로 올바른 것은?",
      options: [
        "It was Tom who helped me yesterday.",
        "It is Tom who helped me yesterday.",
        "It was Tom whom helped me yesterday.",
        "It was Tom which helped me yesterday.",
        "It were Tom who helped me yesterday."
      ],
      correct: 0
    },
    {
      id: 25,
      question: "빈칸에 알맞은 것을 고르시오.",
      sentence: "Here _______ the bus we've been waiting for.",
      options: ["come", "comes", "coming", "came", "is coming"],
      correct: 1
    }
  ],
  subjective: [
    {
      id: 46,
      question: "다음 우리말을 영어로 완성하시오. (과거 후회)",
      sentence: "그때 그의 말을 들었어야 했는데. = I _______ to him then.",
      answers: ["should have listened"]
    },
    {
      id: 47,
      question: "다음 두 문장을 관계대명사를 사용하여 하나로 연결하시오. (계속적 용법)",
      sentence: "My brother lives in New York. He is a doctor.",
      answers: ["My brother, who is a doctor, lives in New York."]
    },
    {
      id: 48,
      question: "다음 문장을 분사구문으로 바꾸시오.",
      sentence: "Because he was tired, he went to bed early.",
      answers: ["Being tired, he went to bed early.", "Tired, he went to bed early."]
    },
    {
      id: 49,
      question: "다음 우리말을 영어로 완성하시오. (강조구문)",
      sentence: "내가 어제 만난 사람은 바로 그였다. = _______ I met yesterday.",
      answers: ["It was he that", "It was he who"]
    },
    {
      id: 50,
      question: "다음 우리말을 영어로 완성하시오. (복합관계사)",
      sentence: "누구든지 먼저 도착하는 사람이 상을 받을 것이다. = _______ first will get the prize.",
      answers: ["Whoever arrives", "Whoever comes"]
    }
  ]
}

// 7급은 기존 testQuestions와 subjectiveQuestions 사용