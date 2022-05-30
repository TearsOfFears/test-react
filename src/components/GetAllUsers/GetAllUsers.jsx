import axios from "axios";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import ListUsers from "../ListUsers/ListUsers";
function GetAllUsers() {
	const [users, setUser] = useState([]);
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
	return (
		<div>
			GetAllUsers
			<ListUsers users={users} />
			<Button onClick={(e) => handleGet("desc")}>desc</Button>
			<Button onClick={(e) => handleGet("asc")}>asc</Button>
		</div>
	);
}

export default GetAllUsers;
