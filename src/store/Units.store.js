import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api"

const initialState = {
	loading: false,
	error: null,
	allUnits: [],
	selectedUnity: {
		id: 0,
		name: " ",
		companyId: " "
	},
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

const units = createSlice({

	name: 'units',
	initialState,

	reducers: {
		setSelectedUnity(state, action) {
			let filtredUnit = state.allUnits
				.filter(unit => unit.id === action.payload)
			state.selectedUnity = filtredUnit[0]
		},

		clearSelectedUnity(state) {
			state.selectedUnity = {
				id: 0,
				name: " ",
				companyId: " "
			};
		},

		editUnit(state, action) {
			state.allUnits.map(unit =>
				unit.id === action.payload[0] && (
					unit.name = action.payload[1]
				)
			)
		},
	},

	createUnit(state, action) {
		console.log('object');
		const newUnitData = {
			id: action.payload[0],
			name: action.payload[1],
		}
		state.allUnits.push(newUnitData)
	},

	extraReducers: {
		[setUnits.pending]: (state, action) => {
			state.loading = true;
			state.error = null;
		},
		[setUnits.fulfilled]: (state, action) => {
			state.allUnits = action.payload;
			state.loading = false;
		},
		[setUnits.rejected]: (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		},
	},


})

export const { setSelectedUnity, clearSelectedUnity, editUnit, createUnit } = units.actions;
export default units.reducer;
