import { useState, useContext } from "react";
import { DataContext } from "../context/dataContext";
import { useNavigate } from "react-router-dom";

import { ArrowLeft } from "react-bootstrap-icons";

const AddData = () => {
	const { addDataHandler } = useContext(DataContext);
	const [text, setText] = useState("");
	const navigate = useNavigate();

	return (
		<div className="container">
			<div className="p-3 border border-2 rounded-2 border-primary-subtle mt-3">
				<h1>Tambah data</h1>
				<form>
					<input
						type="text"
						className="form-control"
						placeholder="Data baru"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					<div className="d-flex gap-2 my-3">
						<button
							className="btn btn-primary"
							onClick={(e) => addDataHandler(e, text)}
						>
							Save
						</button>
						<button
							className="btn btn-secondary"
							onClick={() => navigate("/")}
						>
							<ArrowLeft /> Back
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddData;
