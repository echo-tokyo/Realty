import './end.css'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { setApartmentOrHouse,setBudget,setDistricts,setNewBuildingOrResale,setPayment,setRenovatedOrNot,setRooms } from '../../store/quiz/quiz.slice'

const End = () => {
	const nav = useNavigate()
	const dispatch = useDispatch()

	return (
		<div className="end">
			<h1>Готово 🎉</h1>
			<div className="btn">
				<button onClick={() => {
					dispatch(setApartmentOrHouse(false))
					dispatch(setRooms(false))
					dispatch(setNewBuildingOrResale(false))
					dispatch(setBudget(false))
					dispatch(setRenovatedOrNot(false))
					dispatch(setDistricts(false))
					dispatch(setPayment(false))
					nav('/')
				}}>Вернуться назад</button>
			</div>
		</div>
	)
}

export default End