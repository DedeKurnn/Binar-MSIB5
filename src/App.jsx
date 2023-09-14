import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainPage from "./components/MainPage";
import DetailPage from "./components/DetailPage";

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
	]);

	return <RouterProvider router={routes} />;
}

export default App;
