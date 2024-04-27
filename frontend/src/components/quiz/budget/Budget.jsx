import '../quiz.css'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setBudget } from '../../../store/quiz/quiz.slice'

const Budget = () => {
	const nav = useNavigate()
	const get = useSelector((state) => state.quiz.budget)
	const isRoomsSelected = useSelector((state) => state.quiz.rooms)
	const dispatch = useDispatch()

	const scrollToTop = () => {
		window.scrollTo(0, 0)
	}

	const isChange = () => {
		dispatch(setBudget(document.querySelector('input').value))
	}

	useEffect(() => {
		if(get !== false){
			document.querySelector('input').value = get
		}
	}, [])

	const next = () => {
		if (document.querySelector('input').value >= 3000000){
			nav('/renovated-or-not')
		}
		else{
			alert('Укажите число от трёх миллионов рублей')
		}
	}

	return (
		<>
		<div className="content element-animation">
			<div className="quiz_text">
				<h1>Вопрос {isRoomsSelected === false ? '3' : '4'}</h1>
				<h3>Укажите ваш бюджет</h3>
			</div>
			<form action="" className='quiz_form three_quiz_form' onChange={() => isChange()} onSubmit={(e) => e.preventDefault()}>
				<input type="number" placeholder='От 3млн рублей' onBlur={(e) => scrollToTop(e)}/>
			</form>
		</div>
		<footer>
			<div className="footer_items">
				<button className='prev' onClick={() => nav('/new-building-or-resale')}>Назад</button>
				<button className='next' onClick={() => next()}>Вперед</button>
			</div>
		</footer>
		</>
	)
}

export default Budget