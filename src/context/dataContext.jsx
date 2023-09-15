import { createContext, useState } from "react";
import dataExercise from "../constants/dataexercise2.json";
import PropTypes from "prop-types";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
	const [data, setData] = useState(dataExercise);
	const addDataHandler = (e, text) => {
		e.preventDefault();
		let id = data.length + 1;

		let item = {
			userId: id,
			id: id,
			title: text,
			completed: false,
		};

		let newData = [...data, item];
		setData(newData);
	};

	const deleteDataHandler = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const completedHandler = (id) => {
		let updatedData = data.map((item) => {
			if (item.id === id) {
				item.completed = !item.completed;
			}
			return item;
		});
		setData(updatedData);
	};
	return (
		<DataContext.Provider
			value={{
				data,
				setData,
				addDataHandler,
				deleteDataHandler,
				completedHandler,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

DataContextProvider.propTypes = {
	children: PropTypes.node,
};
