import axios from "axios";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import ListUsers from "../ListUsers/ListUsers";
import Input from "./../../components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { onGetAllUsers } from "../../redux/users/user.actions";
const mapState = ({ users }) => ({ usersFetch: users.data });
function GetAllUsers() {
	const dispatch = useDispatch();
	const { usersFetch } = useSelector(mapState);
	const [users, setUser] = useState([]);
	const [search, setSearch] = useState("");

	const handleGet = (e) => {
		e.preventDefault();
		
		dispatch(onGetAllUsers(`_sort=username&_order=${e.target.innerText}`));
	};
	useEffect(() => {
		dispatch(onGetAllUsers());
	}, []);

	const handleSearch = (e) => {
		const name = e.target.value;
		dispatch(onGetAllUsers(`username_like=${name}`));
	};
	return (
		<div>
			GetAllUsers
			<Input handleChange={(e) => handleSearch(e)} />
			<Button onClick={(e) => handleGet(e)}>desc</Button>
			<Button onClick={(e) => handleGet(e)}>asc</Button>
			<ListUsers users={usersFetch} />
		</div>
	);
}

export default GetAllUsers;
