import { useEffect } from 'react'
import './intro.css'
import {useNavigate} from 'react-router-dom'

const Intro = () => {
	const nav = useNavigate()
	window.scrollTo(0, 0)

	useEffect(() => {
		const mask = document.querySelector('.mask')
		setTimeout(() => {
			mask.style.opacity = '0'
		}, 300);
		mask.addEventListener('transitionend', () => {
			mask.style.display = 'none'
		});

		const slides = [
			'../../../public/bg1.jpg',
			'../../../public/bg2.jpg',
			'../../../public/bg3.jpg',
		]
		let url = 0;
		const interval = setInterval(() => { 
			url += 1 
			if(url == slides.length) { 
				url = 0 
			}  
			document.querySelector('.wrapper').style.backgroundImage = 'url('+slides[url]+')' 
		}, 5000);

		return () => {
			clearInterval(interval);
		}
	}, [location.pathname])

	return (
		<>
		<div className="mask">
			<div className="loader"></div>
		</div>
		<div className="wrapper">
			<div className="text">
				<h1>Найдите свою идеальную квартиру с <br /> помощью умного квиза!</h1>
				<h3>Ответьте на несколько вопросов и мы подберем лучшие варианты жилья, <br /> отвечающие всем вашим требованиям.</h3>
			</div>
			<button onClick={() => nav('/apartment-or-house')}>Найти</button>
		</div>
		</>
	)
}

export default Intro