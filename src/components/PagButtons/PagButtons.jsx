import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	onGetAllUsers,
	setCurrentPageAction,
} from "../../redux/users/user.actions";
import Arrow from "../Arrow/Arrow";
import Button from "../Button/Button";
import "./style.scss";
function PagButtons() {
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(1);
	useEffect(() => {
		dispatch(setCurrentPageAction(currentPage));
		const filter = {};
		dispatch(onGetAllUsers(filter));
	}, [currentPage]);

	const handlleAddOnclick = () => {
		if (currentPage >= 3) setCurrentPage(1);
		else setCurrentPage(currentPage + 1);
	};
	const handlleReduceOnclick = () => {
		if (currentPage <= 1) setCurrentPage(3);
		else setCurrentPage(currentPage - 1);
	};

	return (
		<div>
			<div className="wrapper-buttons">
				<Button onClick={handlleReduceOnclick} style={"buttonPagg"}>
					<Arrow />
					Previous
				</Button>
				<Button onClick={handlleAddOnclick} style={"buttonPagg"}>
					Next
					<Arrow style={"rotate"} />
				</Button>
			</div>
		</div>
	);
}

export default PagButtons;
