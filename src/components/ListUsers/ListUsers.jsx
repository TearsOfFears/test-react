import React from "react";

function ListUsers(props) {
	console.log(props.users);
	return (
		<div>
			<ul>
				{Array.isArray(props.users) &&
					props.users.map((data, key) => {
						const { name,username, id } = data;
						return (
							<li key={id}>
								<h1>name:{name}</h1>
                                <h1>username:{username}</h1>
							</li>
						);
					})}
			</ul>
		</div>
	);
}

export default ListUsers;
