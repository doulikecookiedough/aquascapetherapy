import './aquascapes.css';
import aquascapeData from './aquascapesManifest.js'
import AquascapeDetailList from "./AquascapeDetailList/AquascapeDetailList.js";
import { Waypoint } from 'react-waypoint';
import { useState } from 'react';

const Aquascapes = ({callbackFn}) => {
    const aquascapeLayouts = aquascapeData()
    const layoutNum = Object.keys(aquascapeLayouts).length
    const [activeLayout, setActiveLayout] = useState(1);

    const changeScapeRight = () => {
        if (activeLayout >= layoutNum) {
            setActiveLayout(1)
        } else {
            setActiveLayout(activeLayout + 1)
        }
    }

    const changeScapeLeft = () => {
        if (activeLayout <= 1) {
            setActiveLayout(layoutNum)
        } else {
            setActiveLayout(activeLayout - 1)
        }
    }

    const changeToBlue = () => {
        callbackFn("blue")
    }

    const changeToWhite = () => {
        callbackFn("white")
    }

    const [activateSoak, setActivateSoak] = useState(false)
    const triggerSoak = () => {
        !activateSoak ? setActivateSoak(true) : setActivateSoak(false)
    }
    const resetSoak = () => {
        setActivateSoak(false)
    }

    return (
        <>
            <div className="aqPortfolio carousel">
                {aquascapeLayouts.map((scape, key) =>
                    <div className={"aqPortfolio__layout carousel__layout " + (activeLayout === (scape.id) ? "carousel__active" : "carousel__inactive")} key={key} id={scape.id}>
                        <p className={"aqPortfolio__introText " + (activateSoak ? 'soak__active' : 'soak__inactive')}><em><strong>Soak in the inspiration that shaped aquascapes like:</strong></em></p>
                        <h1 className="aqPortfolio__itemTitle"><span className="aqPortfolio__quoteColour">" </span>{scape.name}<span className="aqPortfolio__quoteColour"> "</span></h1>  
                        <img className="aqPortfolio__aquascape" src={scape.imageUrl} alt="Aquascape of Scalare Summit"/>
                        <div className="aqPortfolio__details">
                            <AquascapeDetailList obj={scape.equipment} id={scape.id} str="Equipment" but="No" kvDisplay="No"/>
                            <AquascapeDetailList obj={scape.plants} id={scape.id} str="Plants" but="Yes" kvDisplay="No" callbackFn={changeToBlue}/>
                            <AquascapeDetailList obj={scape.fauna} id={scape.id} str="Fauna" but="Yes" kvDisplay="No" callbackFn={changeToBlue}/>
                            <AquascapeDetailList obj={scape.misc} id={scape.id} str="Misc. Info" but="Yes" kvDisplay="Yes" callbackFn={changeToBlue}/>
                            <Waypoint onEnter={triggerSoak} onLeave={resetSoak}/>
                            {/* <Waypoint onEnter={changeToBlue} onLeave={changeToWhite} bottomOffset="220px"/> */}
                        </div>
                    </div>
                )}
                <span className="carouselButton carouselButton__previousItem" onClick={changeScapeLeft}></span>
                <span className="carouselButton carouselButton__nextItem" onClick={changeScapeRight}></span>
            </div>
            <Waypoint onEnter={changeToBlue} onLeave={changeToWhite}/>
        </>
    )
}

export default Aquascapes;