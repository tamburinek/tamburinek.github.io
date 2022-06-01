const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const hOne = document.getElementById("h1")
// const hOne2 = document.getElementById("second")
const ig = document.getElementById("ig")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  hOne.classList.add('hide')
  startButton.classList.add('hide')
  shuffledQuestions = questions
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    currentQuestionIndex++
    setNextQuestion()
  } else {
    startButton.innerText = 'Show result'
    questionContainerElement.classList.add('hide')
    startButton.classList.remove('hide')
    startButton.removeEventListener("click",startGame )
    startButton.addEventListener("click",() => {
      startButton.classList.add('hide')
      let value5 = generateRandomIntegerInRange(85, 100);
      hOne.innerText = "Naše shoda je " + value5 +"% a proto bychom se měli seznámit více."
      hOne.classList.remove('hide')
      // hOne2.classList.remove('hide')
      ig.classList.remove('hide')
      ig.addEventListener('click', () => {
        document.location = "https://www.instagram.com/tamburinek/?hl=cs"
      })
    })
  }
}

function generateRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Jakého jsi znamení?',
    answers: [
      { text: 'Beran', correct: true },
      { text: 'Býk', correct: false },
      { text: 'Blíženci', correct: true },
      { text: 'Rak', correct: false },
      { text: 'Lev', correct: true },
      { text: 'Panna', correct: false },
      { text: 'Váhy', correct: true },
      { text: 'Štír', correct: false },
      { text: 'Střelec', correct: true },
      { text: 'Kozoroh', correct: false },
      { text: 'Vodnář', correct: true },
      { text: 'Ryby', correct: false }
    ]
  },
  {
    question: 'Apple music nebo spotify?',
    answers: [
      { text: 'Apple music', correct: true },
      { text: 'Spotify', correct: true },
      { text: 'Nemám peníze', correct: true },
      { text: 'Gramofon', correct: true }
    ]
  },
  {
    question: 'Máš instagram?',
    answers: [
      { text: 'Ano', correct: false },
      { text: 'Ano!!!', correct: true },
    ]
  },
  {
    question: 'Máš zájem poznat skvělého člověka?',
    answers: [
      { text: 'Samozřejmě', correct: false },
      { text: 'Jistě', correct: true }
    ]
  },
  {
    question: 'Kredit nebo Debit',
    answers: [
      { text: 'Kredit šéfe', correct: false },
      { text: 'Debit šéfe', correct: true }
    ]
  }
]