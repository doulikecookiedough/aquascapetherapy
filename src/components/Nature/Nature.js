import './Nature.css'
import KHPhoto from './Assets/KHTrail.jpg'
import { useState } from 'react';
import { Waypoint } from 'react-waypoint';

const Nature = () => {
    const [activateBlur, setActivateBlur] = useState(false)

    const triggerBlur = () => {
        !activateBlur ? setActivateBlur(true) : setActivateBlur(false)
    }

    const resetBlur = () => {
        setActivateBlur(false)
    }

    return (
        <div className="natureWrapper">
            <img className={"natureWrapper__image " + (activateBlur ? 'blur__active' : 'blur__inactive')} src={KHPhoto} alt="Kicking Horse Trail"/>
            <div className="nature__content">
                <p className="nature__exploreText"><em><strong>Explore</strong></em></p>
                <p className="nature__natureText"><em><strong>Nature</strong></em></p>
                <p className="nature__andFindText"><em>and discover aquascaping ideas</em></p>
            </div>
            <Waypoint onEnter={triggerBlur} onLeave={resetBlur}/>
        </div>
    )
  }
  
export default Nature;