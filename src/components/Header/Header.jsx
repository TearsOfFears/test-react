import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import ListUsers from "../ListUsers/ListUsers";
import Input from "./../../components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { onGetAllUsers } from "../../redux/users/user.actions";
import PagButtons from "../PagButtons/PagButtons";
import "./style.scss";
function Header() {
	const dispatch = useDispatch();
	const handleGet = (e) => {
		e.preventDefault();
		const sort = "username";
		const order = e.target.value;
		const filter = { sort: sort, order: order };
		dispatch(onGetAllUsers(filter));
	};
	useEffect(() => {
		dispatch(onGetAllUsers());
	}, []);

	const handleSearch = (e) => {
		const name = e.target.value;
		const filter = { name: name };
		dispatch(onGetAllUsers(filter));
	};
	return (
		<header className="header">
			<div className="wrapper-top">
				<div>Logo</div>
				<Input handleChange={(e) => handleSearch(e)} />
			</div>
			<div className="wrapper-sort">
				<Button
					onClick={(e) => handleGet(e)}
					value="desc"
					style={"buttonsSort"}
				>
					Зростання
				</Button>
				<Button onClick={(e) => handleGet(e)} value="asc" style={"buttonsSort"}>
					{" "}
					Спадання
				</Button>
			</div>
		</header>
	);
}

export default Header;
