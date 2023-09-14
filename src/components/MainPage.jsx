/* eslint-disable no-mixed-spaces-and-tabs */
import dataExercise from "../constants/dataexercise2.json";
import DataItem from "./DataItem";
import { useState } from "react";

const MainPage = () => {
	const [data, setData] = useState(dataExercise);
	const [filter, setFilter] = useState("all");

	const filteredData =
		filter === "all"
			? data
			: filter === "done"
			? data.filter((item) => item.completed === true)
			: filter === "todo" &&
			  data.filter((item) => item.completed === false);

	const deleteDataHandler = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	return (
		<main className="container">
			<h1 className="fw-bold text-center mb-4">Aplikasi Todo</h1>
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
				<button className="col-sm-4 btn btn-primary">Add</button>
			</div>
			<div className="table-responsive">
				<table className="table table-stripped">
					<thead>
						<tr>
							<td>No</td>
							<td>Data</td>
							<td>Aksi</td>
						</tr>
					</thead>
					<tbody>
						{filteredData.map((item) => (
							<tr key={item.id}>
								<DataItem
									data={item}
									onDeleteData={deleteDataHandler}
								/>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</main>
	);
};

export default MainPage;
