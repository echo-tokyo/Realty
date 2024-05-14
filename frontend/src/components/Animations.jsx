import { useNavigate } from 'react-router'

const Animations = () => {
	const nav = useNavigate()

	document.addEventListener('gesturestart', function(event) {
		event.preventDefault();
	});
	
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
	
	window.onload = () => {
		if(location.pathname !== '/'){
			alert('Данные были сброшены')
			nav('/')
			// setTimeout(() => {
				// 	location.reload()
			// }, 100)
		}
	}
}

export default Animations