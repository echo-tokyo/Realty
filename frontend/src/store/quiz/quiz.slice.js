import {createSlice} from '@reduxjs/toolkit'

const quizSlice = createSlice({
	name: 'quiz',
	initialState: {
		apartmentOrHouse: false,
		rooms: false,
		newBuildingOrResale: false,
		budget: false, 
		renovatedOrNot: false,
		districts: false,
		payment: false,
	},
	reducers: {
		setApartmentOrHouse: (state, action) => {
			state.apartmentOrHouse = action.payload
		},
		setRooms: (state, action) => {
			state.rooms = action.payload
		},
		setNewBuildingOrResale: (state, action) => {
			state.newBuildingOrResale = action.payload
		},
		setBudget: (state, action) => {
			state.budget = action.payload
		},
		setRenovatedOrNot: (state, action) => {
			state.renovatedOrNot = action.payload
		},
		setDistricts: (state, action) => {
			state.districts = action.payload
		},
		setPayment: (state, action) => {
			state.payment = action.payload
		},
	}
})

export const {setApartmentOrHouse, setBudget, setDistricts, setNewBuildingOrResale, setPayment, setRenovatedOrNot, setRooms} = quizSlice.actions
export default quizSlice.reducer