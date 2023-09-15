/* eslint-disable no-mixed-spaces-and-tabs */

import DataItem from "./DataItem";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { DataContext } from "../context/dataContext";

const MainPage = () => {
	const { data } = useContext(DataContext);
	const [filter, setFilter] = useState("all");
	const navigate = useNavigate();

	const filteredData =
		filter === "all"
			? data
			: filter === "done"
			? data.filter((item) => item.completed === true)
			: filter === "todo" &&
			  data.filter((item) => item.completed === false);

	return (
		<main className="container">
			<h1 className="fw-bold text-center mb-4 mt-4">Aplikasi Todo</h1>
			<div className="row">
				<div className="col-sm-8 d-flex gap-2">
					<button
						className="btn btn-primary w-100"
						onClick={() => setFilter("all")}
					>
						All
					</button>
					<button
						className="btn btn-primary w-100"
						onClick={() => setFilter("done")}
					>
						Done
					</button>
					<button
						className="btn btn-primary w-100"
						onClick={() => setFilter("todo")}
					>
						Todo
					</button>
				</div>
				<button
					className="col-sm-4 btn btn-primary"
					onClick={() => navigate("/new")}
				>
					Add
				</button>
			</div>
			<div className="table-responsive mt-3">
				<table className="table table-stripped">
					<thead>
						<tr className="fw-bold">
							<td>No</td>
							<td>Data</td>
							<td>Aksi</td>
						</tr>
					</thead>
					<tbody>
						{filteredData.map((item) => (
							<tr key={item.id}>
								<DataItem data={item} />
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</main>
	);
};

export default MainPage;
