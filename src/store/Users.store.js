import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api"

const initialState = {
	loading: false,
	error: null,
	allUsers: {},
	selectedUser: {},
}

export const setUsers = createAsyncThunk(
	'users/setUsers',
	async () => {
		try {
			const response = await api.get('users')
			return response.data;

		} catch (error) {
			throw Error(error)
		}
	}
)

export const setSelectedUser = createAsyncThunk(
	'users/setSelectedUser',
	async (userId) => {
		try {
			const response = await api.get(`users/${userId}`)
			return response.data;

		} catch (error) {
			throw Error(error)
		}
	}
)



const users = createSlice({

	name: 'users',
	initialState,

	reducers: {
		clearSelectedUser(state) {
			state.selectedUser = {};
		} 
	},

	extraReducers: {
		[setUsers.pending]: (state, action) => {
			state.loading = true;
			state.error = null;
		},
		[setUsers.fulfilled]: (state, action) => {
			state.allUsers = action.payload;
			state.selectedUser = {};
			state.loading = false;
		},
		[setUsers.rejected]: (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		},

		[setSelectedUser.pending]: (state, action) => {
			state.loading = true;
			state.error = null;
		},
		[setSelectedUser.fulfilled]: (state, action) => {
			state.selectedUser = action.payload;
			state.loading = false;
		},
		[setSelectedUser.rejected]: (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		}
	},
})

export const { clearSelectedUser } = users.actions;
export default users.reducer;
