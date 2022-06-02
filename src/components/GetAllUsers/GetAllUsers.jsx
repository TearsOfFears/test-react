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
	const dispatch = useDispatch();
	const { usersFetch } = useSelector(mapState);
	// const [users, setUser] = useState([]);
	const [search, setSearch] = useState("");

	const handleGet = (e) => {
		e.preventDefault();
		const sort = "username";
		const order = e.target.innerText;
		const filter =  {sort:sort,order: order};
		dispatch(onGetAllUsers(filter));
	};
	useEffect(() => {
		dispatch(onGetAllUsers());
	}, []);

	const handleSearch = (e) => {
		const name = e.target.value;
		const filter = {name:name}
		dispatch(onGetAllUsers(filter));
	};
	return (
		<div>
			GetAllUsers
			<Input handleChange={(e) => handleSearch(e)} />
			<Button onClick={(e) => handleGet(e)}>desc</Button>
			<Button onClick={(e) => handleGet(e)}>asc</Button>
			<ListUsers {...usersFetch} />
			<PagButtons/>
		</div>
	);
}

export default GetAllUsers;
