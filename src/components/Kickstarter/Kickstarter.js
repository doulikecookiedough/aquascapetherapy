import './Kickstarter.css'
import bookCoverImg from './Assets/aqty_bookcover.jpg'

const Kickstarter = () => {
    return (
        <div className="kickstarterWrapper">
            <div className="kickstarter__content">
                <div className="kickstarter__bookCover">
                    <img className="kickstarter__bookImage" src={bookCoverImg} alt="Book Cover"/>
                </div>
                <div className="kickstarter__bookDetails">
                    <div className="kickstarter__bookDetails-titleWrapper">
                        <h1 className="kickstarter__bookDetails-title">Aquascape Therapy</h1>
                        <p className="kickstarter__bookDetails-volume"><strong>Vol. 1</strong></p>
                        <p className="kickstarter__bookDetails-description">
                            In Aquascape Therapy (Vol. 1), unravel the natural wonders of the PNW (British Columbia) 
                            and discover a new aquascaping lifestyle.
                            Written and designed by Dou, an award-winning aquascaper from B.C., Canada 🇨🇦.</p>
                    </div>
                    <p className="kickstarter__productType">Product: Book, Photojournal</p>
                    <div>
                        <button className="kickstarter__button">Join Kickstarter</button>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
export default Kickstarter;