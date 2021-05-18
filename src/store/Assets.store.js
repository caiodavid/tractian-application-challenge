import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api"

const initialState = {
	loading: false,
	error: null,
	allAssets: {},
	selectedAsset: {},
}

export const setAssets = createAsyncThunk(
	'assets/setAssets',
	async () => {
		try {
			const response = await api.get('assets')
			return response.data;

		} catch (error) {
			throw Error(error)
		}
	}
)

export const setSelectedAsset = createAsyncThunk(
	'assets/setSelectedAsset',
	async (assetId) => {
		try {
			const response = await api.get(`assets/${assetId}`)
			return response.data;

		} catch (error) {
			throw Error(error)
		}
	}
)


const assets = createSlice({

	name: 'assets',
	initialState,

	reducers: {
		clearSelectedAsset(state) {
			state.selectedAsset = {};
		} 
	},

	extraReducers: {
		[setAssets.pending]: (state, action) => {
			state.loading = true;
			state.error = null;
		},
		[setAssets.fulfilled]: (state, action) => {
			state.allAssets = action.payload;
			state.selectedAsset = {};
			state.loading = false;
		},
		[setAssets.rejected]: (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		},

		[setSelectedAsset.pending]: (state, action) => {
			state.loading = true;
			state.error = null;
		},
		[setSelectedAsset.fulfilled]: (state, action) => {
			state.selectedAsset = action.payload;
			state.loading = false;
		},
		[setSelectedAsset.rejected]: (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		}
	},


})

export const { clearSelectedAsset } = assets.actions;
export default assets.reducer;
