import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersPosts, onModalHideShow } from "../../redux/posts/post.actions";
import Button from "../Button/Button";
import ModalPosts from "../ModalPosts/ModalPosts";
import "./style.scss";
function ListUsers({ data, loading }) {
	const dispatch = useDispatch();
	const posts = useSelector((store) => store.posts.posts);
	const modalStore = useSelector((store) => store.posts.modal);
	const [modal, setHideModal] = useState(false);


	const toggleModal = () => {
		setHideModal(true);
	};
	const handleGetPosts = (id) => {
		dispatch(getUsersPosts(id));
		dispatch(onModalHideShow(true));
		toggleModal();
	};
	const configModalPost = {
		modal,
		setHideModal,
		toggleModal,
		posts,
	};
	

	return (
		<div className="wrapper-users">
			{loading && <h1>loading...</h1>}
			<ul
				className={modal && modalStore ? "posts postExpanded" : "posts"}
			
			>
				{Array.isArray(data) &&
					data.map((data, key) => {
						const { name, username, id } = data;
						return (
							<li key={id}>
								<h1>{name}</h1>
								<h1>{username}</h1>
								<Button
									style={"buttonOpenPosts"}
									onClick={(e) => handleGetPosts(id)}
								>
									Open Posts
								</Button>
							</li>
						);
					})}
				{Array.isArray(data) && data.length === 0 && <h1>Dont have users</h1>}
			</ul>
			<ModalPosts {...configModalPost} />
		</div>
	);
}

export default ListUsers;
