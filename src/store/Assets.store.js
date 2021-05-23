import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api"

const initialState = {
	loading: false,
	error: null,
	allAssets: [],
	selectedAsset: {
		id: 0
	},
	filteredAssetsByUnityId: []
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


const assets = createSlice({

	name: 'assets',
	initialState,

	reducers: {
		setSelectedAsset(state, action) {
			let filtredAsset = state.allAssets
				.filter(asset => asset.id === action.payload)
			state.selectedAsset = filtredAsset[0]
		},

		clearSelectedAsset(state) {
			state.selectedAsset = {};
		},

		setFilteredAssetsByUnityId(state, action) {
			state.filteredAssetsByUnityId = state.allAssets
				.filter(asset => asset.unitId === action.payload)
		},

		clearFilteredAssetsByUnityId(state) {
			state.filteredAssetsByUnityId = {}
		},

		editAsset(state, action) {
			state.allAssets.map(asset =>
				asset.id === action.payload[0] && (
					asset.name = action.payload[1],
					asset.image = action.payload[2],
					asset.sensors = action.payload[3],
					asset.status = action.payload[4],
					asset.model = action.payload[5],
					asset.unitId = action.payload[6],
					asset.responsible = action.payload[7],
					asset.specifications.rpm = action.payload[8],
					asset.specifications.maxTemp = action.payload[9],
					asset.specifications.power = action.payload[10]
				)
			)
		},

		createAsset(state, action) {
			const newAssetData = {
				id: action.payload[0],
				name: action.payload[1],
				image: action.payload[2],
				sensors: action.payload[3],
				status: action.payload[4],
				model: action.payload[5],
				unitId: action.payload[6],
				responsible: action.payload[7],
				specifications: {
					rpm: action.payload[8],
					maxTemp: action.payload[9],
					power: action.payload[10]
				},
				metrics: {
					totalCollectsUptime: 0,
					totalUptime: 0,
					lastUptimeAt: null
				},
				companyId:1
			}
			state.allAssets.push(newAssetData)
		},

		deleteAsset(state, action) {
			state.allAssets = state.allAssets.filter(asset => asset.id !== action.payload)
		}
	},

	extraReducers: {
		[setAssets.pending]: (state, action) => {
			state.loading = true;
			state.error = null;
		},
		[setAssets.fulfilled]: (state, action) => {
			state.allAssets = action.payload;
			state.allAssets.map(asset => (
				asset.responsible = null
			));
			state.loading = false;
		},
		[setAssets.rejected]: (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		},
	},


})

export const {
	setSelectedAsset,
	clearSelectedAsset,
	setFilteredAssetsByUnityId,
	clearFilteredAssetsByUnityId,
	editAsset,
	createAsset,
	deleteAsset
} = assets.actions;
export default assets.reducer;
