import { InfoSquareFill, TrashFill } from "react-bootstrap-icons";

import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/dataContext";

export default function DataItem({ data }) {
	const { deleteDataHandler, completedHandler } = useContext(DataContext);
	const [isCompleted, setIsCompleted] = useState(data.completed);
	const navigate = useNavigate();

	return (
		<>
			<td>{data.id}</td>
			<td
				className={`${
					isCompleted && "text-danger todo-completed"
				} w-100`}
			>
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
						onClick={() => deleteDataHandler(data.id)}
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
							completedHandler(data.id);
							setIsCompleted(!isCompleted);
						}}
					/>
				</div>
			</td>
		</>
	);
}

DataItem.propTypes = {
	data: PropTypes.object,
};
