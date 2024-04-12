import {createSlice} from '@reduxjs/toolkit'

const quizSlice = createSlice({
	name: 'quiz',
	initialState: {
		first: false,
		second: false,
		third: false, 
		fourth: false,
		fifth: false,
		sixth: false,
	},
	reducers: {
		setFirst: (state, action) => {
			state.first = action.payload
		},
		setSecond: (state, action) => {
			state.second = action.payload
		},
		setThird: (state, action) => {
			state.third = action.payload
		},
		setFourth: (state, action) => {
			state.fourth = action.payload
		},
		setFifth: (state, action) => {
			state.fifth = action.payload
		},
		setSixth: (state, action) => {
			state.sixth = action.payload
		},
	}
})

export const {setFirst, setSecond, setThird, setFourth, setFifth, setSixth} = quizSlice.actions
export default quizSlice.reducer