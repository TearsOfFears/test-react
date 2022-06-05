import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import Button from "./../Button/Button";
import { onModalHideShow } from "../../redux/posts/post.actions";
function ModalPosts({ posts, modal, setHideModal, toggleModal }) {
	const [show, setShow] = useState(1);
	const dispatch = useDispatch();
	const loading = useSelector((store) => store.posts.loading);
	const modalStore = useSelector((store) => store.posts.modal);
	const handleShow = (id) => {
		setShow(id);
	};
	const modalRef = useRef();
	useEffect(() => {
		const clickOutSide = (e) => {
			if (e.path.includes(modalRef.current)) {
				setHideModal(false);
			}
		};
		document.addEventListener("click", clickOutSide);
		return () => document.body.removeEventListener("click", clickOutSide)
	}, []);
	console.log(modalRef);
	console.log(modal);
	return (
		<div
			className={modal ? "showAnimation modalPosts" : "none"}
			ref={modalRef}
		>
			<Button
				style={"buttonsSort"}
				onClick={(e) => {
					dispatch(onModalHideShow(false));
				}}
			>
				Close{" "}
			</Button>
			<ul>
				{loading && <h1>loading...</h1>}
				{Array.isArray(posts) &&
					posts.map((data, key) => {
						const { id, title, body } = data;
						return (
							<li key={id}>
								<h1 onClick={(e) => handleShow(id)}>{title}</h1>
								<p className={show === id ? "showAnimation" : "none"}>{body}</p>
							</li>
						);
					})}
			</ul>
		</div>
	);
}

export default ModalPosts;
