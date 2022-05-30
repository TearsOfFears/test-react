import axios from "axios";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import ListUsers from "../ListUsers/ListUsers";
import Input from "./../../components/Input/Input";
function GetAllUsers() {
	const [users, setUser] = useState([]);
	const [search, setSearch] = useState("");
	const handleGet = (sort) => {
		axios
			.get(
				`https://jsonplaceholder.typicode.com/users?_sort=username&_order=${sort}`
			)
			.then((res) => setUser(res.data))
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		handleGet();
	}, []);

	const handleSearch = (e) => {
		const name = e.target.value;
		axios
			.get(`https://jsonplaceholder.typicode.com/users?username_like=${name}`)
			.then((res) => setUser(res.data))
			.catch((err) => console.log(err));
	};
	return (
		<div>
			GetAllUsers
			<Input handleChange={(e) => handleSearch(e)} />
			<ListUsers users={users} />
			<Button onClick={(e) => handleGet("desc")}>desc</Button>
			<Button onClick={(e) => handleGet("asc")}>asc</Button>
		</div>
	);
}

export default GetAllUsers;
