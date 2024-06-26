import { useSelector } from 'react-redux'
import './contacts.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Contacts = () => {
	const nav = useNavigate()
	const quizData = useSelector((state) => state.quiz)

	const scrollToTop = () => {
		window.scrollTo(0, 0)
	}

	function transformData(obj) {
		const newObj = {};
		newObj.apartmentOrHouse = obj.apartmentOrHouse === 'inp' ? 'квартира' : 'дом';
		newObj.newBuildingOrResale = obj.newBuildingOrResale === 'inp' ? 'новостройка' : 'вторичка';
		newObj.budget = parseInt(obj.budget)
		newObj.renovatedOrNot = obj.renovatedOrNot === 'inp' ? 'с ремонтом' : 'без ремонта';
		newObj.phone = parseInt(document.querySelector('.phone').value)
		if (obj.rooms === 'inp') {
			newObj['rooms'] = 'гостинница';
		} else if (obj.rooms === 'inp2') {
			newObj['rooms'] = 'студия'
		} else if (obj.rooms === 'inp3') {
			newObj['rooms'] = '1-комнатная'
		} else if (obj.rooms === 'inp4') {
			newObj['rooms'] = 'евро 2-комнатная'
		} else if (obj.rooms === 'inp5') {
			newObj['rooms'] = '2-комнатная'
		} else if (obj.rooms === 'inp6') {
			newObj['rooms'] = 'евро 3-комнатная'
		} else if (obj.rooms === 'inp7') {
			newObj['rooms'] = '3-комнатная'
		} else if (obj.rooms === 'inp8') {
			newObj['rooms'] = '4-комнатная'
		} else{
			newObj['rooms'] = false
		}
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
			axios.post('http://188.225.36.185/api', transformData(quizData))
			.then(response => {
				nav('/end')
				console.log(response.data)
			})
			.catch(error => {
				alert('Произошла ошибка при отправке данных')
				console.error('Ошибка при отправке запрсоа', error)
				document.querySelector('.end').style.border = '2px solid red'
			})
			document.querySelector('.phone').style.border = null
			document.querySelector('.end').style.border = null
		} 
		else{
			alert('Неправильно указан номер телефона')
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
				<input type="number" className='phone' name='phone' placeholder='Номер телефона' onBlur={(e) => scrollToTop(e)}/>
				<button className='end' onClick={(e) => validateNumber(e)}>Завершить</button>
				<h3 onClick={() => nav('/payment')}>Вернуться назад</h3>
			</form>
		</div>
	)
}

export default Contacts