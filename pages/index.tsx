import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
				<meta name="description" content="Home" />
				<link rel="icon" href="/Logo.svg" />
			</Head>
			<Row>
				<img style={{ 'width': '340px' }} src='/Logo1.svg'></img>
			</Row>
			<Row>
				<Col>
					<div className="text-center">
						<h1>A gift with a story</h1>
					</div>
				</Col></Row>
			<Row>
				<Col style={{ 'width': '690px' }}>
					<div className="text-center">
						<h6>MetisGift uses the power of the Metis Layer 2 ​infrastructure to create the most easy, transparent, fun and digital charity auction on the web!</h6>
					</div>
				</Col>
			</Row>

			<Row>
				<Col style={{ width: '250px' }}>

					<Card style={{ 'background': '#00DECD', 'textAlign': 'center', 'cursor': 'pointer' }}>
						<Link href="/login?url=donation">
							<Card.Body>
								Let’s donate!
							</Card.Body>
						</Link>
					</Card>

				</Col>
			</Row>

			<Row className='Event'>
				<img style={{ 'padding': '0' }} src='/Event/Panel.svg'></img>
				<img style={{
					"position": "absolute",
					"bottom": "0"
				}} src='/Event/Group.svg'></img>
				<img style={{
					"padding": "0px",
					"position": "absolute",
					"width": "56%",
					"marginTop": "10%",
				}} src='/Event/CharityText.svg'></img>
				<Link href="/CreateEvents">
					<div className='card-body EventBTN' >
						Start event
					</div>
				</Link>
			</Row>
		</>
	);
}
