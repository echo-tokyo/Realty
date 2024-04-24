import './end.css'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { setFifth, setFirst, setFourth, setSecond, setSixth, setThird } from '../../store/quiz/quiz.slice'

const End = () => {
	const nav = useNavigate()
	const dispatch = useDispatch()

	return (
		<div className="end">
			<h1>Готово 🎉</h1>
			<div className="btn">
				<button onClick={() => {
					dispatch(setFirst(false))
					dispatch(setSecond(false))
					dispatch(setThird(false))
					dispatch(setFourth(false))
					dispatch(setFifth(false))
					dispatch(setSixth(false))
					nav('/')
				}}>Вернуться назад</button>
			</div>
		</div>
	)
}

export default End