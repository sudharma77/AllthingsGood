
import Popups from './Popups';

import React, { useState } from 'react';
import Accord from './Accord';


function Titlecomponent() {
    const [Bp, setBp] = useState(false)
    return (
        <section>
            <div className="App" >

                <h2 className="Dupes" >
                    Every Day Makeup Using
                    <br/>
                    Dupes of High End Favorites
                </h2>
                <img src="https://m.media-amazon.com/images/I/819pPV-f4NL._AC_UL480_QL65_.jpg" alt="sera" className="images" onClick={() => setBp(true)}/>
                <Popups trigger={Bp} setTrigger={setBp}/>
                
                <div className="setCenter">
                {/* <MDBIcon fab icon="whatsapp" /> */}
                    <button className="button1">Save Post on Whatsapp</button>
                </div>
                <div className="Tag-Product">Tagged Products</div>
                <br/><br/>
            </div>
            
            <Accord/>
            <br/><br/>

        </section>
    )
}

export default Titlecomponent;