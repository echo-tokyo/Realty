import { useEffect } from 'react'
import '../quiz.css'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {setApartmentOrHouse, setRooms} from '../../../store/quiz/quiz.slice'

const ApartmentOrHouse = () => {
	const nav = useNavigate()
	const get = useSelector((state) => state.quiz.apartmentOrHouse)
	const dispatch = useDispatch()

	const isChecked = (e) => {
		if(!e.target.parentElement.classList.contains('checked') && e.target.parentElement.classList.contains('inp1')){
			setTimeout(() => {
				nav('/rooms')
			}, 300)
		}
		else if (!e.target.parentElement.classList.contains('checked') && e.target.parentElement.classList.contains('inp2')) {
			setTimeout(() => {
				nav('/new-building-or-resale')
				dispatch(setRooms(false))
			}, 300)
		}
		document.querySelectorAll('.r').forEach(element => {
			if(element.checked){
				element.parentElement.classList.add('checked')
				dispatch(setApartmentOrHouse(element.id))
			}
			else{
				element.parentElement.classList.remove('checked')
				element.style.backgroundColor = null
			}
		})
	} 
	
	useEffect(() => {
		if (get !== false) {
			document.querySelector(`.${get}`).classList.add('checked')
			document.getElementById(`${get}`).style.backgroundColor = '#81DBE1'
			document.getElementById(`${get}`).checked = true
		}
	}, [])
	
	const next = () => {
		let isChecked = false;
		for (let i = 0; i < document.querySelectorAll('.r').length; i++) { 
			if (document.querySelectorAll('.r')[i].checked) {
				if(document.querySelectorAll('.r')[i].id === 'inp') {
					isChecked = true;
					nav('/rooms')
					break
				}
				else {
					isChecked = true;
					nav('/new-building-or-resale')
					dispatch(setRooms(false))
					break
				}
			}
		}
		if (!isChecked) { 
			alert('Выберите хотя бы один вариант'); 
		}
	}

	return (
		<>
		<div className="content element-animation">
			<div className="quiz_text">
				<h1>Вопрос 1</h1>
				<h3>Выберите подходящий вариант</h3>
			</div>
			<form action="" className='quiz_form'>
				<label className="inp inp1"  htmlFor="inp">
					<input type="radio" id='inp' name='radio' className='r' onClick={(e) => isChecked(e)}/>
					<h3>Квартира</h3>
				</label>
				<label className="inp inp2"  htmlFor="inp2">
					<input type="radio" id='inp2' name='radio' className='r' onClick={(e) => isChecked(e)}/>
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

export default ApartmentOrHouse