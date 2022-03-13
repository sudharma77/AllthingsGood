import React, {useState} from 'react'
import './Components/Slider.css'
import BtnSlider from './Components/BtnSlider'
import dataSlider from './Components/dataSlider'

function Slider(props) {

    const [slideIndex, setSlideIndex] = useState(1)
    

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
            
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        
        <div className="container-slider">
            
            {dataSlider.ss.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <div className='shekh'>
                            <div className='content-set'>
                                <div className='sss'>
                                     <div className='buget'>BUGET</div>
                                     <div className='off'>60% Off</div>
                                </div>
                                
                                <button className='button-slider' onClick={()=> props.setTrigger(false)}>X</button>
                            </div>

                        </div>

                        <img 
                        //src='https://images.unsplash.com/photo-1592656094267-764a45160876?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dm9sbGV5YmFsbHxlbnwwfHwwfHw%3D&w=1000&q=80'
                        // src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} 
                        src={obj.l}
                        alt="s"
                        
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
            
        </div>
    )
}

export default Slider;