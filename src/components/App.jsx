import '../assets/global.css'
import '../assets/reset.css'
import Intro from './intro/Intro'
import Quiz from './quiz/Quiz'

const App = () => {
	return (
		<>
			<Intro />
			<div className="content">
				<Quiz />
			</div>
		</>
	)
}

export default App