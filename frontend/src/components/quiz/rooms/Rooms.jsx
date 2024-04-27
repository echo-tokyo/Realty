import { useEffect } from 'react'
import '../quiz.css'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {setRooms} from '../../../store/quiz/quiz.slice'

const Rooms = () => {
	const nav = useNavigate()
	const get = useSelector((state) => state.quiz.rooms)
	const dispatch = useDispatch()

	const isChecked = (e) => {
		if(!e.target.parentElement.classList.contains('checked')){
			setTimeout(() => {
				nav('/new-building-or-resale')
			}, 300);
		}
		document.querySelectorAll('.r').forEach(element => {
			if(element.checked){
				element.parentElement.classList.add('checked')
				dispatch(setRooms(element.id))
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
				isChecked = true;
				nav('/new-building-or-resale');
				break
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
				<h1>Вопрос 2</h1>
				<h3>Выберите тип квартиры</h3>
			</div>
			<form action="" className='quiz_form rooms_quiz_form'>
				<label className="inp inp1"  htmlFor="inp">
					<input type="radio" id='inp' name='radio' className='r' onClick={(e) => isChecked(e)}/>
					<h3>Гостинница</h3>
				</label>
				<label className="inp inp2"  htmlFor="inp2">
					<input type="radio" id='inp2' name='radio' className='r' onClick={(e) => isChecked(e)}/>
					<h3>Студия</h3>
				</label>
				<label className="inp inp3"  htmlFor="inp3">
					<input type="radio" id='inp3' name='radio' className='r' onClick={(e) => isChecked(e)}/>
					<h3>1-Комнатная</h3>
				</label>
				<label className="inp inp4"  htmlFor="inp4">
					<input type="radio" id='inp4' name='radio' className='r' onClick={(e) => isChecked(e)}/>
					<h3>Евро 2-комнатная</h3>
				</label>
				<label className="inp inp5"  htmlFor="inp5">
					<input type="radio" id='inp5' name='radio' className='r' onClick={(e) => isChecked(e)}/>
					<h3>2-Комнатная</h3>
				</label>
				<label className="inp inp6"  htmlFor="inp6">
					<input type="radio" id='inp6' name='radio' className='r' onClick={(e) => isChecked(e)}/>
					<h3>Евро 3-комнатная</h3>
				</label>
				<label className="inp inp7"  htmlFor="inp7">
					<input type="radio" id='inp7' name='radio' className='r' onClick={(e) => isChecked(e)}/>
					<h3>3-Комнатная</h3>
				</label>
				<label className="inp inp8"  htmlFor="inp8">
					<input type="radio" id='inp8' name='radio' className='r' onClick={(e) => isChecked(e)}/>
					<h3>4-Комнатная</h3>
				</label>
			</form>
		</div>
		<footer>
			<div className="footer_items">
				<button className='prev' onClick={() => nav('/apartment-or-house')}>Назад</button>
				<button className='next' onClick={() => next()}>Вперед</button>
			</div>
		</footer>
		</>
	)
}

export default Rooms