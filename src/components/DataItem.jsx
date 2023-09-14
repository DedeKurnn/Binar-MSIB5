import { InfoSquareFill, TrashFill } from "react-bootstrap-icons";

import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DataItem = ({ data, onDeleteData, onChecked }) => {
	const [isCompleted, setIsCompleted] = useState(data.completed);
	const navigate = useNavigate();

	return (
		<>
			<td>{data.id}</td>
			<td className={`${isCompleted && "text-danger todo-completed"}`}>
				{data.title}
			</td>
			<td>
				<div className="d-flex align-items-center gap-2">
					<button
						className="btn"
						onClick={() =>
							navigate(`/${data.id}`, { state: { data } })
						}
					>
						<InfoSquareFill className="text-primary" />
					</button>
					<button
						className="btn"
						onClick={() => onDeleteData(data.id)}
					>
						<TrashFill className="text-danger" />
					</button>
					<input
						className="form-check-input p-2"
						type="checkbox"
						value=""
						id="flexCheckChecked"
						checked={isCompleted}
						onChange={() => {
							setIsCompleted(!isCompleted);
							onChecked(isCompleted, data.id);
						}}
					/>
				</div>
			</td>
		</>
	);
};

DataItem.propTypes = {
	data: PropTypes.object,
	onDeleteData: PropTypes.func,
	onChecked: PropTypes.func,
};

export default DataItem;
