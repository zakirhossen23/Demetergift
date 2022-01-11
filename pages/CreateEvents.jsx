import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import UseFormInput from '../components/UseFormInput';
import useContract from '../services/useContract';
import Router from 'next/router'
import FileBase64 from 'react-file-base64';

export default function CreateEvents() {


    const { contract, signerAddress } = useContract('ERC721');
    let { state } = {};

    const [EventTitle, EventTitleInput] = UseFormInput({
        defaultValue: "",
        type: 'text',
        placeholder: 'Event Title',
        id: ''
    });
    const [EventDescription, EventDescriptionInput] = UseFormInput({
        defaultValue: "",
        type: 'text',
        placeholder: 'Event Description',
        id: ''
    });
    const [EventDate, EventDateInput] = UseFormInput({
        defaultValue: "",
        type: 'datetime-local',
        placeholder: 'Event End Date ',
        id: 'enddate',
    });
    const [EventGoal, EventGoalInput] = UseFormInput({
        defaultValue: "",
        type: 'text',
        placeholder: 'Event Goal in ETH',
        id: 'goal',
    });

    async function createEvent() {


        const createdObject = {
            title: 'Asset Metadata',
            type: 'object',
            properties: {
                Title: {
                    type: 'string',
                    description: EventTitle,
                },
                Description: {
                    type: 'string',
                    description: EventDescription,
                },
                Date: {
                    type: 'string',
                    description: EventDate,
                },
                Goal: {
                    type: 'string',
                    description: EventGoal
                },
                logo: {
                    type: 'string',
                    description: EventLogo
                },
                typeimg: {
                    type: 'string',
                    description: "Event"
                }
            }
        };
        try {
            const result = await contract.createEvent(
                signerAddress,
                JSON.stringify(createdObject)
            );

            console.log(result);
        } catch {
            Router.push('/login');
        }

        Router.push('/donation');

    }
    const [EventLogo, EventLogoInput] = UseFormInput({
        defaultValue: "",
        type: 'text',
        placeholder: 'Event Logo Link',
        id: 'logo'
    });


    return (
        <><>
            <Head>
                <title>Create Event</title>
                <meta name="description" content="Create Event" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Row>
                <Col style={{ padding: "0 37%", "paddingTop": 0, width: "100%" }}>
                    <div style={{ width: "500px", background: "transparent", padding: "19px", borderRadius: "4px", height: "100%", border: "white solid" }}>
                        <div style={{ margin: "0px 0px 30px 0px" }}>
                            <h1>Create Event</h1>
                        </div>

                        <div style={{ margin: "18px 0" }}>
                            <h6>Event Title</h6>
                            {EventTitleInput}
                        </div>

                        <div style={{ margin: "18px 0" }}>
                            <h6>Event End Date</h6>
                            {EventDateInput}
                        </div>
                        <div style={{ margin: "18px 0" }}>
                            <h6>Event Goal</h6>
                            {EventGoalInput}
                        </div>
                        <div style={{ margin: "18px 0" }}>
                            <h6>Event Logo Link</h6>
                            {EventLogoInput}
                        </div>

                        <Button style={{ margin: "17px 0 0px 0px", width: "100%" }}
                            onClick={createEvent}
                        >
                            Create Event
                        </Button>
                    </div>
                </Col>
            </Row>

        </>
        </>
    );
}
