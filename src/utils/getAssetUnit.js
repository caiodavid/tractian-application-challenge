export function getAssetUnit(unitId, allUnits) {
	const unit = allUnits.filter(unit => unit.id === unitId)
	return unit[0].name
}