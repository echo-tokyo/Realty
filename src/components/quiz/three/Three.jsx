import '../quiz.css'
import {useNavigate} from 'react-router-dom'

const Three = () => {
	const nav = useNavigate()
	return (
		<>
		<div className="content">
			<div className="quiz_text">
				<h1>Вопрос 3 из 6</h1>
				<h3>Укажите ваш бюджет</h3>
			</div>
			<form action="" className='quiz_form'>
				<input type="number" placeholder='руб'/>
			</form>
		</div>
		<footer>
			<div className="footer_items">
				<button className='prev'onClick={() => nav('/second')}>Назад</button>
				<button className='next'>Вперед</button>
			</div>
		</footer>
		</>
	)
}

export default Three