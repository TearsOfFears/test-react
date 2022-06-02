import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	onGetAllUsers,
	setCurrentPageAction,
} from "../../redux/users/user.actions";
import Button from "../Button/Button";

function PagButtons() {
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(1);
	useEffect(() => {
		dispatch(setCurrentPageAction(currentPage));
		const filter = {};
		dispatch(onGetAllUsers(filter));
	}, [currentPage]);

	const handlleAddOnclick = () => {
        if(currentPage>=3)
        setCurrentPage(1);
        else
		setCurrentPage(currentPage + 1);
	};
	const handlleReduceOnclick = () => {
        if(currentPage<=1)
        setCurrentPage(1)
        else
		setCurrentPage(currentPage - 1);
	};

	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div
				className="wrapper-buttons"
				style={{
					display: "flex",
					width: "10%",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Button onClick={handlleReduceOnclick}> left</Button>
				<Button onClick={handlleAddOnclick}> right</Button>
			</div>
		</div>
	);
}

export default PagButtons;
