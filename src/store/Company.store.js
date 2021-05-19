import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api"

const initialState = {
	isLogged: true,
	loading: false,
	error: null,
	loggedCompany: {}
}

export const setLoggedCompany = createAsyncThunk(
	'company/setLoggedCompany',
	async () => {
		try {
			const response = await api.get('companies/1')
			return response.data;

		} catch (error) {
			throw Error(error)
		}
	})

const company = createSlice({

	name: 'company',
	initialState,
	reducers: {
		edit(state, action) {
			state.loggedCompany.name = action.payload;
			state.hasEdited = true;
		}
	},
	extraReducers: {
		[setLoggedCompany.pending]: (state, action) => {
			state.loading = true;
			state.error = null;
		},
		[setLoggedCompany.fulfilled]: (state, action) => {
			state.loggedCompany = action.payload
			state.loading = false;
		},
		[setLoggedCompany.rejected]: (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		}
	}

})

export const { edit } = company.actions;
export default company.reducer;
