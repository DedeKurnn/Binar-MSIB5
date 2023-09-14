import { useParams, useLocation } from "react-router-dom";

const DetailPage = () => {
	const { id } = useParams();
	const location = useLocation();
	const data = location.state.data;

	return (
		<>
			<h1>{data.title}</h1>
			<p>ID: {id}</p>
		</>
	);
};

export default DetailPage;
