import React from "react";

function Arrow(props) {
	return (
		<svg
			width="23"
			height="40"
			viewBox="0 0 23 40"
			fill="none"
			className={props.style}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M21 2L3 20L21 38"
				stroke="#EEEEEE"
				stroke-width="3"
				stroke-linecap="round"
			/>
		</svg>
	);
}

export default Arrow;
