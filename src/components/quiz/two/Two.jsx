import '../quiz.css'

const Two = () => {
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
				<h1>Вопрос 2 из 6</h1>
				<h3>Выберите подходящий вариант</h3>
			</div>
			<form action="" className='quiz_form' onClick={() => isChecked()}>
				<label className="inp inp1"  htmlFor="inp">
					<input type="radio" id='inp' name='radio' className='r'/>
					<h3>Новостройка</h3>
				</label>
				<label className="inp inp2"  htmlFor="inp2">
					<input type="radio" id='inp2' name='radio' className='r'/>
					<h3>Вторичка</h3>
				</label>
			</form>
		</div>
		<footer>
			<div className="footer_items">
				<button className='prev'>Назад</button>
				<button className='next'>Вперед</button>
			</div>
		</footer>
		</>
	)
}

export default Two