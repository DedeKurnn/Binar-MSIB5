import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainPage from "./components/MainPage";
import DetailPage from "./components/DetailPage";
import AddData from "./components/AddData";

function App() {
	const routes = createBrowserRouter([
		{
			path: "/",
			element: <MainPage />,
		},
		{
			path: ":id",
			element: <DetailPage />,
		},
		{
			path: "/new",
			element: <AddData />,
		},
	]);

	return <RouterProvider router={routes} />;
}

export default App;
