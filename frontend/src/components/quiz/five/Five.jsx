import { setFifth } from '../../../store/quiz/quiz.slice'
import '../quiz.css'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'

const Five = () => {
	const nav = useNavigate()
	const dispatch = useDispatch()
	const get = useSelector((state) => state.quiz.districts)

	const isChecked = (e) => {
		if(!e.target.classList.contains('o')){
			document.querySelector('.o').checked = false
		}
		const checkedValues = []
		document.querySelectorAll('.c').forEach(element => {
			if (element.checked) {
				if (element.classList.contains('o')){
					checkedValues.push(element.id)
					return
				}
				else{
					checkedValues.push(element.id)
					element.parentElement.classList.add('checked')
				}
			} else {
				element.parentElement.classList.remove('checked')
				element.style.backgroundColor = null
			}
		})
		dispatch(setFifth(checkedValues))
	}

	const uncheckAll = () => {
		document.querySelectorAll('.r').forEach(element => {
			element.checked = false
			element.parentElement.classList.remove('checked')
			element.parentElement.style.backgroundColor = null
		});
	}

	useEffect(() => {
		if (get !== false && get.length > 0) {
			get.forEach(input => {
				if(get[0] !== 'inp9'){
					document.querySelector(`.${input}`).classList.add('checked');
				}
				document.getElementById(`${input}`).style.backgroundColor = '#81DBE1'
				document.getElementById(`${input}`).checked = true
			});
		}
	}, [])

	const next = () => {
		let isChecked = false;
		for (let i = 0; i < document.querySelectorAll('.c').length; i++) { 
			if (document.querySelectorAll('.c')[i].checked) { 
				isChecked = true;
				nav('/sixth');
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
			<div className="quiz_text fifth_quiz_text">
				<h1>Вопрос 5 из 6</h1>
				<h3>Укажите желаемые районы в Ростове-на-Дону</h3>
			</div>
			<form action="" className='quiz_form fifth_quiz_form'>
				<div className="other_city">
					<input type="checkbox" id='inp9' name='radio' className='c o' onClick={(e) => {
						uncheckAll()
						isChecked(e)
					}}/>
					<label htmlFor="inp9"><h3>Из другого города</h3></label>
				</div>
				<div className="rnd">
					<label className="inp inp1"  htmlFor="inp">
						<input type="checkbox" id='inp' name='radio' className='r c' onClick={(e) => isChecked(e)}/>
						<h3>Ворошиловский</h3>
					</label>
					<label className="inp inp2"  htmlFor="inp2">
						<input type="checkbox" id='inp2' name='radio' className='r c' onClick={(e) => isChecked(e)}/>
						<h3>Железнодорожный</h3>
					</label>
					<label className="inp inp3"  htmlFor="inp3">
						<input type="checkbox" id='inp3' name='radio' className='r c' onClick={(e) => isChecked(e)}/>
						<h3>Кировский</h3>
					</label>
					<label className="inp inp4"  htmlFor="inp4">
						<input type="checkbox" id='inp4' name='radio' className='r c' onClick={(e) => isChecked(e)}/>
						<h3>Ленинский</h3>
					</label>
					<label className="inp inp5"  htmlFor="inp5">
						<input type="checkbox" id='inp5' name='radio' className='r c' onClick={(e) => isChecked(e)}/>
						<h3>Октябрьский</h3>
					</label>
					<label className="inp inp6"  htmlFor="inp6">
						<input type="checkbox" id='inp6' name='radio' className='r c' onClick={(e) => isChecked(e)}/>
						<h3>Первомайский</h3>
					</label>
					<label className="inp inp7"  htmlFor="inp7">
						<input type="checkbox" id='inp7' name='radio' className='r c' onClick={(e) => isChecked(e)}/>
						<h3>Пролетарский</h3>
					</label>
					<label className="inp inp8"  htmlFor="inp8">
						<input type="checkbox" id='inp8' name='radio' className='r c' onClick={(e) => isChecked(e)}/>
						<h3>Советский</h3>
					</label>
				</div>
			</form>
		</div>
		<footer>
			<div className="footer_items">
				<button className='prev' onClick={() => nav('/fourth')}>Назад</button>
				<button className='next' onClick={() => next()}>Вперед</button>
			</div>
		</footer>
		</>
	)
}

export default Five