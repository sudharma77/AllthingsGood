import { Button} from 'react-bootstrap';
import Popups from './Popups';
import './Popups.css';
import React, { useState } from 'react';

function CardPhotos() {
    const [Bp, setBp] = useState(false)
    return (
        <>

            <Button onClick={() => setBp(true)}>Open Pops</Button>
            <img src="https://m.media-amazon.com/images/I/819pPV-f4NL._AC_UL480_QL65_.jpg" alt="sera" className="images" onClick={() => setBp(true)}/>
            <Popups trigger={Bp} setTrigger={setBp}/>
                
            

        </>
    )
}
export default CardPhotos;