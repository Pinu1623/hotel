const AboutUs = () => {
    return ( 
        <div className="about-main">
            <div className="about-limg">
                <div className="list-bt">
                    <div className="list-ab">
                    <ul className="ul-host">
                        <li className="li-host"> Free Wi-Fi throughout the hotel</li>
                        <li className="li-host">Spacious and comfortable rooms</li>
                        <li className="li-host">Outdoor swimming pool</li>
                        <li className="li-host">Fine dining restaurant</li>
                        <li className="li-host">Room service available</li>
                    </ul>
                    <ul className="ul-host">
                        <li className="li-host"> Free Wi-Fi throughout the hotel</li>
                        <li className="li-host">Spacious and comfortable rooms</li>
                        <li className="li-host">Outdoor swimming pool</li>
                        <li className="li-host">Fine dining restaurant</li>
                        <li className="li-host">Room service available</li>
                    </ul>
                    </div>
                    <div className="about-now-container">
                        <button className="book-now-button">Contact Now</button>
                     </div>
                </div>
                <div className="image1">
                    <img src="image-4.jpg" alt="Room 1" />
                </div>
            </div>
            <h1 className='host-title'>Reviews</h1>
            <div className="Review">
                <div className="Revcod">
                    <div className="review-content">
                    <figure className="box">
                        <figcaption>
                            <div className="circle-image" style={{ backgroundImage: 'url("img3.jpeg")' }}></div>
                                <p>If you do the job badly enough, sometimes you don't get asked to do it again.</p>
                        </figcaption>
                    </figure>
                    </div>
                    <div className="colanimg1">
                    <img src="quote.png" alt="bedroom" className="pimg1" />
                    </div>
                </div>
                <div className="Revcod">
                    <div className="colanimg">
                        <img src="quote.png" alt="bedroom" className="pimg1" />
                    </div>
                    <div className="review-content">
                        <figure className="box">
                            <figcaption>
                                <div className="circle-image" style={{ backgroundImage: 'url("img4.jpeg")' }}></div>
                                    <p>If you do the job badly enough, sometimes you don't get asked to do it again.</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        )}

        export default AboutUs; 