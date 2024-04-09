import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Intro from './intro/Intro'
import One from './quiz/one/One'
import Two from './quiz/two/Two'
import Three from './quiz/three/Three'
import Four from './quiz/four/Four'
import Five from './quiz/five/Five'
import Six from './quiz/six/Six'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Intro/>}/>
				<Route path='/first' element={<One/>}/>
				<Route path='/second' element={<Two/>}/>
				<Route path='/third' element={<Three/>}/>
				<Route path='/fourth' element={<Four/>}/>
				<Route path='/fifth' element={<Five/>}/>
				<Route path='/sixth' element={<Six/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default Router