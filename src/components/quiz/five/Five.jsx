import '../quiz.css'
import {useNavigate} from 'react-router-dom'

const Five = () => {
	const nav = useNavigate()
	const isChecked = () => {
		document.querySelectorAll('.r').forEach(element => {
			if (element.checked) {
				element.parentElement.classList.add('checked');
			} else {
				element.parentElement.classList.remove('checked');
			}
		})
	}
	return (
		<>
		<div className="content">
			<div className="quiz_text">
				<h1>Вопрос 5 из 6</h1>
				<h3>Укажите желаемые районы в Ростове-на-Дону</h3>
			</div>
			<form action="" className='quiz_form fifth_quiz_form' onClick={() => isChecked()}>
				<div className="other_city">
					<input type="radio" id='inp9' name='radio'/>
					<label htmlFor="inp9"><h3>Из другого города</h3></label>
				</div>
				<div className="rnd">
					<label className="inp inp1"  htmlFor="inp">
						<input type="checkbox" id='inp' name='radio' className='r'/>
						<h3>Ворошиловский район</h3>
					</label>
					<label className="inp inp2"  htmlFor="inp2">
						<input type="checkbox" id='inp2' name='radio' className='r'/>
						<h3>Железнодорожный район</h3>
					</label>
					<label className="inp inp3"  htmlFor="inp3">
						<input type="checkbox" id='inp3' name='radio' className='r'/>
						<h3>Кировский район</h3>
					</label>
					<label className="inp inp4"  htmlFor="inp4">
						<input type="checkbox" id='inp4' name='radio' className='r'/>
						<h3>Ленинский район</h3>
					</label>
					<label className="inp inp5"  htmlFor="inp5">
						<input type="checkbox" id='inp5' name='radio' className='r'/>
						<h3>Октябрьский район</h3>
					</label>
					<label className="inp inp6"  htmlFor="inp6">
						<input type="checkbox" id='inp6' name='radio' className='r'/>
						<h3>Первомайский район</h3>
					</label>
					<label className="inp inp7"  htmlFor="inp7">
						<input type="checkbox" id='inp7' name='radio' className='r'/>
						<h3>Пролетарский район</h3>
					</label>
					<label className="inp inp8"  htmlFor="inp8">
						<input type="checkbox" id='inp8' name='radio' className='r'/>
						<h3>Советский район</h3>
					</label>
				</div>
			</form>
		</div>
		<footer>
			<div className="footer_items">
				<button className='prev' onClick={() => nav('/fourth')}>Назад</button>
				<button className='next' onClick={() => nav('/sixth')}>Вперед</button>
			</div>
		</footer>
		</>
	)
}

export default Five