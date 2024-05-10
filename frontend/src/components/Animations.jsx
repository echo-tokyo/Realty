import { useNavigate } from 'react-router'

const Animations = () => {
	const nav = useNavigate()
	
	setTimeout(() => {
		function onEntry(entry) {
			entry.forEach(change => {
				if (change.isIntersecting) {
					change.target.classList.add('element-show')
				}
			})
		}
		let options = {
			threshold: [0.2]
		}
		let observer = new IntersectionObserver(onEntry, options)
		let elements = document.querySelectorAll('.element-animation')
		for (let elm of elements) {
			observer.observe(elm)
		}
	}, 100)
	window.scrollTo(0,0)

	window.onload = () => {
		if(location.pathname !== '/'){
			alert('Данные были сброшены')
			nav('/')
			setTimeout(() => {
				location.reload()
			}, 100)
		}
	}

	document.addEventListener('touchmove', function(event) {
		event = event.originalEvent || event;
	
		if(event.scale > 1) {
			event.preventDefault();
		}
	}, false);
}

export default Animations