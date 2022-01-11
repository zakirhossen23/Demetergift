import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Link from 'next/link';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import BidNFTModal from '../../../components/modals/BidNFTModal';

import useContract from '../../../services/useContract';

export default function ViewNFT(user) {
    const { contract, signerAddress } = useContract('ERC721');
    const router = useRouter();
    const [tokenId, setTokenId] = useState(-1);
    const [list, setList] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setdescription] = useState('');
    const [type, settype] = useState('');

    const [higherbid, sethigherbid] = useState('');

    const [higherbidusd, sethigherbidusd] = useState('');

    const [dateleft, setdateleft] = useState('');
    const [logo, setlogo] = useState('');
    const [selectid, setselectid] = useState('');
    const [selecttype, setselecttype] = useState('');

    const [tokenuri, setTokenuri] = useState('');
    const [modalShow, setModalShow] = useState(false);

    function addZero(num) {
        return num < 10 ? `0${num}` : num;
    }
    function AmPM(num) {
        return num < 12 ? 'AM' : 'PM';
    }
    function LeftDate(datetext) {
        var c = new Date(datetext).getTime();
        var n = new Date().getTime();
        var d = c - n;
        var da = Math.floor(d / (1000 * 60 * 60 * 24));
        var h = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((d % (1000 * 60)) / 1000);
        return (da.toString() + " Days " + h.toString() + " hours " + m.toString() + " minutes " + s.toString() + " seconds");
    }
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    async function fetchContractData() {
        try {
            const { id } = router.query;
            if (contract && id) {
                setTokenId(id);
                const value = await contract.tokenURI(id);
                console.log(value);
                const arr = [];
                const totalBids = await contract.getBidsSearchToken(id);
                console.log(totalBids);
                for (let i = 0; i < Number(10); i++) {
                    const obj = await totalBids[i];
                    const object = {};
                    try { object = await JSON.parse(obj) } catch { }
                    if (object.title) {
                        var pricedes1 = 0;
                        try { pricedes1 = formatter.format(Number(object.properties.bid.description * 3817.09)) } catch (ex) { }
                        const BidId = Number(await contract.getBidIdByUri(obj));
                        const Datetime = new Date(object.properties.time.description);

                        let currentdate = `${addZero(Datetime.getDate())}/${addZero(Datetime.getMonth() + 1)}/${addZero(Datetime.getFullYear())} ${addZero(Datetime.getHours())}:${addZero(Datetime.getMinutes())}:${addZero(Datetime.getSeconds())} ${AmPM(Datetime.getHours())}`
                        arr.push({
                            Id: BidId,
                            name: object.properties.username.description,
                            time: currentdate,
                            bidprice: object.properties.bid.description,
                            bidpriceusd: pricedes1
                        });
                    }
                }
                console.log(arr);
                setList(arr);
                if (document.getElementById("Loading"))
                    document.getElementById("Loading").style = "display:none";
                if (document.getElementById("Loadingtable")) {
                    var element = document.getElementById("Loadingtable");
                    element.style = "display:block";
                    (element).setAttribute("id", "");
                }


                setTokenuri(value);

                const object = JSON.parse(value);
                setTitle(object.properties.name.description);
                setdescription(object.properties.description.description);
                sethigherbidusd(formatter.format(Number(object.properties.price.description * 3817.09)));
                sethigherbid(Number(object.properties.price.description));
                setdateleft(object.properties.date.description);
                settype(object.properties.typeimg.description);
                setlogo(object.properties.image.description);
            }
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchContractData();

    }, [router.query, contract]);

    setInterval(function () {
        calculateTimeLeft();
    }, 1000);

    function calculateTimeLeft() {
        try {
            var allDates = document.getElementsByName("dateleft");
            for (let i = 0; i < allDates.length; i++) {
                var date = (allDates[i]).getAttribute("date");
                allDates[i].innerHTML = LeftDate(date);
            }
        } catch (error) {

        }

    }
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={title} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="row EventContainer" >
                <div style={{ "display": "flex" }}>
                    {type == "Cryptopunk" ? (
                        <img src={logo} className="AuctionBidImage pixel" />
                    ) : (
                        <img src={logo} className="AuctionBidImage" />
                    )}

                    <div className="TokenDetialsContainer">
                        <h4>{title}</h4>
                        <div className='TextContainer'>
                            <h4>Description: </h4>
                            <h4>{description}</h4>
                        </div>
                        <div className='TextContainer'>
                            <h6>Type: </h6>
                            <h6>{type}</h6>
                        </div>

                        <div className='TextContainer'>
                            <h6>Higher Bid: </h6>
                            <h6>$ {higherbidusd} ({higherbid} ETH)</h6>
                        </div>
                        <div className='TextContainer'>
                            <h6 name='dateleft' date={dateleft}>{dateleft}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div id='Loading' className="LoadingArea">
                <h1>Loading...</h1>
            </div>

            <div id='Loadingtable' style={{ display: 'none' }} className="ElementsContainer">
                <div className='tableHeader'>
                    <div className='tableHeaderContainer'>
                        <div className='tableheaderDateContainer' >
                            <h4 className="header">Date</h4>
                        </div>
                        <div className="tableheaderUserContainer" >
                            <h4 className="header">User Name</h4>
                        </div>
                        <div className="tableheaderBidContainer" >
                            <h4 className="header">Bid</h4>
                        </div>
                    </div>
                </div> {list.map((listItem) => (
                    <div key={listItem.Id} className='tableFullRowContainer'>
                        <div className='tableRowContainer'>
                            <div className='tableRowCellContainer'>
                                <div className='tableRowCellDateContainer'>
                                    <h5 className="cell">{listItem.time}</h5>
                                </div>
                                <div className='tableRowCellUserContainer'>
                                    <h5 className="cell">{listItem.name}</h5>
                                </div>
                                <div className="tableRowCellBidContainer">
                                    <h5 className="cell">${listItem.bidpriceusd} ({listItem.bidprice} ETH)</h5>
                                </div>
                            </div>
                        </div>
                    </div>))}
            </div>



        </>
    );
}
