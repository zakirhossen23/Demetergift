import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import TokenMetadata from '../../../components/TokenMetadata';
import CreateNFTModal from '../../../components/modals/DonateNFTModal';

import useContract from '../../../services/useContract';

export default function ViewAllNFTs(user) {
	const { contract, signerAddress } = useContract('ERC721');
	const [list, setList] = useState([]);
	const [tokenName, setTokenName] = useState('');
	const [tokenSymbol, setTokenSymbol] = useState('');
	const [modalShow, setModalShow] = useState(false);

	async function fetchContractData() {

		try {
			if (contract) {
				setTokenName(await contract.name());
				setTokenSymbol(await contract.symbol());

				const totalSupply = await contract.totalSupply();
				const arr = [];
				for (let i = 0; i < totalSupply; i++) {
					const value = await contract.tokenURI(i);
					const owner = await contract.ownerOf(i);

					if (value) {
						const object = JSON.parse(value);
						var pricedes1 = "0";
						try { pricedes1 = object.properties.price.description; } catch (ex) { }

						try { if (object.properties.typeimg.description != "Cryptopunk") { continue } } catch (ex) { }

						arr.push({
							tokenId: i,
							name: object.properties.name.description,
							price: pricedes1,
							img: object.properties.image.description,
							title: "Cryptopunk #" + (parseInt(i)).toString() + " For Sale: " + pricedes1 + " ETH",
							owner,
						});
					}
				}

				setList(arr);
				document.getElementById("Loading").style = "display:none";
			}
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchContractData();

		window.ethereum.on('accountsChanged', fetchContractData);
		window.ethereum.on('chainChanged', fetchContractData);

		return () => {
			window.ethereum.removeListener('accountsChanged', fetchContractData);
			window.ethereum.removeListener('chainChanged', fetchContractData);
		};
	}, [contract]);

	function activateCreateNFTModal() {
		setModalShow(true);
	}
	const listItems = list.map((listItem) =>
		<div key={listItem.id} style={{ "display": "grid" }}>
			<Link href={`/projects/Cryptopunks/view/${listItem.tokenId}`}>
				<a title={listItem.title} >
					<img style={{ width: "145px", height: "145px" }} src={listItem.img}></img>
				</a>
			</Link>
			<a style={{ color: "yellow" }} >#{listItem.tokenId}</a>

			<a style={{ color: "white" }} >{listItem.price} ETH</a>
			<a style={{ color: "grey" }} >{listItem.name}</a>
		</div>
	);
	return (
		<><>
			<Head>
				<title>Cryptopunk ERC-721</title>
				<meta name="description" content="ERC721" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<TokenMetadata tokenName={tokenName} tokenSymbol="Cryptopunk" />

			<Row>
				<Col>
					{user && (
						<Button
							className="float-end"
							onClick={activateCreateNFTModal}
						>
							Create Cryptopunk
						</Button>
					)}
				</Col>
			</Row>

			<Row>
				<Col>
					<div id='Loading'>
						<h1>Loading...</h1>
					</div>

					<div style={{ background: "white", marginTop: "10px", height: "1.2px" }}></div>
					<div style={{ display: "flex", gap: "41px", 'flexWrap': "wrap", marginTop: "10px" }} >
						{listItems}
					</div>

				</Col>
			</Row><CreateNFTModal
				show={modalShow}
				onHide={() => {
					setModalShow(false);
					// This is a poor implementation, better to implement an event listener
					fetchContractData();
				}}
				contract={contract}
				senderAddress={signerAddress}
				type="Cryptopunk" /></>
		</>
	);
}
