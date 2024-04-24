import './end.css'
import {useNavigate} from 'react-router-dom'

const End = () => {
	const nav = useNavigate()

	return (
		<div className="end">
			<h1>Готово 🎉</h1>
			<div className="btn">
				<button onClick={() => {
					location.reload()
					nav('/')
				}}>Вернуться назад</button>
			</div>
		</div>
	)
}

export default End