import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	firstLoad: true,
	activeContainer: "overview",
	showAlert: false,
	loading: false,
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
		},

		handleShowAlert(state, action) {
			state.showAlert = action.payload;
		},

		handleLoading(state, action) {
			state.loading = action.payload;
		},
	},

})

export const { handleFirstLoad, handleChangeActiveContainer, handleShowAlert, handleLoading } = systemInfo.actions;
export default systemInfo.reducer;
