import './Emotions.css'
import { useState } from 'react';
import { Waypoint } from 'react-waypoint';

const Emotions = () => {
    const [activateBorder, setActivateBorder] = useState(false)

    const triggerBorder = () => {
        !activateBorder ? setActivateBorder(true) : setActivateBorder(false)
    }

    const resetBorder = () => {
        setActivateBorder(false)
    }

    return (
        <div className="emotionsWrapper">
            <div className="emotionsWrapper__textWrapper">
                <h1 className={"emotionsWrapper__textHeading " + (activateBorder ? 'reveal__Border' : 'hide__Border')}>Positive vibrations,<br/> from <span className="textHeading__prataReg"><em>me</em></span>, to <span className="textHeading__prataReg"><em>you</em></span>.</h1>
                <p className="emotionsWrapper__textContent">"Aquascape Therapy is the product of my passion and gratitude.
                    It is full of my honesty and sincerity. Through sharing my photo journal, 
                    personal experiences and outdoor adventures - 
                    I hope to help you feel a little more at ease in this world; 
                    to provide some comfort for your slow days; and to assist you 
                    in your journey on earth."</p>
                <p className="emotionsWrapper__textAuthor">- Dou (@cookie.dou_scapes)</p>
                <Waypoint onEnter={triggerBorder} onLeave={resetBorder}/>
            </div>
        </div>
    )
  }
  
export default Emotions;