import './intro.css'
import {useNavigate} from 'react-router-dom'

const Intro = () => {
	const nav = useNavigate()
	return (
		<div className="wrapper">
			<div className="text">
				<h1>Найдите свою идеальную квартиру с помощью умного квиза!</h1>
				<h3>Ответьте на несколько вопросов и мы подберем лучшие варианты жилья, отвечающие всем вашим требованиям.</h3>
			</div>
			<button onClick={() => nav('/first')}>Найти</button>
		</div>
	)
}

export default Intro