import { useSelector } from 'react-redux'
import './contacts.css'
import {useNavigate} from 'react-router-dom'

const Contacts = () => {
	const nav = useNavigate()
	const quizData = useSelector((state) => state.quiz)

	function transformData(obj) {
		const newObj = {};
		newObj.apartmentOrHouse = obj.apartmentOrHouse === 'inp' ? 'квартира' : 'дом';
		newObj.newBuildingOrResale = obj.newBuildingOrResale === 'inp' ? 'новостройка' : 'вторичка';
		newObj.budget = parseInt(obj.budget)
		newObj.renovatedOrNot = obj.renovatedOrNot === 'inp' ? 'с ремонтом' : 'без ремонта';
		newObj.phone = parseInt(document.querySelector('.phone').value)
		
		newObj.districts = obj.districts.map(item => {
			switch (item) {
				case 'inp':
					return 'Ворошиловский район';
				case 'inp2':
					return 'Железнодорожный район';
				case 'inp3':
					return 'Кировский район';
				case 'inp4':
					return 'Ленинский район';
				case 'inp5':
					return 'Октябрьский район';
				case 'inp6':
					return 'Первомайский район';
				case 'inp7':
					return 'Пролетарский район';
				case 'inp8':
					return 'Советский район';
				case 'inp9':
					return 'Из другого города';
				default:
					return item;
			}
		})
		newObj.payment = obj.payment.map(item => {
			switch (item) {
				case 'inp':
					return 'Наличка';
				case 'inp2':
					return 'Ипотека';
				case 'inp3':
					return 'Материнский капитал';
				case 'inp4':
					return 'Военная ипотека';
				case 'inp5':
					return 'Херсонский сертификат';
				case 'inp6':
					return 'Сельский сертификат';
				default:
					return item;
			}
		})

		return newObj;
	}
	
	const validateNumber = (e) => {
		e.preventDefault()
		// eslint-disable-next-line no-useless-escape
		if(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.querySelector('.phone').value)) {
			if(!Object.values(quizData).some(value => !value)){
				console.log(transformData(quizData))
			} else{
				nav('/')
			}
			document.querySelector('.phone').style.border = null
		}
		else{
			document.querySelector('.phone').style.border = '2px solid red'
		}
	}
	
	return (
		<div className="contacts">
			<div className="contacts_text">
				<h1>Квиз пройден !</h1>
				<h3>Оставьте ваши контактные данные и мы вам перезвоним</h3>
			</div>
			<form action="">
				<input type="number" className='phone' name='phone' placeholder='Номер телефона'/>
				<button onClick={(e) => validateNumber(e)}>Завершить</button>
				<h3 onClick={() => nav('/sixth')}>Вернуться назад</h3>
			</form>
		</div>
	)
}

export default Contacts