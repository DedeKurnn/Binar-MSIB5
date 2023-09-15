import { useParams, useLocation, useNavigate } from "react-router-dom";

import { ArrowLeft } from "react-bootstrap-icons";

const DetailPage = () => {
	const { id } = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	const data = location.state.data;

	return (
		<div className="container">
			<button
				className="btn btn-secondary my-3"
				onClick={() => navigate("/")}
			>
				<ArrowLeft /> Back
			</button>
			<div className="p-3 border border-2 rounded-2 border-primary-subtle">
				<h1 className="border-bottom border-1">{data.title}</h1>
				<p>ID: {id}</p>
				<p>User ID: {data.userId}</p>
				<p>Status: {data.completed}</p>
			</div>
		</div>
	);
};

export default DetailPage;
