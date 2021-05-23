import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	firstLoad: true,
	activeContainer: "overview"
}


const systemInfo = createSlice({

	name: 'systemInfo',
	initialState,

	reducers: {
		handleFirstLoad(state) {
			state.firstLoad = false;
		},

		handleChangeActiveContainer(state, action) {
			state.activeContainer = action.payload
		}
	},

})

export const { handleFirstLoad, handleChangeActiveContainer } = systemInfo.actions;
export default systemInfo.reducer;
