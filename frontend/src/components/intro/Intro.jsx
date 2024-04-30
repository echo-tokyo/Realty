import './intro.css'
import {useNavigate} from 'react-router-dom'

const Intro = () => {
	const nav = useNavigate()
	const slides = ['../../../public/bg1.png', '../../../public/bg2.png', '../../../public/bg3.png']
	let url = 0
	setInterval(() => {
		url += 1
		if(url == slides.length) {
				url = 0
		} 
		
		document.querySelector('.wrapper').style.backgroundImage = 'url(' + slides[url] + ')'
	}, 3000);
	return (
		<div className="wrapper">
			<div className="text">
				<h1>Найдите свою идеальную квартиру с <br /> помощью умного квиза!</h1>
				<h3>Ответьте на несколько вопросов и мы подберем лучшие варианты жилья, <br /> отвечающие всем вашим требованиям.</h3>
			</div>
			<button onClick={() => nav('/apartment-or-house')}>Найти</button>
		</div>
	)
}

export default Intro