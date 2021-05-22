import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isEditCompanyModalVisible: false,
	isEditUnityModalVisible: false,
	isEditUserModalVisible: false,
	isEditAssetModalVisible: false,
	isCreateUnityModalVisible: false,
	isCreateUserModalVisible: false,
	isCreateAssetModalVisible: false,
	isDeleteUnityModalVisible: false,
	isDeleteUserModalVisible: false,
	isDeleteAssetModalVisible: false,
}

const modals = createSlice({
	name: 'modals',
	initialState,
	reducers: {
		handleEditCompanyModalVisibility(state) {
			state.isEditCompanyModalVisible = !state.isEditCompanyModalVisible
		},
		handleEditUnityModalVisibility(state) {
			state.isEditUnityModalVisible = !state.isEditUnityModalVisible
		},
		handleEditUserModalVisibility(state) {
			state.isEditUserModalVisible = !state.isEditUserModalVisible
		},
		handleEditAssetModalVisibility(state) {
			state.isEditAssetModalVisible = !state.isEditAssetModalVisible
		},

		handleCreateUnityModalVisibility(state) {
			state.isCreateUnityModalVisible = !state.isCreateUnityModalVisible
		},
		handleCreateUserModalVisibility(state) {
			state.isCreateUserModalVisible = !state.isCreateUserModalVisible
		},
		handleCreateAssetModalVisibility(state) {
			state.isCreateAssetModalVisible = !state.isCreateAssetModalVisible
		},

		handleDeleteUnityModalVisibility(state) {
			state.isDeleteUnityModalVisible = !state.isDeleteUnityModalVisible
		},
		handleDeleteUserModalVisibility(state) {
			state.isDeleteUserModalVisible = !state.isDeleteUserModalVisible
		},
		handleDeleteAssetModalVisibility(state) {
			state.isDeleteAssetModalVisible = !state.isDeleteAssetModalVisible
		},
	}
})

export const {
	handleEditCompanyModalVisibility,
	handleEditUnityModalVisibility,
	handleEditUserModalVisibility,
	handleEditAssetModalVisibility,

	handleCreateUnityModalVisibility,
	handleCreateUserModalVisibility,
	handleCreateAssetModalVisibility,

	handleDeleteUnityModalVisibility,
	handleDeleteUserModalVisibility,
	handleDeleteAssetModalVisibility,
} = modals.actions;

export default modals.reducer;