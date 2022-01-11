import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import TokenMetadata from '../../../../components/TokenMetadata';
import SendNFTModal from '../../../../components/modals/SendNFTModal';
import BidNFTModal from '../../../../components/modals/BidNFTModal';

import useContract from '../../../../services/useContract';

export default function ViewNFT(user) {
	const { contract, signerAddress } = useContract('ERC721');
	const router = useRouter();
	const [tokenId, setTokenId] = useState(-1);
	const [tokenName, setTokenName] = useState('');
	const [tokenSymbol, setTokenSymbol] = useState('');
	const [name, setName] = useState('');
	const [bid, setBid] = useState('');
	const [higherbid, setHigherBid] = useState('');
	const [description, setDescription] = useState('');
	const [owner, setOwner] = useState('');
	const [url, setUrl] = useState('');
	const [tokenuri, setTokentokenuri] = useState('');
	const [modalShow, setModalShow] = useState(false);

	async function fetchContractData() {
		try {
			const { id } = router.query;
			if (contract && id) {
				const value = await contract.tokenURI(id);

				setTokentokenuri(value);
				console.log(tokenuri);
				const object = JSON.parse(value);
				console.log(object);
				setName(object.properties.name.description);
				var price = "0";
				try { price = object.properties.price.description } catch { }
				setBid(price + " ETH");
				var higherbidadd = "None";
				try {
					higherbidadd = object.properties.higherbidadd.description;
				} catch { }
				setHigherBid(higherbidadd)
				setDescription(object.properties.description.description);
				setUrl(object.properties.image.description);

				setTokenName(await contract.name());
				setTokenSymbol(await contract.symbol());

				const owner = await contract.ownerOf(id);

				setOwner(owner);
				setTokenId(id);
				console.log(id);
			}
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchContractData();

		window.ethereum.on('chainChanged', fetchContractData);

		return () => {
			window.ethereum.removeListener('chainChanged', fetchContractData);
		};
	}, [router.query, contract]);


	function activateBidNFTModal() {
		setModalShow(true);
	}
	return (
		<>
			<Head>
				<title>{name}</title>
				<meta name="description" content={name} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<TokenMetadata tokenName={tokenName} tokenSymbol="Cryptopunk" />

			<Row>
				<Col>

					{signerAddress != owner && (
						<Button className="float-end" onClick={activateBidNFTModal}>
							Bid Cryptopunk
						</Button>
					)}
				</Col>
			</Row>

			<Form>
				<Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
					<Form.Label column sm="2">
						Name
					</Form.Label>
					<Col sm="10">
						<Form.Control plaintext readOnly defaultValue={name} />
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
					<Form.Label column sm="2">
						Higher Bid
					</Form.Label>
					<Col sm="10">
						<Form.Control plaintext readOnly defaultValue={bid} />
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
					<Form.Label column sm="2">
						Higher Bid Address
					</Form.Label>
					<Col sm="10">
						<Form.Control plaintext readOnly defaultValue={higherbid} />
					</Col>
				</Form.Group>
				<Form.Group
					as={Row}
					className="mb-3"
					controlId="formPlaintextDescription"
				>
					<Form.Label column sm="2">
						Description
					</Form.Label>
					<Col sm="10">
						<Form.Control plaintext readOnly defaultValue={description} />
					</Col>
				</Form.Group>

				<Form.Group
					as={Row}
					className="mb-3"
					controlId="formPlaintextOwner"
				>
					<Form.Label column sm="2">
						Owner
					</Form.Label>
					<Col sm="10">
						<Form.Control plaintext readOnly defaultValue={owner} />
					</Col>
				</Form.Group>

				<Form.Group
					as={Row}
					className="mb-3"
					controlId="formPlaintextImage"
				>
					<Form.Label column sm="2">
						Image
					</Form.Label>
					<Col sm="10">
						<Image src={url} alt="An NFT Image" rounded fluid />
					</Col>
				</Form.Group>
			</Form>



			<BidNFTModal
				show={modalShow}
				onHide={() => {
					setModalShow(false);
					// This is a poor implementation, better to implement an event listener
					fetchContractData();
				}}
				contract={contract}
				Amount={signerAddress}
				tokenId={tokenId}
				senderAddress={signerAddress}
				tokenUri={tokenuri}
				type="Cryptopunk"
			/>

		</>
	);
}
