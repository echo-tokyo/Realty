import './end.css'
import { Link } from 'react-router-dom'

const End = () => {
	return (
		<div className="end">
			<h1>Готово 🎉</h1>
			<Link to='/'><button>Вернуться назад</button></Link>
		</div>
	)
}

export default End