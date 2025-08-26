// 급수별 테스트 데이터
export const gradeInfo = {
  '1급': { level: '1급', grade: '고1', description: '고등학교 1학년' },
  '2급': { level: '2급', grade: '중3', description: '중학교 3학년 수준/고급 문법' },
  '3급': { level: '3급', grade: '중2-2', description: '중학교 2학년 2학기' },
  '4급': { level: '4급', grade: '중2-1', description: '중학교 2학년 1학기' },
  '5급': { level: '5급', grade: '중1', description: '중학교 1학년' },
  '6급': { level: '6급', grade: '초6', description: '초등학교 6학년 수준' },
  '7급': { level: '7급', grade: '초5', description: '초등학교 5학년 수준' },
}

// 타입 정의
export interface SubjectiveQuestion {
  id: number;
  question: string;
  answerCount?: number; // 답변 개수 (기본값 1)
  answers?: string | string[]; // 단일 또는 복수 답변
  answer?: string | string[]; // 이전 버전 호환
}

// 3급 테스트 문제 (중학교 2학년 2학기)
export const grade3Questions = {
  objective: [
    // 인지 능력 문제 (1-25번)
    {
      id: 1,
      question: "Do you think _____ he will come to the party?",
      options: ["that", "if", "what", "which", "whether"],
      correct: 0
    },
    {
      id: 2,
      question: "She _____ studying English for three hours.",
      options: ["has been", "have been", "is", "was", "will be"],
      correct: 0
    },
    {
      id: 3,
      question: "I think you _____ see a doctor.",
      options: ["had better", "would better", "have better", "will better", "can better"],
      correct: 0
    },
    {
      id: 4,
      question: "The news _____ good for everyone.",
      options: ["is", "are", "were", "have been", "being"],
      correct: 0
    },
    {
      id: 5,
      question: "I wonder _____ to solve this problem.",
      options: ["how", "what", "that", "if", "which"],
      correct: 0
    },
    {
      id: 6,
      question: "She stopped _____ to me when she saw her teacher.",
      options: ["to talk", "talking", "talk", "talked", "and talked"],
      correct: 1
    },
    {
      id: 7,
      question: "_____ tired, he continued working.",
      options: ["Being", "To be", "Been", "Be", "Having"],
      correct: 0
    },
    {
      id: 8,
      question: "This is the place _____ I was born.",
      options: ["which", "that", "where", "when", "what"],
      correct: 2
    },
    {
      id: 9,
      question: "The teacher made the announcement, _____ surprised everyone.",
      options: ["which", "that", "what", "it", "this"],
      correct: 0
    },
    {
      id: 10,
      question: "I wish I _____ speak French fluently.",
      options: ["can", "could", "will", "would", "may"],
      correct: 1
    },
    {
      id: 11,
      question: "다음 빈칸에 들어갈 수 없는 것은? She appears _____.",
      options: ["happy", "to be happy", "happily", "tired", "to be tired"],
      correct: 2
    },
    {
      id: 12,
      question: "다음 빈칸에 들어갈 수 없는 것은? I remember _____ the door.",
      options: ["locking", "to lock", "having locked", "lock", "that I locked"],
      correct: 3
    },
    {
      id: 13,
      question: "다음 빈칸에 들어갈 수 없는 것은? A lot of students _____ late today.",
      options: ["is", "are", "was", "has been", "being"],
      correct: 0
    },
    {
      id: 14,
      question: "어법상 틀린 대화는? (Do you remember meeting him? - No, I don't remember to meet him.)",
      options: [
        "A: How long have you been waiting? B: I've been waiting for an hour.",
        "A: What seems to be the problem? B: It seems that something is wrong.",
        "A: Do you remember meeting him? B: No, I don't remember to meet him.",
        "A: Where is the book? B: It's on the table where I left it.",
        "A: I wish I were rich. B: Me too, I wish I had more money."
      ],
      correct: 2
    },
    {
      id: 15,
      question: "어법상 틀린 대화는? (A number of students is absent.)",
      options: [
        "A: The movie was disappointing. B: Yes, I was disappointed too.",
        "A: Having finished his work, he went home. B: That's good.",
        "A: It takes me an hour to get there. B: Really? It takes me only 30 minutes.",
        "A: Either you or I am wrong. B: I think you're right.",
        "A: A number of students is absent. B: Yes, many are sick."
      ],
      correct: 4
    },
    {
      id: 16,
      question: "어법상 틀린 대화는? (I spent two hours to finish my homework.)",
      options: [
        "A: I'll call you as soon as I arrive. B: Okay, I'll be waiting.",
        "A: That's all I need. B: Is that everything?",
        "A: Not only does he speak English, but he also speaks French. B: Amazing!",
        "A: The harder I study, the more confused I get. B: Take a break.",
        "A: I spent two hours to finish my homework. B: That's a long time."
      ],
      correct: 4
    },
    {
      id: 17,
      question: "어법상 틀린 대화는? (Try to solve it.)",
      options: [
        "A: I remember meeting him. B: When did you meet him?",
        "A: She forgot to lock the door. B: That's dangerous.",
        "A: I'm used to getting up early. B: That's good.",
        "A: He stopped smoking last year. B: Good for him.",
        "A: Try solving this problem. B: I'll try to solve it."
      ],
      correct: 4
    },
    {
      id: 18,
      question: "문장 전환 중 잘못된 것은? (showed → shown)",
      options: [
        "He gave me the book. → The book was given to me by him.",
        "They told us the story. → We were told the story by them.",
        "She bought him a gift. → A gift was bought for him by her.",
        "I asked her a question. → She was asked a question by me.",
        "We showed them the way. → The way was showed to them by us."
      ],
      correct: 4
    },
    {
      id: 19,
      question: "문장 전환 중 잘못된 것은? (can → could)",
      options: [
        "He is too young to drive. → He is so young that he can't drive.",
        "She was old enough to vote. → She was so old that she can vote.",
        "I don't know what to do. → I don't know what I should do.",
        "Tell me where to go. → Tell me where I should go.",
        "Reading books, I fell asleep. → While I was reading books, I fell asleep."
      ],
      correct: 1
    },
    {
      id: 20,
      question: "문장 전환 중 잘못된 것은? (Not until yesterday I knew)",
      options: [
        "Not a word did he say. → He didn't say a word.",
        "Only then did I realize the truth. → I realized the truth only then.",
        "So tired was she that she fell asleep. → She was so tired that she fell asleep.",
        "Had I known, I would have helped. → If I had known, I would have helped.",
        "Not until yesterday I knew the truth. → I didn't know the truth until yesterday."
      ],
      correct: 4
    },
    {
      id: 21,
      question: "_____ of the students has submitted the assignment.",
      options: ["Each", "Every", "All", "Both", "Much"],
      correct: 0
    },
    {
      id: 22,
      question: "I don't mind _____ alone.",
      options: ["to be", "being", "be", "been", "to being"],
      correct: 1
    },
    {
      id: 23,
      question: "This is the reason _____ he was late.",
      options: ["why", "which", "that", "what", "how"],
      correct: 0
    },
    {
      id: 24,
      question: "_____ he studied hard, he failed the exam.",
      options: ["Despite", "Although", "In spite", "Because of", "Due to"],
      correct: 1
    },
    {
      id: 25,
      question: "The building _____ they are constructing will be the tallest in the city.",
      options: ["what", "which", "where", "when", "how"],
      correct: 1
    }
  ],
  errorDetection: [
    // 감각 능력 문제 (26-45번)
    {
      id: 26,
      sentence: "Do you think (A)what (B)will happen (C)next (D)?",
      correct: 1 // (B) what → that
    },
    {
      id: 27,
      sentence: "She (A)has been (B)studied (C)English for years (D).",
      correct: 2 // (C) studied → studying
    },
    {
      id: 28,
      sentence: "Physics (A)are (B)my favorite (C)subject (D).",
      correct: 1 // (B) are → is
    },
    {
      id: 29,
      sentence: "I (A)remember (B)to meeting (C)him last year (D).",
      correct: 2 // (C) to meeting → meeting
    },
    {
      id: 30,
      sentence: "It (A)seems (B)to raining (C)outside now (D).",
      correct: 2 // (C) to raining → to be raining
    },
    {
      id: 31,
      sentence: "Study hard (A), he (B)passed (C)the exam (D).",
      correct: 0 // (A) Study → Studying
    },
    {
      id: 32,
      sentence: "What (A)I want (B)are (C)more time (D).",
      correct: 2 // (C) are → is
    },
    {
      id: 33,
      sentence: "He (A)is known (B)to having (C)written many books (D).",
      correct: 2 // (C) to having → to have
    },
    {
      id: 34,
      sentence: "I wish (A)I (B)can (C)help you more (D).",
      correct: 2 // (C) can → could
    },
    {
      id: 35,
      sentence: "The book (A), that (B)I bought yesterday (C), is interesting (D).",
      correct: 1 // (B) that → which
    },
    {
      id: 36,
      sentence: "A number of (A)students (B)has (C)come late (D).",
      correct: 2 // (C) has → have
    },
    {
      id: 37,
      sentence: "Hearing (A)the news (B), she (C)shocked (D).",
      correct: 3 // (D) shocked → was shocked
    },
    {
      id: 38,
      sentence: "I (A)prefer (B)coffee (C)than tea (D).",
      correct: 3 // (D) than → to
    },
    {
      id: 39,
      sentence: "It (A)is (B)important (C)that he goes there (D).",
      correct: 3 // (D) goes → go/should go
    },
    {
      id: 40,
      sentence: "The number of (A)students (B)are (C)increasing (D).",
      correct: 2 // (C) are → is
    },
    {
      id: 41,
      sentence: "She (A)seems (B)happily (C)today (D).",
      correct: 2 // (C) happily → happy
    },
    {
      id: 42,
      sentence: "I (A)spent (B)three hours (C)to read the book (D).",
      correct: 3 // (D) to read → reading
    },
    {
      id: 43,
      sentence: "Those (A)who (B)wants success (C)must work hard (D).",
      correct: 2 // (C) wants → want
    },
    {
      id: 44,
      sentence: "As soon as (A)he will arrive (B), I (C)will call you (D).",
      correct: 1 // (B) he will arrive → he arrives
    },
    {
      id: 45,
      sentence: "She (A)is (B)as tall (C)so her brother (D).",
      correct: 3 // (D) so → as
    }
  ],
  subjective: [
    // 주관식 영작 문제 (46-50번)
    {
      id: 46,
      question: "그가 정직하다는 것은 모든 사람이 안다.",
      answer: "That he is honest is known to everyone. / Everyone knows that he is honest."
    },
    {
      id: 47,
      question: "비가 와서, 우리는 경기를 취소했다. (분사구문 사용)",
      answer: "As it was raining, we canceled the game. / It raining, we canceled the game."
    },
    {
      id: 48,
      question: "다음 문장의 빈칸을 채우시오.\n나는 그녀가 그 일을 할 수 있을지 궁금하다.\nI wonder _____ she _____ do the work.",
      answerCount: 2,
      answers: ["if/whether", "can"]
    },
    {
      id: 49,
      question: "다음 문장의 빈칸을 채우시오.\n이 책은 많은 사람들에게 읽혀진다.\nThis book _____ _____ by many people.",
      answerCount: 2,
      answers: ["is", "read"]
    },
    {
      id: 50,
      question: "다음 문장의 빈칸을 채우시오.\n열심히 공부하는 학생들이 성공할 것이다.\nStudents _____ study hard _____ succeed.",
      answerCount: 2,
      answers: ["who/that", "will"]
    }
  ]
}

// 4급 테스트 문제 (중학교 2학년 1학기)
export const grade4Questions = {
  objective: [
    // 인지 능력 문제 (1-25번)
    {
      id: 1,
      question: "I _____ to Paris twice.",
      options: ["went", "have been", "have gone", "was going", "had been"],
      correct: 1
    },
    {
      id: 2,
      question: "The book _____ by many people.",
      options: ["reads", "is reading", "is read", "has read", "reading"],
      correct: 2
    },
    {
      id: 3,
      question: "You _____ study harder to pass the exam.",
      options: ["can", "may", "should", "will", "could"],
      correct: 2
    },
    {
      id: 4,
      question: "I don't know _____ she said to him.",
      options: ["that", "what", "which", "if", "how"],
      correct: 1
    },
    {
      id: 5,
      question: "Either Tom or his friends _____ coming to the party.",
      options: ["is", "are", "was", "has been", "being"],
      correct: 1
    },
    {
      id: 6,
      question: "She is good _____ playing the piano.",
      options: ["in", "on", "at", "for", "to"],
      correct: 2
    },
    {
      id: 7,
      question: "I want _____ a new computer.",
      options: ["buy", "buying", "to buy", "bought", "to buying"],
      correct: 2
    },
    {
      id: 8,
      question: "They elected him _____ of the club.",
      options: ["president", "as president", "to president", "for president", "being president"],
      correct: 0
    },
    {
      id: 9,
      question: "I found the problem _____ to solve.",
      options: ["difficulty", "difficult", "difficultly", "more difficult", "difficulties"],
      correct: 1
    },
    {
      id: 10,
      question: "The more you practice, _____ you will become.",
      options: ["better", "the better", "best", "the best", "more better"],
      correct: 1
    },
    {
      id: 11,
      question: "다음 빈칸에 들어갈 수 없는 것은? She avoided _____ about the problem.",
      options: ["talking", "to talk", "discussing", "mentioning", "speaking"],
      correct: 1
    },
    {
      id: 12,
      question: "다음 빈칸에 들어갈 수 없는 것은? The homework _____ by tomorrow.",
      options: ["must finish", "should be finished", "needs to be done", "has to be completed", "will be submitted"],
      correct: 0
    },
    {
      id: 13,
      question: "다음 빈칸에 들어갈 수 없는 것은? I know _____.",
      options: ["what to do", "where to go", "how to solve it", "when should I leave", "which one to choose"],
      correct: 3
    },
    {
      id: 14,
      question: "어법상 틀린 대화는? (Have you ever been to Japan? - Yes, I have been there last year.)",
      options: [
        "A: Have you ever been to Japan? B: Yes, I have been there last year.",
        "A: What did she tell you? B: She told me to wait here.",
        "A: Who broke the window? B: It was broken by Tom.",
        "A: Can you help me? B: Sure, what do you need?",
        "A: Where is your homework? B: I forgot to bring it."
      ],
      correct: 0
    },
    {
      id: 15,
      question: "어법상 틀린 대화는? (The movie was boring. - Yes, I was boring too.)",
      options: [
        "A: How long have you lived here? B: I've lived here for five years.",
        "A: What are you looking for? B: I'm looking for my keys.",
        "A: The movie was boring. B: Yes, I was boring too.",
        "A: Did you finish your project? B: Not yet, I'm still working on it.",
        "A: When will you come? B: I'll come after I finish my work."
      ],
      correct: 2
    },
    {
      id: 16,
      question: "어법상 틀린 대화는? (Neither of them are right.)",
      options: [
        "A: What made you angry? B: His rude behavior made me angry.",
        "A: Do you mind if I open the window? B: No, I don't mind.",
        "A: She is interested in science. B: Really? That's interesting.",
        "A: Neither of them are right. B: I agree with you.",
        "A: How much does it cost? B: It costs about $50."
      ],
      correct: 3
    },
    {
      id: 17,
      question: "어법상 틀린 대화는? (I enjoy to read books.)",
      options: [
        "A: I suggest going to the beach. B: That sounds good.",
        "A: He is taller than me. B: Yes, he's the tallest in class.",
        "A: Thank you for helping me. B: You're welcome.",
        "A: I enjoy to read books. B: Me too, reading is fun.",
        "A: Can you swim? B: Yes, I learned when I was young."
      ],
      correct: 3
    },
    {
      id: 18,
      question: "문장 전환 중 잘못된 것은? (My bike has stolen yesterday.)",
      options: [
        "He gave me a book. → He gave a book to me.",
        "The window was broken. → Someone broke the window.",
        "This book was written in 2020. → Someone wrote this book in 2020.",
        "The letter has been sent. → I have sent the letter.",
        "My bike was stolen yesterday. → My bike has stolen yesterday."
      ],
      correct: 4
    },
    {
      id: 19,
      question: "문장 전환 중 잘못된 것은? (since 5 years ago)",
      options: [
        "This is too heavy for me to carry. → This is so heavy that I can't carry it.",
        "He runs faster than me. → I don't run as fast as him.",
        "She has lived here for 5 years. → She has lived here since 5 years ago.",
        "I prefer coffee to tea. → I like coffee better than tea.",
        "The book is interesting. → I am interested in the book."
      ],
      correct: 2
    },
    {
      id: 20,
      question: "문장 전환 중 잘못된 것은? (If I study more, I know more.)",
      options: [
        "The book is too difficult for me to read. → The book is so difficult that I cannot read it.",
        "He is old enough to drive. → He is so old that he can drive.",
        "She speaks English well. → English is spoken well by her.",
        "I prefer tea to coffee. → I like tea more than coffee.",
        "The more I study, the more I know. → If I study more, I know more."
      ],
      correct: 4
    },
    {
      id: 21,
      question: "Not only Tom but also his friends _____ invited to the party.",
      options: ["is", "are", "was", "has been", "being"],
      correct: 1
    },
    {
      id: 22,
      question: "I remember _____ him at the station.",
      options: ["meet", "to meet", "meeting", "met", "to meeting"],
      correct: 2
    },
    {
      id: 23,
      question: "That is the reason _____ I couldn't come.",
      options: ["why", "which", "what", "where", "when"],
      correct: 0
    },
    {
      id: 24,
      question: "_____ honest he is!",
      options: ["What", "How", "What a", "How a", "Such"],
      correct: 1
    },
    {
      id: 25,
      question: "She is _____ girl that everyone likes her.",
      options: ["so kind", "so kind a", "such kind", "such a kind", "a such kind"],
      correct: 3
    }
  ],
  errorDetection: [
    // 감각 능력 문제 (26-45번)
    {
      id: 26,
      sentence: "I (A)have seen (B)him (C)yesterday (D).",
      correct: 1 // (B) have seen → saw
    },
    {
      id: 27,
      sentence: "The letter (A)was written (B)by (C)she (D).",
      correct: 3 // (D) she → her
    },
    {
      id: 28,
      sentence: "Neither John (A)or (B)Mary (C)is coming (D).",
      correct: 1 // (B) or → nor
    },
    {
      id: 29,
      sentence: "The man (A)which (B)I met (C)is my teacher (D).",
      correct: 1 // (B) which → who/that
    },
    {
      id: 30,
      sentence: "The news (A)about the accident (B)were (C)shocking (D).",
      correct: 2 // (C) were → was
    },
    {
      id: 31,
      sentence: "He (A)was made (B)to studying (C)all night (D).",
      correct: 2 // (C) to studying → to study
    },
    {
      id: 32,
      sentence: "I (A)want to know (B)what (C)is he doing (D).",
      correct: 3 // (D) is he doing → he is doing
    },
    {
      id: 33,
      sentence: "The house (A)which (B)built last year (C)is beautiful (D).",
      correct: 2 // (C) built → was built
    },
    {
      id: 34,
      sentence: "She (A)has gone (B)to Paris (C)three times (D).",
      correct: 1 // (B) has gone → has been
    },
    {
      id: 35,
      sentence: "I (A)am used to (B)get up (C)early (D).",
      correct: 2 // (C) get up → getting up
    },
    {
      id: 36,
      sentence: "The teacher (A)made (B)us (C)to write an essay (D).",
      correct: 3 // (D) to write → write
    },
    {
      id: 37,
      sentence: "Everything (A)are (B)ready (C)for the party (D).",
      correct: 1 // (B) are → is
    },
    {
      id: 38,
      sentence: "She (A)is (B)too tired (C)to can't work (D).",
      correct: 3 // (D) to can't → that she can't
    },
    {
      id: 39,
      sentence: "It (A)is (B)important (C)to honest (D).",
      correct: 3 // (D) to honest → to be honest
    },
    {
      id: 40,
      sentence: "Do you know (A)the man (B)who (C)he helped you (D)?",
      correct: 3 // (D) he helped → helped
    },
    {
      id: 41,
      sentence: "The movie (A)was so (B)bored (C)that I fell asleep (D).",
      correct: 2 // (C) bored → boring
    },
    {
      id: 42,
      sentence: "She (A)prefers (B)to stay home (C)than go out (D).",
      correct: 3 // (D) than → to
    },
    {
      id: 43,
      sentence: "I (A)have (B)difficulty (C)to understand him (D).",
      correct: 3 // (D) to understand → understanding
    },
    {
      id: 44,
      sentence: "The more (A)carefully (B)you drive (C), the more safe you are (D).",
      correct: 3 // (D) the more safe → the safer
    },
    {
      id: 45,
      sentence: "She (A)have lived (B)here (C)since 2010 (D).",
      correct: 1 // (B) have lived → has lived
    }
  ],
  subjective: [
    // 주관식 영작 문제 (46-50번)
    {
      id: 46,
      question: "나는 그를 만난 적이 있다.",
      answer: "I have met him (before)."
    },
    {
      id: 47,
      question: "다음 문장의 빈칸을 채우시오.\n이 편지는 그녀에 의해 쓰여졌다.\nThis letter _____ _____ by her.",
      answerCount: 2,
      answers: ["was", "written"]
    },
    {
      id: 48,
      question: "다음 문장의 빈칸을 채우시오.\n그가 무엇을 원하는지 아니?\nDo you know _____ he _____?",
      answerCount: 2,
      answers: ["what", "wants"]
    },
    {
      id: 49,
      question: "그녀는 나를 행복하게 만들었다.",
      answer: "She made me happy."
    },
    {
      id: 50,
      question: "다음 문장의 빈칸을 채우시오.\n나는 어제 만난 소녀를 안다.\nI know the girl _____ I _____ yesterday.",
      answerCount: 2,
      answers: ["whom/who/that", "met"]
    }
  ]
}

// 5급 테스트 문제 (중학교 1학년)
export const grade5Questions = {
  objective: [
    // 인지 능력 문제 (1-25번)
    {
      id: 1,
      question: "Can you tell me _____ she is late?",
      options: ["why", "what", "which", "where", "who"],
      correct: 0
    },
    {
      id: 2,
      question: "Everyone in our class _____ the answer.",
      options: ["know", "knows", "knowing", "are knowing", "have known"],
      correct: 1
    },
    {
      id: 3,
      question: "She _____ speak three languages fluently.",
      options: ["can", "should", "be able to", "would", "mustn't"],
      correct: 0
    },
    {
      id: 4,
      question: "Please give this letter _____ your mother.",
      options: ["for", "to", "at", "with", "by"],
      correct: 1
    },
    {
      id: 5,
      question: "The food smells _____.",
      options: ["deliciously", "delicious", "more delicious", "deliciousness", "to be delicious"],
      correct: 1
    },
    {
      id: 6,
      question: "I gave _____ the book yesterday.",
      options: ["him", "he", "his", "himself", "he's"],
      correct: 0
    },
    {
      id: 7,
      question: "She made me _____ the room.",
      options: ["clean", "to clean", "cleaning", "cleaned", "cleans"],
      correct: 0
    },
    {
      id: 8,
      question: "I have many books _____.",
      options: ["read", "reading", "to read", "reads", "readed"],
      correct: 2
    },
    {
      id: 9,
      question: "The baby _____ on the bed is my nephew.",
      options: ["sleep", "sleeps", "slept", "sleeping", "to sleep"],
      correct: 3
    },
    {
      id: 10,
      question: "I'm _____ in science fiction movies.",
      options: ["interesting", "interested", "interest", "interests", "to interest"],
      correct: 1
    },
    {
      id: 11,
      question: "She decided _____ harder for the exam.",
      options: ["study", "studying", "to study", "studied", "studies"],
      correct: 2
    },
    {
      id: 12,
      question: "Both Tom and Jerry _____ good at math.",
      options: ["is", "are", "was", "has been", "being"],
      correct: 1
    },
    {
      id: 13,
      question: "_____ you help me, I can't finish this.",
      options: ["If", "Unless", "When", "While", "After"],
      correct: 1
    },
    {
      id: 14,
      question: "The news _____ shocking to everyone.",
      options: ["is", "are", "were", "have been", "being"],
      correct: 0
    },
    {
      id: 15,
      question: "I prefer coffee _____ tea.",
      options: ["than", "to", "for", "with", "over"],
      correct: 1
    },
    {
      id: 16,
      question: "He kept _____ all night.",
      options: ["study", "studied", "studying", "to study", "studies"],
      correct: 2
    },
    {
      id: 17,
      question: "I don't know _____ to solve this problem.",
      options: ["what", "how", "which", "where", "when"],
      correct: 1
    },
    {
      id: 18,
      question: "One of the students _____ absent today.",
      options: ["is", "are", "were", "have been", "being"],
      correct: 0
    },
    {
      id: 19,
      question: "She looks _____ her mother.",
      options: ["as", "like", "alike", "similar", "same"],
      correct: 1
    },
    {
      id: 20,
      question: "I can't go out _____ I finish my homework.",
      options: ["since", "until", "while", "during", "for"],
      correct: 1
    },
    {
      id: 21,
      question: "다음 빈칸에 들어갈 수 없는 것은? I enjoyed _____ the movie last night.",
      options: ["watch", "to watch", "watching", "watched", "to watching"],
      correct: 4
    },
    {
      id: 22,
      question: "다음 빈칸에 들어갈 수 없는 것은? The box of apples _____ heavy.",
      options: ["is", "are", "were", "have been", "being"],
      correct: 1
    },
    {
      id: 23,
      question: "다음 빈칸에 들어갈 수 없는 것은? The movie was _____ to watch.",
      options: ["interesting", "boring", "excited", "amazing", "fun"],
      correct: 2
    },
    {
      id: 24,
      question: "어법상 틀린 대화는? (Where did you go? - I went to shopping.)",
      options: [
        "A: Where did you go? B: I went to shopping.",
        "A: What do you want? B: I want to eat pizza.",
        "A: Can you help me? B: Sure, I can.",
        "A: Do you like music? B: Yes, I do.",
        "A: When will you come? B: I'll come at 5."
      ],
      correct: 0
    },
    {
      id: 25,
      question: "어법상 틀린 대화는? (Why are you late? - Because of I missed the bus.)",
      options: [
        "A: How long have you been here? B: For two hours.",
        "A: What are you looking for? B: I'm looking for my keys.",
        "A: Did you finish your homework? B: Yes, I finished.",
        "A: Where does she live? B: She lives in Seoul.",
        "A: Why are you late? B: Because of I missed the bus."
      ],
      correct: 4
    }
  ],
  errorDetection: [
    // 감각 능력 문제 (26-45번)
    {
      id: 26,
      sentence: "Everyone (A)have (B)their own (C)opinion (D).",
      correct: 1 // (B) have → has
    },
    {
      id: 27,
      sentence: "She (A)wants (B)me (C)go home early (D).",
      correct: 3 // (D) go → to go
    },
    {
      id: 28,
      sentence: "The box (A)of apples (B)are (C)very heavy (D).",
      correct: 2 // (C) are → is
    },
    {
      id: 29,
      sentence: "I (A)enjoy (B)to listen (C)to music (D).",
      correct: 2 // (C) to listen → listening
    },
    {
      id: 30,
      sentence: "He (A)let (B)his sister (C)to cry (D).",
      correct: 3 // (D) to cry → cry
    },
    {
      id: 31,
      sentence: "The movie (A)was (B)interested (C)to watch (D).",
      correct: 2 // (C) interested → interesting
    },
    {
      id: 32,
      sentence: "Both (A)my parents (B)is (C)doctors (D).",
      correct: 2 // (C) is → are
    },
    {
      id: 33,
      sentence: "She (A)has (B)many work (C)to do (D).",
      correct: 2 // (C) many work → much work
    },
    {
      id: 34,
      sentence: "I (A)saw (B)him (C)to enter the room (D).",
      correct: 3 // (D) to enter → enter
    },
    {
      id: 35,
      sentence: "Until (A)you will come (B), I (C)will wait here (D).",
      correct: 1 // (B) you will come → you come
    },
    {
      id: 36,
      sentence: "One of (A)the girls (B)are (C)singing (D).",
      correct: 2 // (C) are → is
    },
    {
      id: 37,
      sentence: "She (A)is (B)taller (C)as her sister (D).",
      correct: 3 // (D) as → than
    },
    {
      id: 38,
      sentence: "I (A)have (B)difficulty (C)to understand this (D).",
      correct: 3 // (D) to understand → understanding
    },
    {
      id: 39,
      sentence: "The teacher (A)called (B)him (C)as Tom (D).",
      correct: 3 // (D) as Tom → Tom
    },
    {
      id: 40,
      sentence: "Each student (A)have (B)to submit (C)their homework (D).",
      correct: 1 // (B) have → has
    },
    {
      id: 41,
      sentence: "She (A)looks (B)happily (C)today (D).",
      correct: 2 // (C) happily → happy
    },
    {
      id: 42,
      sentence: "I (A)don't know (B)what (C)should I do (D).",
      correct: 3 // (D) should I do → I should do
    },
    {
      id: 43,
      sentence: "Although (A)he was tired (B), but (C)he continued (D).",
      correct: 2 // (C) but → 삭제
    },
    {
      id: 44,
      sentence: "The news (A)are (B)very (C)surprising (D).",
      correct: 1 // (B) are → is
    },
    {
      id: 45,
      sentence: "Few (A)students (B)understands (C)this concept (D).",
      correct: 2 // (C) understands → understand
    }
  ],
  subjective: [
    // 주관식 영작 문제 (46-50번)
    {
      id: 46,
      question: "모든 사람이 그 소식을 알고 있다.",
      answer: "Everyone knows the news."
    },
    {
      id: 47,
      question: "다음 문장의 빈칸을 채우시오.\n그녀는 나에게 문을 닫으라고 했다.\nShe told _____ _____ close the door.",
      answerCount: 2,
      answers: ["me", "to"]
    },
    {
      id: 48,
      question: "다음 문장의 빈칸을 채우시오.\n비록 피곤했지만, 나는 숙제를 끝냈다.\n_____ I was tired, I _____ my homework.",
      answerCount: 2,
      answers: ["Though/Although", "finished"]
    },
    {
      id: 49,
      question: "나는 읽을 책이 많다.",
      answer: "I have many books to read."
    },
    {
      id: 50,
      question: "다음 문장의 빈칸을 채우시오.\n그 영화는 보기에 재미있었다.\nThe movie _____ interesting _____ watch.",
      answerCount: 2,
      answers: ["was", "to"]
    }
  ]
}

// 6급 테스트 문제 (초등학교 6학년 수준)
export const grade6Questions = {
  objective: [
    // 인지 능력 문제 (1-25번)
    {
      id: 1,
      question: "My father _____ to work by subway yesterday.",
      options: ["go", "goes", "went", "going", "gone"],
      correct: 2
    },
    {
      id: 2,
      question: "There _____ many people at the concert last night.",
      options: ["is", "are", "was", "were", "be"],
      correct: 3
    },
    {
      id: 3,
      question: "She _____ swimming every weekend.",
      options: ["go", "goes", "going", "is go", "does goes"],
      correct: 1
    },
    {
      id: 4,
      question: "What _____ you want for your birthday?",
      options: ["do", "does", "is", "are", "were"],
      correct: 0
    },
    {
      id: 5,
      question: "I will call you _____ I arrive home.",
      options: ["when", "where", "what", "who", "which"],
      correct: 0
    },
    {
      id: 6,
      question: "He bought _____ new yesterday.",
      options: ["something", "anything", "nobody", "everything", "someone"],
      correct: 0
    },
    {
      id: 7,
      question: "The teacher gave _____ the book.",
      options: ["me", "I", "my", "mine", "myself"],
      correct: 0
    },
    {
      id: 8,
      question: "She was _____ to meet her old friend.",
      options: ["happy", "happily", "happiness", "happier", "happiest"],
      correct: 0
    },
    {
      id: 9,
      question: "This movie is _____ than that one.",
      options: ["interesting", "more interesting", "most interesting", "interestingly", "the most interesting"],
      correct: 1
    },
    {
      id: 10,
      question: "I have _____ money to buy a new phone.",
      options: ["enough", "many", "much enough", "too many", "very"],
      correct: 0
    },
    {
      id: 11,
      question: "He _____ play the guitar when he was young.",
      options: ["can", "could", "will", "must", "should"],
      correct: 1
    },
    {
      id: 12,
      question: "_____ did you go on vacation?",
      options: ["What", "Where", "Who", "Which", "Whose"],
      correct: 1
    },
    {
      id: 13,
      question: "If it _____ tomorrow, we will stay home.",
      options: ["rain", "rains", "rained", "raining", "will rain"],
      correct: 1
    },
    {
      id: 14,
      question: "The mice _____ eating cheese in the kitchen.",
      options: ["is", "are", "was", "were", "be"],
      correct: 1
    },
    {
      id: 15,
      question: "I couldn't go to school _____ I was sick.",
      options: ["so", "but", "because", "if", "when"],
      correct: 2
    },
    {
      id: 16,
      question: "Tom is good _____ playing basketball.",
      options: ["in", "on", "at", "for", "to"],
      correct: 2
    },
    {
      id: 17,
      question: "She _____ her homework before dinner yesterday.",
      options: ["finish", "finishes", "finished", "finishing", "will finish"],
      correct: 2
    },
    {
      id: 18,
      question: "Give me _____ water, please.",
      options: ["many", "some", "any", "few", "little"],
      correct: 1
    },
    {
      id: 19,
      question: "The weather will _____ cold tomorrow.",
      options: ["become", "becomes", "becoming", "became", "to become"],
      correct: 0
    },
    {
      id: 20,
      question: "I enjoy _____ books in my free time.",
      options: ["read", "reads", "reading", "to read", "readed"],
      correct: 2
    },
    {
      id: 21,
      question: "_____ you finish your work, you can go home.",
      options: ["Before", "After", "While", "During", "Since"],
      correct: 1
    },
    {
      id: 22,
      question: "This is the _____ building in our city.",
      options: ["tall", "taller", "tallest", "more tall", "most tall"],
      correct: 2
    },
    {
      id: 23,
      question: "She asked me _____ I liked the movie.",
      options: ["that", "if", "what", "when", "which"],
      correct: 1
    },
    {
      id: 24,
      question: "The dog looked _____ when its owner came home.",
      options: ["happy", "happily", "happiness", "more happy", "most happy"],
      correct: 0
    },
    {
      id: 25,
      question: "I have lived here _____ 2010.",
      options: ["for", "since", "during", "while", "from"],
      correct: 1
    }
  ],
  errorDetection: [
    // 감각 능력 문제 (26-45번)
    {
      id: 26,
      sentence: "The teacher (A)asked (B)what (C)did I want (D).",
      correct: 3 // (D) did I want → I wanted
    },
    {
      id: 27,
      sentence: "She (A)has (B)goes (C)to Paris before (D).",
      correct: 2 // (C) goes → gone
    },
    {
      id: 28,
      sentence: "There (A)is (B)many (C)books on the shelf (D).",
      correct: 1 // (B) is → are
    },
    {
      id: 29,
      sentence: "He (A)give (B)me (C)the answer yesterday (D).",
      correct: 1 // (B) give → gave
    },
    {
      id: 30,
      sentence: "I (A)want (B)something (C)to eating (D).",
      correct: 3 // (D) to eating → to eat
    },
    {
      id: 31,
      sentence: "The people (A)was (B)excited (C)about the trip (D).",
      correct: 1 // (B) was → were
    },
    {
      id: 32,
      sentence: "She (A)is (B)happy (C)to seeing you (D).",
      correct: 3 // (D) to seeing → to see
    },
    {
      id: 33,
      sentence: "My brother (A)can (B)speaks (C)English well (D).",
      correct: 2 // (C) speaks → speak
    },
    {
      id: 34,
      sentence: "We (A)went (B)to home (C)after school (D).",
      correct: 2 // (C) to home → home
    },
    {
      id: 35,
      sentence: "The movie (A)was (B)so (C)bored (D).",
      correct: 3 // (D) bored → boring
    },
    {
      id: 36,
      sentence: "Does (A)she (B)has (C)a pet (D)?",
      correct: 2 // (C) has → have
    },
    {
      id: 37,
      sentence: "I (A)have (B)meet (C)him before (D).",
      correct: 2 // (C) meet → met
    },
    {
      id: 38,
      sentence: "Because of (A)she was tired (B), she (C)went to bed early (D).",
      correct: 0 // (A) Because of → Because
    },
    {
      id: 39,
      sentence: "The weather (A)will (B)nice (C)tomorrow (D).",
      correct: 1 // (B) will → will be
    },
    {
      id: 40,
      sentence: "He (A)doesn't (B)likes (C)vegetables (D).",
      correct: 2 // (C) likes → like
    },
    {
      id: 41,
      sentence: "Many people (A)likes (B)to travel (C)during vacation (D).",
      correct: 1 // (B) likes → like
    },
    {
      id: 42,
      sentence: "She (A)looked (B)at (C)himself in the mirror (D).",
      correct: 3 // (D) himself → herself
    },
    {
      id: 43,
      sentence: "If I (A)will have (B)time (C), I will help you (D).",
      correct: 1 // (B) will have → have
    },
    {
      id: 44,
      sentence: "The book (A)what (B)I bought (C)is interesting (D).",
      correct: 1 // (B) what → that/which
    },
    {
      id: 45,
      sentence: "He (A)runs (B)more faster (C)than me (D).",
      correct: 2 // (C) more faster → faster
    }
  ],
  subjective: [
    // 주관식 영작 문제 (46-50번) - 복수 답변 예시
    {
      id: 46,
      question: "그녀는 어제 도서관에 갔었다.",
      answer: "She went to the library yesterday."
    },
    {
      id: 47,
      question: "만약 날씨가 좋으면, 우리는 소풍을 갈 것이다.",
      answer: "If the weather is nice/good, we will go on a picnic."
    },
    {
      id: 48,
      question: "다음 문장의 빈칸을 채우시오. (2개의 답을 쉼표로 구분)\nThere _____ a book on the table. There _____ many students in the classroom.",
      answerCount: 2,
      answers: ["is", "are"]
    },
    {
      id: 49,
      question: "다음 문장을 과거형으로 바꾸시오. (2개의 답을 쉼표로 구분)\nShe _____ (go) to school. They _____ (play) soccer.",
      answerCount: 2,
      answers: ["went", "played"]
    },
    {
      id: 50,
      question: "나는 그를 만나서 기뻤다.",
      answer: "I was happy to meet him."
    }
  ]
}

// 7급 테스트 문제 (초등학교 5학년 수준)
export const grade7Questions = {
  objective: [
    // 인지적 문법능력 문제 (Part A: 1-25번)
    {
      id: 1,
      question: "My sister _____ very tall.",
      options: ["am", "is", "are", "do", "does"],
      correct: 1
    },
    {
      id: 2,
      question: "다음 문장을 의문문으로 바르게 바꾼 것은? They play tennis every Sunday.",
      options: [
        "Do they play tennis every Sunday?",
        "Are they play tennis every Sunday?",
        "Does they play tennis every Sunday?",
        "They do play tennis every Sunday?",
        "Playing they tennis every Sunday?"
      ],
      correct: 0
    },
    {
      id: 3,
      question: "_____ you like pizza?",
      options: ["Is", "Are", "Do", "Does", "Am"],
      correct: 2
    },
    {
      id: 4,
      question: "다음 중 현재진행형 문장은?",
      options: [
        "I play soccer.",
        "I am playing soccer.",
        "I played soccer.",
        "I will play soccer.",
        "I can play soccer."
      ],
      correct: 1
    },
    {
      id: 5,
      question: "다음 문장의 과거형으로 올바른 것은? She is happy.",
      options: ["She was happy.", "She were happy.", "She did happy.", "She been happy.", "She has happy."],
      correct: 0
    },
    {
      id: 6,
      question: "She _____ to school by bus.",
      options: ["go", "goes", "going", "to go", "went"],
      correct: 1
    },
    {
      id: 7,
      question: "다음 중 3인칭 단수 동사가 올바른 문장은?",
      options: [
        "He play basketball.",
        "She like ice cream.",
        "It works well.",
        "Tom study hard.",
        "The cat sleep a lot."
      ],
      correct: 2
    },
    {
      id: 8,
      question: "다음 중 주어와 동사가 올바르게 일치하는 문장은?",
      options: [
        "The boys plays soccer.",
        "My friends is nice.",
        "The children are happy.",
        "People likes music.",
        "The dogs barks loudly."
      ],
      correct: 2
    },
    {
      id: 9,
      question: "My brother and I _____ students.",
      options: ["am", "is", "are", "be", "being"],
      correct: 2
    },
    {
      id: 10,
      question: "다음 중 단수 명사는?",
      options: ["children", "people", "teeth", "mouse", "feet"],
      correct: 3
    },
    {
      id: 11,
      question: "다음 중 목적어 자리에 올바른 것은? I like _____.",
      options: ["he", "his", "him", "she", "we"],
      correct: 2
    },
    {
      id: 12,
      question: "다음 문장에서 목적격 대명사를 찾으세요. She helps me with my homework.",
      options: ["She", "helps", "me", "my", "homework"],
      correct: 2
    },
    {
      id: 13,
      question: "This is _____ book.",
      options: ["me", "my", "I", "mine", "myself"],
      correct: 1
    },
    {
      id: 14,
      question: "다음 중 동사 뒤에 오는 단어의 성격이 다른 것은?",
      options: [
        "I eat pizza.",
        "She reads books.",
        "They watch TV.",
        "He is happy.",
        "We like music."
      ],
      correct: 3
    },
    {
      id: 15,
      question: "다음 문장에서 'sweet'과 같은 역할을 하는 단어가 있는 문장은? The flower smells sweet.",
      options: [
        "She looks beautiful.",
        "They play games.",
        "He eats slowly.",
        "We study hard.",
        "I run fast."
      ],
      correct: 0
    },
    {
      id: 16,
      question: "I want _____ pizza.",
      options: ["eat", "to eat", "eating", "eats", "ate"],
      correct: 1
    },
    {
      id: 17,
      question: "다음 중 형용사는?",
      options: ["quickly", "run", "beautiful", "always", "very"],
      correct: 2
    },
    {
      id: 18,
      question: "다음 문장에서 부사는? She sings very well.",
      options: ["She", "sings", "very", "well", "c와 d 모두"],
      correct: 4
    },
    {
      id: 19,
      question: "다음 중 올바른 문장은?",
      options: [
        "I like read books.",
        "I like to read books.",
        "I like reads books.",
        "I like to reading books.",
        "I like read to books."
      ],
      correct: 1
    },
    {
      id: 20,
      question: "_____ a beautiful day!",
      options: ["How", "What", "Very", "So", "Too"],
      correct: 1
    },
    {
      id: 21,
      question: "I like apples _____ oranges.",
      options: ["and", "but", "because", "when", "if"],
      correct: 0
    },
    {
      id: 22,
      question: "다음 문장의 의미로 올바른 것은? I study hard because I want to be a doctor.",
      options: [
        "의사가 되고 싶지만 열심히 공부한다",
        "의사가 되고 싶어서 열심히 공부한다",
        "의사가 되고 싶을 때 열심히 공부한다",
        "의사가 되고 싶으면 열심히 공부한다",
        "의사가 되고 싶고 열심히 공부한다"
      ],
      correct: 1
    },
    {
      id: 23,
      question: "다음 중 비교급 표현은?",
      options: ["tall", "taller", "tallest", "very tall", "too tall"],
      correct: 1
    },
    {
      id: 24,
      question: "This book is _____ than that one.",
      options: ["good", "better", "best", "well", "more good"],
      correct: 1
    },
    {
      id: 25,
      question: "다음 중 강조 표현이 올바른 문장은?",
      options: [
        "The food is very delicious.",
        "The food is too much delicious.",
        "The food is so much delicious.",
        "The food is many delicious.",
        "The food is much delicious."
      ],
      correct: 0
    }
  ],
  errorDetection: [
    // 감각적 문법능력 문제 (Part B: 26-45번)
    {
      id: 26,
      sentence: "My sister [go] to [school] [by] [bus] everyday.",
      correct: 0 // (A) go → goes
    },
    {
      id: 27,
      sentence: "[I] and my friend [like] [ice cream] very [much].",
      correct: 4 // (E) 틀린 곳 없음
    },
    {
      id: 28,
      sentence: "She [don't] [like] [vegetables] [very] much.",
      correct: 0 // (A) don't → doesn't
    },
    {
      id: 29,
      sentence: "They [is] [playing] basketball [in] the [park] now.",
      correct: 0 // (A) is → are
    },
    {
      id: 30,
      sentence: "[Does] [you] [want] to [eat] pizza tonight?",
      correct: 0 // (A) Does → Do
    },
    {
      id: 31,
      sentence: "He [speaks] English [very] [good] at [school].",
      correct: 2 // (C) good → well
    },
    {
      id: 32,
      sentence: "The [children] [plays] [games] [after] school.",
      correct: 1 // (B) plays → play
    },
    {
      id: 33,
      sentence: "I [seen] [him] at the [mall] [yesterday].",
      correct: 0 // (A) seen → saw
    },
    {
      id: 34,
      sentence: "[This] is [hers] [book] about [animals].",
      correct: 1 // (B) hers → her
    },
    {
      id: 35,
      sentence: "My [mother] [cook] [delicious] food [everyday].",
      correct: 1 // (B) cook → cooks
    },
    {
      id: 36,
      sentence: "[Tom] and [Jerry] [is] [best] friends.",
      correct: 2 // (C) is → are
    },
    {
      id: 37,
      sentence: "She [sings] [beautiful] [songs] [always].",
      correct: 3 // (D) always 위치
    },
    {
      id: 38,
      sentence: "[Do] he [like] to [play] [soccer]?",
      correct: 0 // (A) Do → Does
    },
    {
      id: 39,
      sentence: "I [want] [go] to the [park] [with] you.",
      correct: 1 // (B) go → to go
    },
    {
      id: 40,
      sentence: "The [cat] [sleep] [under] the [table] now.",
      correct: 1 // (B) sleep → is sleeping
    },
    {
      id: 41,
      sentence: "[Him] [gave] [me] a [present] yesterday.",
      correct: 0 // (A) Him → He
    },
    {
      id: 42,
      sentence: "She [runs] [very] [fast] in the [race].",
      correct: 4 // (E) 틀린 곳 없음
    },
    {
      id: 43,
      sentence: "[How] [many] [peoples] [are] there?",
      correct: 2 // (C) peoples → people
    },
    {
      id: 44,
      sentence: "I [think] [that] he [are] [smart].",
      correct: 2 // (C) are → is
    },
    {
      id: 45,
      sentence: "My brother is [taller] [more] [than] [me].",
      correct: 1 // (B) more 삭제
    }
  ],
  subjective: [
    // 영작 능력 문제 (Part C: 46-50번) - 복수 답변 예시
    {
      id: 46,
      question: "나는 매일 아침 7시에 일어나.",
      answer: "I get up at 7 (o'clock) every morning. / I wake up at 7 every morning."
    },
    {
      id: 47,
      question: "다음 빈칸을 채우시오. (2개의 답을 쉼표로 구분)\nTom and I _____ (be) good friends. She _____ (have) a cat.",
      answerCount: 2,
      answers: ["are", "has"]
    },
    {
      id: 48,
      question: "다음 문장을 의문문으로 바꾸시오. (2개의 답을 쉼표로 구분)\n_____ you like pizza? _____ she go to school?",
      answerCount: 2,
      answers: ["Do", "Does"]
    },
    {
      id: 49,
      question: "우리는 지금 숙제를 하고 있어.",
      answer: "We are doing (our) homework now."
    },
    {
      id: 50,
      question: "그는 어제 공원에 갔어.",
      answer: "He went to the park yesterday."
    }
  ]
}

// 2급 테스트 데이터 (중학교 3학년 수준/고급 문법)
export const grade2Questions = {
  objective: [
    // 인지 능력 문제 (1-25번)
    {
      id: 1,
      question: "He suggested that she _____ early tomorrow.",
      options: ["leave", "leaves", "left", "will leave", "leaving"],
      correct: 0
    },
    {
      id: 2,
      question: "_____ the heavy rain, we decided to go out.",
      options: ["Despite", "Although", "Because", "Even if", "While"],
      correct: 0
    },
    {
      id: 3,
      question: "By next month, I _____ here for 5 years.",
      options: ["will live", "will have lived", "have lived", "am living", "lived"],
      correct: 1
    },
    {
      id: 4,
      question: "The book _____ I was looking for is out of print.",
      options: ["that", "what", "where", "when", "how"],
      correct: 0
    },
    {
      id: 5,
      question: "She wishes she _____ speak French fluently.",
      options: ["can", "could", "will", "would", "may"],
      correct: 1
    },
    {
      id: 6,
      question: "_____ carefully he drives, he still gets into accidents.",
      options: ["However", "Whatever", "Whenever", "Wherever", "Whichever"],
      correct: 0
    },
    {
      id: 7,
      question: "The project _____ by the end of this week.",
      options: ["will complete", "will be completing", "will have been completed", "completes", "is completing"],
      correct: 2
    },
    {
      id: 8,
      question: "Not only _____ late, but he also forgot his homework.",
      options: ["he was", "was he", "he is", "is he", "he had been"],
      correct: 1
    },
    {
      id: 9,
      question: "I'd rather you _____ that.",
      options: ["don't do", "didn't do", "not do", "haven't done", "won't do"],
      correct: 1
    },
    {
      id: 10,
      question: "_____ he said was completely false.",
      options: ["What", "That", "Which", "Who", "Where"],
      correct: 0
    },
    {
      id: 11,
      question: "She acts as if she _____ everything.",
      options: ["knows", "knew", "has known", "know", "will know"],
      correct: 1
    },
    {
      id: 12,
      question: "The harder you study, _____ you will become.",
      options: ["the more knowledgeable", "more knowledgeable", "most knowledgeable", "the most knowledgeable", "knowledgeable"],
      correct: 0
    },
    {
      id: 13,
      question: "It's high time we _____ home.",
      options: ["go", "went", "have gone", "will go", "going"],
      correct: 1
    },
    {
      id: 14,
      question: "_____ I known about the meeting, I would have attended.",
      options: ["Have", "Had", "Should", "Were", "If"],
      correct: 1
    },
    {
      id: 15,
      question: "He is said _____ a genius.",
      options: ["to be", "being", "be", "been", "that he is"],
      correct: 0
    },
    {
      id: 16,
      question: "I can't help _____ about the future.",
      options: ["worry", "to worry", "worrying", "worried", "be worried"],
      correct: 2
    },
    {
      id: 17,
      question: "_____ surprising the news was!",
      options: ["How", "What", "What a", "How a", "Such"],
      correct: 0
    },
    {
      id: 18,
      question: "She is the woman _____ I told you.",
      options: ["about whom", "whom about", "who about", "about who", "that about"],
      correct: 0
    },
    {
      id: 19,
      question: "But for your help, I _____ failed.",
      options: ["would have", "will have", "had", "have", "would"],
      correct: 0
    },
    {
      id: 20,
      question: "_____ as he might, he couldn't solve the problem.",
      options: ["Try", "Trying", "To try", "Tried", "Having tried"],
      correct: 0
    },
    {
      id: 21,
      question: "She insisted that he _____ the truth.",
      options: ["tell", "tells", "told", "has told", "will tell"],
      correct: 0
    },
    {
      id: 22,
      question: "_____ you need any help, please let me know.",
      options: ["Should", "Would", "Could", "Might", "Must"],
      correct: 0
    },
    {
      id: 23,
      question: "The meeting _____ when we arrived.",
      options: ["has already started", "had already started", "already started", "was already starting", "already starts"],
      correct: 1
    },
    {
      id: 24,
      question: "I would appreciate _____ if you could help me.",
      options: ["it", "that", "this", "what", "which"],
      correct: 0
    },
    {
      id: 25,
      question: "_____ is known to everyone, the earth is round.",
      options: ["As", "That", "What", "Which", "It"],
      correct: 0
    }
  ],
  errorDetection: [
    // 감각 능력 문제 (26-45번)
    {
      id: 26,
      sentence: "He (A)suggested (B)her (C)to leave (D)early.",
      correct: 2 // (C) to leave → leave
    },
    {
      id: 27,
      sentence: "The teacher (A)demanded (B)that the student (C)hands in (D)the assignment.",
      correct: 2 // (C) hands in → hand in
    },
    {
      id: 28,
      sentence: "Were (A)I (B)you, I (C)will accept (D)the offer.",
      correct: 2 // (C) will accept → would accept
    },
    {
      id: 29,
      sentence: "Not until (A)yesterday (B)I realized (C)the importance (D)of the matter.",
      correct: 1 // (B) I realized → did I realize
    },
    {
      id: 30,
      sentence: "She (A)would rather (B)to stay (C)at home (D)tonight.",
      correct: 1 // (B) to stay → stay
    },
    {
      id: 31,
      sentence: "It is (A)essential (B)that he (C)is (D)present.",
      correct: 2 // (C) is → be
    },
    {
      id: 32,
      sentence: "I wish (A)I (B)didn't say (C)that (D)yesterday.",
      correct: 1 // (B) didn't say → hadn't said
    },
    {
      id: 33,
      sentence: "Hardly (A)I had (B)arrived (C)when (D)it started raining.",
      correct: 0 // (A) I had → had I
    },
    {
      id: 34,
      sentence: "He is (A)supposed (B)to having finished (C)the work (D)by now.",
      correct: 1 // (B) to having finished → to have finished
    },
    {
      id: 35,
      sentence: "The more (A)you practice, (B)better (C)you become (D).",
      correct: 1 // (B) better → the better
    },
    {
      id: 36,
      sentence: "It's time (A)you (B)go (C)to bed (D).",
      correct: 1 // (B) go → went
    },
    {
      id: 37,
      sentence: "But (A)for his help, (B)I (C)will have failed (D)the exam.",
      correct: 2 // (C) will have failed → would have failed
    },
    {
      id: 38,
      sentence: "She (A)behaves (B)as if she (C)is (D)a queen.",
      correct: 2 // (C) is → were
    },
    {
      id: 39,
      sentence: "Having (A)finishing (B)the work, (C)he went (D)home.",
      correct: 0 // (A) finishing → finished
    },
    {
      id: 40,
      sentence: "He (A)is known (B)having been (C)a famous singer (D).",
      correct: 1 // (B) having been → to have been
    },
    {
      id: 41,
      sentence: "I'd rather (A)you (B)don't smoke (C)in here (D).",
      correct: 1 // (B) don't smoke → didn't smoke
    },
    {
      id: 42,
      sentence: "No sooner (A)I had left (B)than (C)it began (D)to rain.",
      correct: 0 // (A) I had left → had I left
    },
    {
      id: 43,
      sentence: "It is (A)important (B)that she (C)finishes (D)on time.",
      correct: 2 // (C) finishes → finish
    },
    {
      id: 44,
      sentence: "Had (A)I known (B)the truth, I (C)will tell (D)you.",
      correct: 2 // (C) will tell → would have told
    },
    {
      id: 45,
      sentence: "She wishes (A)she (B)can speak (C)French (D)fluently.",
      correct: 1 // (B) can speak → could speak
    }
  ],
  subjective: [
    // 주관식 영작 문제 (46-50번)
    {
      id: 46,
      question: "그가 일찍 출발할 것을 제안한다. (suggest 사용)",
      answer: "I suggest that he (should) leave early."
    },
    {
      id: 47,
      question: "비가 왔더라면, 우리는 집에 있었을 것이다. (가정법 과거완료)",
      answer: "If it had rained, we would have stayed home."
    },
    {
      id: 48,
      question: "그녀는 프랑스어를 할 수 있었으면 좋겠다고 생각한다. (wish 사용)",
      answer: "She wishes (that) she could speak French."
    },
    {
      id: 49,
      question: "그가 말한 것은 모두 거짓이었다. (What으로 시작)",
      answer: "What he said was all false/lies."
    },
    {
      id: 50,
      question: "열심히 공부할수록, 더 많이 알게 될 것이다. (the 비교급, the 비교급)",
      answer: "The harder you study, the more you will know/learn."
    }
  ]
}

// 1급 테스트 문제 (고등학교 1학년)
export const grade1Questions = {
  objective: [
    // 50문제 모두 구현
    {
      id: 1,
      question: "_____ he had been working all day, he didn't feel tired.",
      options: ["Although", "Despite", "In spite", "However", "Because"],
      correct: 0
    },
    {
      id: 2,
      question: "She suggested that the meeting _____ postponed.",
      options: ["be", "is", "was", "will be", "would be"],
      correct: 0
    },
    {
      id: 3,
      question: "By this time next year, they _____ married for 10 years.",
      options: ["will be", "will have been", "are", "have been", "had been"],
      correct: 1
    },
    {
      id: 4,
      question: "The article _____ in yesterday's newspaper was very informative.",
      options: ["published", "publishing", "to publish", "publishes", "has published"],
      correct: 0
    },
    {
      id: 5,
      question: "It is imperative that he _____ the documents immediately.",
      options: ["sign", "signs", "signed", "will sign", "would sign"],
      correct: 0
    },
    {
      id: 6,
      question: "_____ the circumstances, I think we made the right decision.",
      options: ["Given", "Giving", "To give", "Having given", "Being given"],
      correct: 0
    },
    {
      id: 7,
      question: "Scarcely _____ when the phone rang.",
      options: ["had I arrived", "I had arrived", "I arrived", "did I arrive", "I did arrive"],
      correct: 0
    },
    {
      id: 8,
      question: "The proposal _____ by the committee is under consideration.",
      options: ["put forward", "putting forward", "to put forward", "puts forward", "has put forward"],
      correct: 0
    },
    {
      id: 9,
      question: "Were it not for his help, I _____ the project.",
      options: ["couldn't finish", "couldn't have finished", "can't finish", "won't finish", "didn't finish"],
      correct: 1
    },
    {
      id: 10,
      question: "_____ is a matter of great concern to all of us.",
      options: ["That the environment is deteriorating", "The environment deteriorating", "The environment is deteriorating", "Because the environment is deteriorating", "If the environment is deteriorating"],
      correct: 0
    },
    {
      id: 11,
      question: "He spoke as though he _____ the incident himself.",
      options: ["had witnessed", "witnessed", "witnesses", "has witnessed", "will witness"],
      correct: 0
    },
    {
      id: 12,
      question: "_____ only after several attempts did I succeed.",
      options: ["It was", "There was", "This was", "That was", "What was"],
      correct: 0
    },
    {
      id: 13,
      question: "The manager insisted that all employees _____ the new policy.",
      options: ["follow", "follows", "followed", "will follow", "would follow"],
      correct: 0
    },
    {
      id: 14,
      question: "_____ he to arrive late, we would start without him.",
      options: ["Were", "Should", "Had", "Would", "Could"],
      correct: 0
    },
    {
      id: 15,
      question: "The discovery of penicillin _____ to be one of the most important medical breakthroughs.",
      options: ["has proved", "proved", "is proving", "had proved", "will prove"],
      correct: 0
    },
    {
      id: 16,
      question: "Not until the early 20th century _____ to vote in most countries.",
      options: ["women were allowed", "were women allowed", "allowed women", "women allowed", "did women allow"],
      correct: 1
    },
    {
      id: 17,
      question: "He would rather we _____ the matter now.",
      options: ["discussed", "discuss", "will discuss", "are discussing", "have discussed"],
      correct: 0
    },
    {
      id: 18,
      question: "_____ the report, she immediately called a meeting.",
      options: ["Having read", "Having been read", "To read", "Reading", "Read"],
      correct: 0
    },
    {
      id: 19,
      question: "It's essential that every student _____ their assignment on time.",
      options: ["submit", "submits", "submitted", "will submit", "would submit"],
      correct: 0
    },
    {
      id: 20,
      question: "The architect, _____ designs have won many awards, is giving a lecture.",
      options: ["whose", "who's", "whom", "which", "that"],
      correct: 0
    },
    {
      id: 21,
      question: "_____ surprising as it may seem, the plan actually worked.",
      options: ["Much", "As", "So", "Too", "Very"],
      correct: 1
    },
    {
      id: 22,
      question: "The committee recommended that the proposal _____ revised.",
      options: ["be", "is", "was", "will be", "would be"],
      correct: 0
    },
    {
      id: 23,
      question: "Hardly _____ the station when the train left.",
      options: ["had we reached", "we had reached", "we reached", "did we reach", "we did reach"],
      correct: 0
    },
    {
      id: 24,
      question: "_____ remains to be seen.",
      options: ["Whether he will succeed", "That he will succeed", "If he will succeed", "He will succeed", "Will he succeed"],
      correct: 0
    },
    {
      id: 25,
      question: "The professor requires that all papers _____ typed.",
      options: ["be", "are", "were", "will be", "would be"],
      correct: 0
    },
    {
      id: 26,
      question: "_____ did I realize the importance of the decision.",
      options: ["Only then", "Then only", "Only when", "When only", "Just only"],
      correct: 0
    },
    {
      id: 27,
      question: "She acts as if she _____ the owner of the company.",
      options: ["were", "is", "was", "has been", "will be"],
      correct: 0
    },
    {
      id: 28,
      question: "The evidence suggests that the theory _____ correct.",
      options: ["may be", "maybe", "may to be", "may being", "may been"],
      correct: 0
    },
    {
      id: 29,
      question: "_____ for the delay, we would have arrived on time.",
      options: ["Had it not been", "If it had not been", "Were it not", "Should it not be", "If it were not"],
      correct: 0
    },
    {
      id: 30,
      question: "It is crucial that the patient _____ the medication as prescribed.",
      options: ["take", "takes", "took", "will take", "would take"],
      correct: 0
    },
    {
      id: 31,
      question: "No sooner _____ than it started to rain.",
      options: ["had we left", "we had left", "we left", "did we leave", "we did leave"],
      correct: 0
    },
    {
      id: 32,
      question: "The judge ordered that the defendant _____ present at the hearing.",
      options: ["be", "is", "was", "will be", "would be"],
      correct: 0
    },
    {
      id: 33,
      question: "_____ carefully the instructions, he still made mistakes.",
      options: ["Despite reading", "In spite reading", "Although reading", "Even reading", "While read"],
      correct: 0
    },
    {
      id: 34,
      question: "It was proposed that the system _____ upgraded.",
      options: ["be", "is", "was", "will be", "would be"],
      correct: 0
    },
    {
      id: 35,
      question: "_____ he known the truth, he would have acted differently.",
      options: ["Had", "Have", "Has", "Having", "Should"],
      correct: 0
    },
    {
      id: 36,
      question: "The doctor recommended that she _____ more exercise.",
      options: ["get", "gets", "got", "will get", "would get"],
      correct: 0
    },
    {
      id: 37,
      question: "_____ the difficulties, they managed to complete the project.",
      options: ["Notwithstanding", "Nevertheless", "Although", "Because", "Since"],
      correct: 0
    },
    {
      id: 38,
      question: "It is vital that everyone _____ the safety procedures.",
      options: ["understand", "understands", "understood", "will understand", "would understand"],
      correct: 0
    },
    {
      id: 39,
      question: "The data _____ that our hypothesis was correct.",
      options: ["indicate", "indicates", "is indicating", "are indicating", "have indicated"],
      correct: 0
    },
    {
      id: 40,
      question: "_____ you to need help, don't hesitate to ask.",
      options: ["Were", "Should", "Would", "Could", "Might"],
      correct: 1
    },
    {
      id: 41,
      question: "The motion that the meeting _____ adjourned was accepted.",
      options: ["be", "is", "was", "will be", "would be"],
      correct: 0
    },
    {
      id: 42,
      question: "Little _____ that his invention would change the world.",
      options: ["did he know", "he did know", "he knew", "knew he", "he had known"],
      correct: 0
    },
    {
      id: 43,
      question: "It is important that she _____ informed immediately.",
      options: ["be", "is", "was", "will be", "would be"],
      correct: 0
    },
    {
      id: 44,
      question: "_____ I in your position, I would accept the offer.",
      options: ["Were", "Was", "Am", "Be", "Being"],
      correct: 0
    },
    {
      id: 45,
      question: "The board demanded that he _____ his resignation.",
      options: ["submit", "submits", "submitted", "will submit", "would submit"],
      correct: 0
    },
    {
      id: 46,
      question: "_____ as it was, we decided to continue.",
      options: ["Late", "Later", "Latest", "Lately", "Lateness"],
      correct: 0
    },
    {
      id: 47,
      question: "She requested that the report _____ by Friday.",
      options: ["be completed", "is completed", "was completed", "will be completed", "would be completed"],
      correct: 0
    },
    {
      id: 48,
      question: "_____ did he realize his mistake.",
      options: ["Only later", "Later only", "Only late", "Late only", "Just later"],
      correct: 0
    },
    {
      id: 49,
      question: "It is necessary that the agreement _____ signed by both parties.",
      options: ["be", "is", "was", "will be", "would be"],
      correct: 0
    },
    {
      id: 50,
      question: "The suggestion that we _____ the deadline was rejected.",
      options: ["extend", "extends", "extended", "will extend", "would extend"],
      correct: 0
    }
  ],
  errorDetection: [],
  subjective: []
}

// 테스트 데이터 통합 관리
export const testData = {
  '1급': grade1Questions,
  '2급': grade2Questions,
  '3급': grade3Questions,
  '4급': grade4Questions,
  '5급': grade5Questions,
  '6급': grade6Questions,
  '7급': grade7Questions
}