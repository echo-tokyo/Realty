import '../quiz.css'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setThird } from '../../../store/quiz/quiz.slice'

const Three = () => {
	const nav = useNavigate()
	const get = useSelector((state) => state.quiz.budget)
	const dispatch = useDispatch()

	const scrollToTop = (e) => {
		window.scrollTo(0, 0)
		e.preventDefault()
		e.tabindex = -1
	}

	const isChange = () => {
		dispatch(setThird(document.querySelector('input').value))
	}

	useEffect(() => {
		if(get !== false){
			document.querySelector('input').value = get
		}
	}, [])

	const next = () => {
		if (document.querySelector('input').value >= 3000000){
			nav('/fourth')
		}
		else{
			alert('Укажите число от трёх миллионов рублей')
		}
	}

	return (
		<>
		<div className="content element-animation">
			<div className="quiz_text">
				<h1>Вопрос 3 из 6</h1>
				<h3>Укажите ваш бюджет</h3>
			</div>
			<form action="" className='quiz_form three_quiz_form' onChange={() => isChange()} onSubmit={(e) => e.preventDefault()}>
				<input type="number" placeholder='От 3млн рублей' onBlur={(e) => scrollToTop(e)}/>
			</form>
		</div>
		<footer>
			<div className="footer_items">
				<button className='prev' onClick={() => nav('/second')}>Назад</button>
				<button className='next' onClick={() => next()}>Вперед</button>
			</div>
		</footer>
		</>
	)
}

export default Three