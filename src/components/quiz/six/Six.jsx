import '../quiz.css'
import {useNavigate} from 'react-router-dom'

const Six = () => {
	const nav = useNavigate()
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
	return (
		<>
		<div className="content">
			<div className="quiz_text">
				<h1>Вопрос 6 из 6</h1>
				<h3>Выберите способ рассчета</h3>
			</div>
			<form action="" className='quiz_form sixth_form' onClick={() => isChecked()}>
				<label className="inp inp1"  htmlFor="inp">
					<input type="checkbox" id='inp' name='radio' className='r'/>
					<h3>Наличка</h3>
				</label>
				<label className="inp inp2"  htmlFor="inp2">
					<input type="checkbox" id='inp2' name='radio' className='r'/>
					<h3>Ипотека</h3>
				</label>
				<label className="inp inp3"  htmlFor="inp3">
					<input type="checkbox" id='inp3' name='radio' className='r'/>
					<h3>Материнский капитал</h3>
				</label>
				<label className="inp inp4"  htmlFor="inp4">
					<input type="checkbox" id='inp4' name='radio' className='r'/>
					<h3>Военная ипотека</h3>
				</label>
				<label className="inp inp5"  htmlFor="inp5">
					<input type="checkbox" id='inp5' name='radio' className='r'/>
					<h3>Херсонский сертификат</h3>
				</label>
				<label className="inp inp6"  htmlFor="inp6">
					<input type="checkbox" id='inp6' name='radio' className='r'/>
					<h3>Сельский сертификат</h3>
				</label>
			</form>
		</div>
		<footer>
			<div className="footer_items">
				<button className='prev' onClick={() => nav('/fifth')}>Назад</button>
				<button className='next' onClick={() => nav('/contact')}>Вперед</button>
			</div>
		</footer>
		</>
	)
}

export default Six