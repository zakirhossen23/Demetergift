
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as dotenv from 'dotenv';
import Button from 'react-bootstrap/Button';
import Router from 'next/router'
import React from 'react';
import { Oauth2Client } from '@metis.io/middleware-client';
import { useRouter } from 'next/router';

declare let window: any;
export default function CreateEvents() {
    const router = useRouter();
    const { pathname } = useRouter();
    async function login() {
        let oauth2Client = new Oauth2Client();
        oauth2Client.startOauth2(
            process.env.NEXT_PUBLIC_APP_ID || '',
            `${process.env.NEXT_PUBLIC_URL}${pathname}`
        );
    }
    async function web3Connect() {
        let result = await window.ethereum.request({ method: 'eth_requestAccounts' });
        result;
        try {
            const getacc = await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x24C' }],
            });
            getacc;
            const urlParams = new URLSearchParams(window.location.search)
            let redirecturl: any = urlParams.get("url")?.toString();
            router.push(redirecturl);
        } catch (switchError: any) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainId: '0x24C',
                                chainName: 'Metis Stardust Testnet',
                                nativeCurrency: {
                                    name: 'Metis',
                                    symbol: 'tMETIS',
                                    decimals: 18,
                                },
                                rpcUrls: ['https://stardust.metis.io/?owner=588'],
                            },
                        ],
                    });
                } catch (addError) {
                    // handle "add" error
                    console.log(addError);
                }
            }
            // handle other "switch" errors
        }



    }

    return (
        <><>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Row>
                <Col style={{ padding: "3% 37%", "paddingTop": 0, width: "100%" }}>
                    <div style={{ width: "500px", background: "transparent", padding: "19px", borderRadius: "4px", height: "100%", border: "white solid" }}>
                        <div style={{ margin: "0px 0px 53px 0px" }}>
                            <h1>Login</h1>
                        </div>
                        <div style={{ margin: "0px 0px 12px 0px" }}>
                            <h4>Please select one of the option to Login</h4>
                        </div>
                        <div onClick={web3Connect} style={{ display: "flex", padding: "10px", borderRadius: "5px", cursor: "pointer", margin: "20px 0" }} className="btn-primary">
                            <img style={{ height: "45px", width: "46px" }} src="https://polis.metis.io/static/img/metamask-fox.c06f3a3e.svg" />
                            <div style={{ display: "flex", flexDirection: "column", marginLeft: "11px" }}>
                                <span style={{ fontWeight: "bolder", fontFamily: "sans-serif" }}>
                                    Metamask
                                </span>
                                <span style={{ fontSize: "15px", fontFamily: "sans-serif" }}>
                                    Connect With MetaMask
                                </span>
                            </div>
                        </div>
                        <div onClick={login} style={{ display: "flex", padding: "10px", borderRadius: "5px", cursor: "pointer", margin: "20px 0" }} className="btn-primary">
                            <img style={{ height: "45px", width: "46px" }} src="https://polis.metis.io/static/img/polis-trans.9c0be85f.png" />
                            <div style={{ display: "flex", flexDirection: "column", marginLeft: "11px" }}>
                                <span style={{ fontWeight: "bolder", fontFamily: "sans-serif" }}>
                                    Metis Polis
                                </span>
                                <span style={{ fontSize: "15px", fontFamily: "sans-serif" }}>
                                    Connect With Polis account
                                </span>
                            </div>
                        </div>


                    </div>
                </Col>

            </Row>

        </>
        </>
    );
}