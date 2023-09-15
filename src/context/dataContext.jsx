import { createContext, useState } from "react";
import dataExercise from "../constants/dataexercise2.json";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
	const [data, setData] = useState(dataExercise);
	const addDataHandler = (e, text) => {
		e.preventDefault();
		if (text.length === 0) {
			toast.error("Teks tidak boleh kosong!", {
				style: {
					borderRadius: "10px",
					background: "#333",
					color: "#fff",
				},
			});
			return;
		}

		let id = data.length + 1;

		let item = {
			userId: id,
			id: id,
			title: text,
			completed: false,
		};

		let newData = [...data, item];
		setData(newData);
		toast.success("Berhasil", {
			style: {
				borderRadius: "10px",
				background: "#333",
				color: "#fff",
			},
		});
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
