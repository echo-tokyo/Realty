import {createSlice} from '@reduxjs/toolkit'

const quizSlice = createSlice({
	name: 'quiz',
	initialState: {
		first: false,
		second: false,
		third: false, 
		fourth: false,
		fifth: false,
		sixth: false
	},
	reducers: {
		setSecond: (state, action) => {
			state.first = action.payload
		}
	}
})

export const {setSecond} = quizSlice.actions
export default quizSlice.reducer