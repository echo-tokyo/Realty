import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Intro from './intro/Intro'
import One from './quiz/one/One'
import Two from './quiz/two/Two'
import Three from './quiz/three/Three'
import Four from './quiz/four/Four'
import Five from './quiz/five/Five'
import Six from './quiz/six/Six'
import Contacts from './contacts/Contacts'
import End from './end/End'
import { Fragment } from 'react'
import Animations from './Animations'

const Router = () => {
	// const [isReloaded, setIsReloaded] = useState(false)
	// window.onload = () => {
	// 	console.log('first')
	// }
	return (
		<BrowserRouter>
			<Fragment>
				<Animations />
				<Routes>
					<Route path='/' element={<Intro/>}/>
					<Route path='/first' element={<One/>}/>
					<Route path='/second' element={<Two/>}/>
					<Route path='/third' element={<Three/>}/>
					<Route path='/fourth' element={<Four/>}/>
					<Route path='/fifth' element={<Five/>}/>
					<Route path='/sixth' element={<Six/>}/>
					<Route path='/contacts' element={<Contacts/>}/>
					<Route path='/end' element={<End/>}/>
					<Route path='*' element={<h2 style={{display:'flex', justifyContent:'center'}}>404 Page not found</h2>}/>
				</Routes>
			</Fragment>
		</BrowserRouter>
	)
}

export default Router