import './AquascapeDetailList.css';
import { useState } from 'react';

const AquascapeDetailList = ({obj, id, str, but, kvDisplay}) => {
    // console.log(callbackFn)
    const [detailViewState, setDetailViewState] = useState('+ expand')
    const triggerDetailView = () => {
        if (detailViewState === "- collapse") {
            setDetailViewState("+ expand")
        } else {
            setDetailViewState("- collapse")
        }
    }

    function generateButton() {
        if (but === "Yes") {
            return <button className="aqPortfolio__buttonSeeMore" onClick={triggerDetailView}>{detailViewState}</button>
        }
    }

    function generateDataValues(obj, keyTrue, start, end) {
        const valueList = Object.entries(obj).map((key, index) => {
            while (index >= start && index < end) {
                if (keyTrue === "Yes" && index >= 0) {
                    return <p key={index} className="aqPortfolio__detailsDataValue">{key[0]} : {key[1]}</p>
                } else {
                    return <p key={index} className="aqPortfolio__detailsDataValue">{key[1]}</p>
                }
            }
            return false     
        })
        return valueList
    }

    function generateDataHeading(str) {
        return <h2 className="aqPortfolio__detailsHeading">{str}</h2>
    }

    return (
        <div className="aqPortfolio__detailsData" id={id}>
            <>
            {generateDataHeading(str)}
            {generateDataValues(obj, kvDisplay, 0, 5)}
            <div className={"aqPortfolio__detailsData-expansionContainer " + (detailViewState === '+ expand' ? 'aqPortfolio__expansionCollapse' : 'aqPortfolio__expansionExpand')}>
                {generateDataValues(obj, kvDisplay, 5, 30)}
            </div>
            {generateButton()}
            </>
        </div>
    )
}

export default AquascapeDetailList;