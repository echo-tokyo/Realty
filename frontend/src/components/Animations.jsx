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

	window.onload = () => {
		nav('/')
	}
}

export default Animations