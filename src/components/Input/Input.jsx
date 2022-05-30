import React from "react";
const Input = ({ handleChange, ...otherProprs }) => {
	return (
		<div className="formRow">
			{/* {Label && <label>{Label}</label>} */}
			<div className="wrapper-input">
				{" "}
				<input className="formInput" onChange={handleChange} {...otherProprs} />
			</div>
		</div>
	);
};

export default Input;
