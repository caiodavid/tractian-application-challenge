import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api"

const initialState = {
	loading: false,
	error: null,
	allUsers: [],
	selectedUser: {
		id: 0,
		name: " ",
		email: " ",
		unitId: " ",
		companyId: " "
	},
	filteredUsersByUnityId: []
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

const users = createSlice({

	name: 'users',
	initialState,

	reducers: {
		setSelectedUser(state, action) {
			let filtredUser = state.allUsers
				.filter(user => user.id === action.payload)
			state.selectedUser = filtredUser[0]
		},

		clearSelectedUser(state) {
			state.selectedUser = [{}];
		},

		setFilteredUsersByUnityId(state, action) {
			state.filteredUsersByUnityId = state.allUsers
				.filter(user => user.unitId === action.payload)
		},

		clearFilteredUsersByUnityId(state) {
			state.filteredUsersByUnityId = [{}]
		},

		editUser(state, action) {
			state.allUsers.map(user =>
				user.id === action.payload[0] && (
					user.name = action.payload[1],
					user.email = action.payload[2],
					user.unitId = action.payload[3]
				)
			)
		},

		createUser(state, action) {
			const newUserData = {
				id: action.payload[0],
				name: action.payload[1],
				email: action.payload[2],
				unitId: action.payload[3]
			}
			state.allUsers.push(newUserData)
		},

		deleteUser(state, action) {
			console.log(action.payload);
			state.allUsers = state.allUsers.filter(user => user.id !== action.payload)
		}
	},

	extraReducers: {
		[setUsers.pending]: (state, action) => {
			state.loading = true;
			state.error = null;
		},
		[setUsers.fulfilled]: (state, action) => {
			state.allUsers = action.payload;
			state.loading = false;
		},
		[setUsers.rejected]: (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		}
	},
})

export const {
	setSelectedUser,
	clearSelectedUser,
	setFilteredUsersByUnityId,
	clearFilteredUsersByUnityId,
	editUser,
	createUser,
	deleteUser
} = users.actions;
export default users.reducer;
