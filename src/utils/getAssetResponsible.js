export function getAssetResponsible(responsibleId, allUsers) {

	if (responsibleId === null) {
		return "Ativo sem responsável"
	} else {
		const responsible = allUsers.filter(user => user.id === responsibleId)
		return `Responsável: ${responsible[0].name}`
	}
}