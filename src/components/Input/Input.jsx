import React from "react";
import "./style.scss";
const Input = ({ handleChange, ...otherProprs }) => {
	return (
		<input
			className="formInput"
			onChange={handleChange}
			{...otherProprs}
			placeholder="Search"
		/>
	);
};

export default Input;
