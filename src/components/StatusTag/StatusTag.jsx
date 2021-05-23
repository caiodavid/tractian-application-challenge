import "./StatusTag.css"

export const StatusTag = (props) => {
	switch (props.name) {
		case "inAlert":
			return (
				<div className="tag-box alert">
					<p>Em alerta</p>
				</div>
			);

		case "inDowntime":
			return (
				<div className="tag-box downtime">
					<p>Parado</p>
				</div>
			);

		case "inOperation":
			return (
				<div className="tag-box operation">
					<p>Operando</p>
				</div>
			);

		default:
			break;
	}
	return props.name;
};