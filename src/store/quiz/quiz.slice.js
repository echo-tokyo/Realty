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
			console.log(state, action)
		}
	}
})

export const {setSecond} = quizSlice.actions
export default quizSlice.reducer