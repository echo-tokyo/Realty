import { useEffect } from 'react'
import '../quiz.css'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const One = () => {
	const nav = useNavigate()
	const get = useSelector((state) => state.quiz.first)
	console.log(get)
	
	const isChecked = () => {
		document.querySelectorAll('.r').forEach(element => {
			if(element.checked){
				element.parentElement.classList.add('checked')
			}
			else{
				element.parentElement.classList.remove('checked')
			}
		})
	} 
	
	useEffect(() => {

		isChecked()
	}, [])

	const next = () => {
		
		nav('/second')
	}
	return (
		<>
		<div className="content">
			<div className="quiz_text">
				<h1>Вопрос 1 из 6</h1>
				<h3>Выберите подходящий вариант</h3>
			</div>
			<form action="" className='quiz_form' onClick={() => isChecked()}>
				<label className="inp inp1"  htmlFor="inp">
					<input type="radio" id='inp' name='radio' className='r'/>
					<h3>Квартира</h3>
				</label>
				<label className="inp inp2"  htmlFor="inp2">
					<input type="radio" id='inp2' name='radio' className='r'/>
					<h3>Дом</h3>
				</label>
			</form>
		</div>
		<footer>
			<div className="footer_items">
				<button className='prev' onClick={() => nav('/')}>Назад</button>
				<button className='next' onClick={() => next()}>Вперед</button>
			</div>
		</footer>
		</>
	)
}

export default One