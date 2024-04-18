import './end.css'

const End = () => {
	return (
		<div className="end">
			<h1>Готово 🎉</h1>
			<div className="btn">
				<button onClick={() => location.reload()}>Вернуться назад</button>
			</div>
		</div>
	)
}

export default End