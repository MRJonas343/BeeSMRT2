export interface HomeCardProps {
  imageSrc: string
  title: string
  text: string
}

export interface AboutCardProps {
  image: string
  title: string
  text: string
}

export interface BasicModalProps {
  showModal: boolean
  imageSrc: string
  message: string
  mainMessage: string
  closeModal: () => void | null
}

export interface MemoryGameButttonProps {
  card: any
  flipped: boolean
  chooseCard: any
}

export interface MemoryGameStatsProps {
  isPlayer1Active: boolean
  player1Points: number
  player2Points: number
  playAgain: () => void
}

export interface MemoryGameModalProps {
  showModal: boolean
  Question: string
  imageSrc: string
  answer1: string
  answer2: string
  answer3: string
  answer4: string
  handleSubmit: any
}

export interface CardMemoryGameProps {
  id: number
  src: string
  matched: boolean
  question: string
  correctAnswer: string
  incorrectAnswers: any
}

export interface KeyHangmanGameProps {
  element: string
}