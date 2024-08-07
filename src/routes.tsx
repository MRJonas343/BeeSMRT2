import { Route, Routes, HashRouter } from "react-router-dom"
import { Suspense, lazy } from "react"
//* Components
import Spinner from "@components/Spinner"
import HomePage from "@routes/home/HomePage"

const About = lazy(() => import("@routes/about/About"))
const Contact = lazy(() => import("@routes/contact/Contact"))
const NotFound = lazy(() => import("@routes/notFound/NotFound"))
const LogIn = lazy(() => import("@routes/login/Login"))
const SignUp = lazy(() => import("@routes/signup/SignUp"))
const PrivacyPolicy = lazy(() => import("@routes/privacypolicy/PrivacyPolicy"))
const MyAccNew = lazy(() => import("@routes/myAccount/MyAccNew"))

const MemoryGameMode = lazy(
	() => import("@routes/games/memoryGame/MemoryGameMode"),
)
const MemoryGame1vs1 = lazy(
	() => import("@routes/games/memoryGame/MemoryGame1vs1"),
)
const HangmanGameMode = lazy(
	() => import("@routes/games/hangmanGame/HangmanGameMode"),
)
const HangmanGameSingle = lazy(
	() => import("@routes/games/hangmanGame/HangmanGameSingle"),
)
const DragDropGameMode = lazy(
	() => import("@routes/games/dragDropGame/DragDropGameMode"),
)
const DragDropGameSingle = lazy(
	() => import("@routes/games/dragDropGame/DragDropGameSingle"),
)
const MemoryGameSingle = lazy(
	() => import("@routes/games/memoryGame/MemoryGameSingle"),
)
const MemoryGameLevels = lazy(
	() => import("@routes/games/memoryGame/MemoryGameLevels"),
)

const HangmanGameLevels = lazy(
	() => import("@routes/games/hangmanGame/HangmanGameLevels"),
)

const HangmanGame1vs1 = lazy(
	() => import("@routes/games/hangmanGame/HangmanGame1vs1"),
)

const DragDropGameLevels = lazy(
	() => import("@routes/games/dragDropGame/DragDropLevels"),
)

const DragDropGame1vs1 = lazy(
	() => import("@routes/games/dragDropGame/DragDrop1vs1"),
)

const SentenceScrambleMode = lazy(
	() => import("@routes/games/sentenceScramble/SentenceScrambleMode"),
)

const SentenceScrambleSingleMode = lazy(
	() => import("@routes/games/sentenceScramble/SentenceScrambleSingleMode"),
)
const SentenceScrambleSingle = lazy(
	() => import("@routes/games/sentenceScramble/SentenceScrambleLevels"),
)
const Leaderboard = lazy(() => import("@routes/myAccount/Scoreboard"))
const RoutesTree = () => {
	return (
		<Suspense
			fallback={
				<div className="flex w-dvw h-dvh items-center justify-center bg-Gradient1">
					<Spinner />
				</div>
			}
		>
			<HashRouter>
				<Routes>
					{/* App rotes */}
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/login" element={<LogIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/privacypolicy" element={<PrivacyPolicy />} />
					<Route path="/myaccount" element={<MyAccNew />} />
					<Route path="/myAccount/MyAccNew" element={<MyAccNew />} />
					<Route path="/myAccount/Scoreboard" element={<Leaderboard />} />

					{/* Memory Game Routes */}
					<Route path="/games/memorygameMode" element={<MemoryGameMode />} />
					<Route
						path="/games/memorygameLevels"
						element={<MemoryGameLevels />}
					/>
					<Route path="/games/memorygame1vs1" element={<MemoryGame1vs1 />} />
					<Route
						path="/games/memorygameSingle"
						element={<MemoryGameSingle />}
					/>

					{/* Hangman Game Routes */}
					<Route
						path="/games/hangmangameLevels"
						element={<HangmanGameLevels />}
					/>
					<Route
						path="/games/hangmangameSingle"
						element={<HangmanGameSingle />}
					/>
					<Route path="/games/hangmangameMode" element={<HangmanGameMode />} />
					<Route path="/games/hangmangame1vs1" element={<HangmanGame1vs1 />} />

					{/* DragDrop Game Routes */}
					<Route
						path="/games/dragdropgameMode"
						element={<DragDropGameMode />}
					/>
					<Route
						path="/games/dragdropgameSingle"
						element={<DragDropGameSingle />}
					/>
					<Route path="/games/dragdrop1vs1" element={<DragDropGame1vs1 />} />
					<Route
						path="/games/dragdropgameLevels"
						element={<DragDropGameLevels />}
					/>

					{/* Sentence Scramble Routes */}
					<Route
						path="/games/sentenceScrambleMode"
						element={<SentenceScrambleMode />}
					/>
					<Route
						path="/games/sentenceScrambleLevels"
						element={<SentenceScrambleSingle />}
					/>
					<Route
						path="/games/sentenceScrambleSingle"
						element={<SentenceScrambleSingleMode />}
					/>
				</Routes>
			</HashRouter>
		</Suspense>
	)
}

export default RoutesTree
