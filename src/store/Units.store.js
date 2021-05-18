import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api"

const initialState = {
	loading: false,
	error: null,
	allUnits: {},
	selectedUnity: {},
}

export const setUnits = createAsyncThunk(
	'units/setUnits',
	async () => {
		try {
			const response = await api.get('units')
			return response.data;

		} catch (error) {
			throw Error(error)
		}
	}
)

export const setSelectedUnity = createAsyncThunk(
	'units/setSelectedUnity',
	async (unityId) => {
		try {
			const response = await api.get(`units/${unityId}`)
			return response.data;

		} catch (error) {
			throw Error(error)
		}
	}
)



const units = createSlice({

	name: 'units',
	initialState,

	reducers: {
		clearSelectedUnity(state) {
			state.selectedUnity = {};
		} 
	},

	extraReducers: {
		[setUnits.pending]: (state, action) => {
			state.loading = true;
			state.error = null;
		},
		[setUnits.fulfilled]: (state, action) => {
			state.allUnits = action.payload;
			state.selectedUnity = {};
			state.loading = false;
		},
		[setUnits.rejected]: (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		},

		[setSelectedUnity.pending]: (state, action) => {
			state.loading = true;
			state.error = null;
		},
		[setSelectedUnity.fulfilled]: (state, action) => {
			state.selectedUnity = action.payload;
			state.loading = false;
		},
		[setSelectedUnity.rejected]: (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		}
	},


})

export const { clearSelectedUnity } = units.actions;
export default units.reducer;
