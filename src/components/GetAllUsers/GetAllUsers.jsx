import axios from "axios";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import ListUsers from "../ListUsers/ListUsers";
import Input from "./../../components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { onGetAllUsers } from "../../redux/users/user.actions";
import PagButtons from "../PagButtons/PagButtons";
const mapState = ({ users }) => ({ usersFetch: users });
function GetAllUsers() {
	const { usersFetch } = useSelector(mapState);
	return (
		<section>
			<ListUsers {...usersFetch} />
		</section>
	);
}

export default GetAllUsers;
