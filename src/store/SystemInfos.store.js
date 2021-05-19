import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	firstLoad: true
}


const systemInfo = createSlice({

	name: 'systemInfo',
	initialState,

	reducers: {
		handleFirstLoad(state) {
			state.firstLoad = false;
		}
	},

})

export const { handleFirstLoad } = systemInfo.actions;
export default systemInfo.reducer;
