import React from 'react'
import './Popups.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Slider';
import Slider1 from './Components/Slider1';

function Popups(props) {
    


    return (props.trigger) ? (
        <div className='popup'>
            <div className='flow'>
                <div className='popup-inner'>
                    
                    {/* <button className='close-btn' onClick={()=> props.setTrigger(false)}>X</button>  */}
                    {/*  */}
                    <div className='posi'>
                    <div>
                        <Slider trigger={props.trigger} setTrigger={props.setTrigger}/>
            
                    </div>
                    <div className='bottom-container'>
                        <div className='rate'>
                            <div className='cardin'>PIERRE CARDIN</div>
                            <div className='rate-star'>4.4*(22)</div>
                        </div>
                        <div className='discription'>

                            Carousels don’t automatically normalize 
                            slide dimensions. As such, you may need to use 
                            additional utilities or custom styles to appropriately 
                            
                        </div>
                        <div className='price-reason'>
                            <div className='price-reason1'>1999</div>
                            <div className='price-reason2'>R 699</div>
                            <div className='price-reason3'>65 % OFF</div>
                            
                        </div>

                        <div className='property-reason'>
                            <p>
                                You should import individual components like: react-bootstrap/Button 
                                rather than the entire library. Doing so pulls in only the specific components that you use, which can significantly 
                                reduce the amount of code you end up sending to the client.
                                <button >{false ? 'Read Less' : 'Read More'}</button>
                            </p>
                        </div>
                        <div className='btn-class'>
                            <button className='button-black'>Shop on Brand</button>
                            <button className='button-green'>Save on Whatsapp</button>
                        </div>

                    </div>
                    {/* <button className='close-btn'>X</button> */}
                    {props.children}
                    </div>
                </div>

                <div className='popup-inner'>
                    <Slider1 trigger={props.trigger} setTrigger={props.setTrigger}/>
                    {/* <button className='close-btn'>X</button> */}
                    {props.children}
                </div>

                <div className='popup-inner'>
                    <h1>hello</h1>
                    {/* <button className='close-btn' onClick={()=> props.setTrigger(false)}>X</button> */}
                    {props.children}
                </div>
            </div>
        </div>
    ) : "";
}

export default Popups;


