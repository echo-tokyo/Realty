import { useEffect } from 'react'
import '../quiz.css'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { setSixth } from '../../../store/quiz/quiz.slice'

const Six = () => {
	const nav = useNavigate()
	const dispatch = useDispatch()
	const get = useSelector((state) => state.quiz.payment)
	
	const isChecked = (e) => {
		const arr = []
		let checkedCount = 0;
		const checkboxes = document.querySelectorAll('.r');
		
		checkboxes.forEach(checkbox => {
			if (checkbox.checked) {
				checkedCount++;
				arr.push(checkbox.id)
				checkbox.parentElement.classList.add('checked')
			}
			else{
				checkbox.style.backgroundColor = null
				checkbox.parentElement.classList.remove('checked')
			}
		})
		
		if (checkedCount > 3) {
			e.preventDefault();
			e.target.parentElement.classList.remove('checked')
			alert('Можно выбрать только три варианта');
			return false;
		}
		dispatch(setSixth(arr))
	}	  

	useEffect(() => {
		if (get !== false && get.length > 0) {
			get.forEach(input => {
				document.getElementById(`${input}`).style.backgroundColor = '#81DBE1'
				document.querySelector(`.${input}`).classList.add('checked')
				document.getElementById(`${input}`).checked = true
			});
		}
	}, [])

	const next = () => {
		for (let i = 0; i < document.querySelectorAll('.r').length; i++) {
			if (document.querySelectorAll('.r')[i].checked) {
				nav('/contacts')
			}
		}
	}
	return (
		<>
		<div className="content element-animation">
			<div className="quiz_text">
				<h1>Вопрос 6 из 6</h1>
				<h3>Выберите до трёх способов рассчета</h3>
			</div>
			<form action="" className='quiz_form sixth_form'>
				<label className="inp inp1"  htmlFor="inp">
					<input type="checkbox" id='inp' name='radio' className='r' onClick={(e) => isChecked(e)}/>
					<h3>Наличка</h3>
				</label>
				<label className="inp inp2"  htmlFor="inp2">
					<input type="checkbox" id='inp2' name='radio' className='r' onClick={(e) => isChecked(e)}/>
					<h3>Ипотека</h3>
				</label>
				<label className="inp inp3"  htmlFor="inp3">
					<input type="checkbox" id='inp3' name='radio' className='r' onClick={(e) => isChecked(e)}/>
					<h3>Материнский капитал</h3>
				</label>
				<label className="inp inp4"  htmlFor="inp4">
					<input type="checkbox" id='inp4' name='radio' className='r' onClick={(e) => isChecked(e)}/>
					<h3>Военная ипотека</h3>
				</label>
				<label className="inp inp5"  htmlFor="inp5">
					<input type="checkbox" id='inp5' name='radio' className='r' onClick={(e) => isChecked(e)}/>
					<h3>Херсонский сертификат</h3>
				</label>
				<label className="inp inp6"  htmlFor="inp6">
					<input type="checkbox" id='inp6' name='radio' className='r' onClick={(e) => isChecked(e)}/>
					<h3>Сельский сертификат</h3>
				</label>
			</form>
		</div>
		<footer>
			<div className="footer_items">
				<button className='prev' onClick={() => nav('/fifth')}>Назад</button>
				<button className='next' onClick={() => next()}>Вперед</button>
			</div>
		</footer>
		</>
	)
}

export default Six