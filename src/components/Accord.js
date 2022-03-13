import React from 'react'
import {  Accordion } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card1 from './Cards/Card1';
import './Accord.css';

function Accord() {
    return (      
        <div>     
            <Accordion  alwaysOpen className='Accord'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header ><span className='AccordionFont'>M.A.C Matte Lipstick-Velvet Teddy</span></Accordion.Header>
                    <Accordion.Body>
                        <Card1/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='Accord1'>
                    <Accordion.Header><span  className='AccordionFont'>PAC Eyeshadow Brush 102</span></Accordion.Header>
                    <Accordion.Body>
                        <Card1/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='Accord1'>
                    <Accordion.Header><span className='AccordionFont'>DIOR Backstage Foundation</span></Accordion.Header>
                    <Accordion.Body>
                        <Card1/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='Accord1'>
                    <Accordion.Header><span className='AccordionFont'>PAC Eyeshadow Brush 103</span></Accordion.Header>
                    <Accordion.Body>
                        <Card1/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className='Accord1'>
                    <Accordion.Header><span className='AccordionFont'>PAC Eyeshadow Brush 103</span></Accordion.Header>
                    <Accordion.Body>
                        <Card1/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className='Accord1'>
                    <Accordion.Header><span className='AccordionFont'>PAC Eyeshadow Brush 103</span></Accordion.Header>
                    <Accordion.Body>
                        <Card1/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            </div>
       

    )
}

export default Accord;