import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Intro from './intro/Intro'
import ApartmentOrHouse from './quiz/apartmentOrHouse/ApartmentOrHouse'
import Rooms from './quiz/rooms/Rooms'
import NewBuildingOrResale from './quiz/newBuildingOrResale/NewBuildingOrResale'
import Budget from './quiz/budget/Budget'
import RenovatedOrNot from './quiz/renovatedOrNot/RenovatedOrNot'
import Districts from './quiz/districts/Districts'
import Payment from './quiz/payment/Payment'
import Contacts from './contacts/Contacts'
import End from './end/End'
import { Fragment } from 'react'
import Animations from './Animations'


const Router = () => {
	return (
		<BrowserRouter>
			<Fragment>
				<Animations />
				<Routes>
					<Route path='/' element={<Intro/>}/>
					<Route path='/apartment-or-house' element={<ApartmentOrHouse/>}/>
					<Route path='/rooms' element={<Rooms/>}/>
					<Route path='/new-building-or-resale' element={<NewBuildingOrResale/>}/>
					<Route path='/budget' element={<Budget/>}/>
					<Route path='/renovated-or-not' element={<RenovatedOrNot/>}/>
					<Route path='/districts' element={<Districts/>}/>
					<Route path='/payment' element={<Payment/>}/>
					<Route path='/contacts' element={<Contacts/>}/>
					<Route path='/end' element={<End/>}/>
					<Route path='*' element={<h2 style={{display:'flex', justifyContent:'center'}}>404 Page not found</h2>}/>
				</Routes>
			</Fragment>
		</BrowserRouter>
	)
}

export default Router