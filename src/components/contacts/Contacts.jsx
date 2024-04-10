import './contacts.css'
import {useNavigate} from 'react-router-dom'

const Contacts = () => {
	const nav = useNavigate()
	return (
		<div className="contacts">
			<div className="contacts_text">
				<h1>Квиз пройден !</h1>
				<h3>Оставьте ваши контактные данные и мы вам перезвоним</h3>
			</div>
			<form action="">
				<input type="number" placeholder='Номер телефона'/>
				<button onClick={() => nav('/')}>Завершить</button>
				<h3 onClick={() => nav('/sixth')}>Вернуться назад</h3>
			</form>
		</div>
	)
}

export default Contacts