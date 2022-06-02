import React from "react";

function ListUsers({ data, loading }) {
	return (
		<div>
			{loading && <h1>loading...</h1>}
			<ul>
				{Array.isArray(data) &&
					data.map((data, key) => {
						const { name, username, id } = data;
						return (
							<li key={id} style={{ border: "1px solid black" }}>
								<p>{id}</p>
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
