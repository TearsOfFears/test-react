import React from "react";
import GetAllUsers from "../components/GetAllUsers/GetAllUsers";
import Header from "../components/Header/Header";
import PagButtons from "../components/PagButtons/PagButtons";
import "./style.scss";
import { Container, Row } from "react-bootstrap";
import ModalPosts from "../components/ModalPosts/ModalPosts";
function Home() {
	return (
		<Container>
			<Row>
				<Header />
			</Row>
			<GetAllUsers />
		
			<PagButtons />
		</Container>
	);
}

export default Home;
