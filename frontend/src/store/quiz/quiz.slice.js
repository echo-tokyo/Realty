import {createSlice} from '@reduxjs/toolkit'

const quizSlice = createSlice({
	name: 'quiz',
	initialState: {
		apartmentOrHouse: false,
		newBuildingOrResale: false,
		budget: false, 
		renovatedOrNot: false,
		districts: false,
		payment: false,
	},
	reducers: {
		setFirst: (state, action) => {
			state.apartmentOrHouse = action.payload
		},
		setSecond: (state, action) => {
			state.newBuildingOrResale = action.payload
		},
		setThird: (state, action) => {
			state.budget = action.payload
		},
		setFourth: (state, action) => {
			state.renovatedOrNot = action.payload
		},
		setFifth: (state, action) => {
			state.districts = action.payload
		},
		setSixth: (state, action) => {
			state.payment = action.payload
		},
	}
})

export const {setFirst, setSecond, setThird, setFourth, setFifth, setSixth} = quizSlice.actions
export default quizSlice.reducer