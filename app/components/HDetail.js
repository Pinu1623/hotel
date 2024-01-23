// Hotel Detail.js

const HDetails = () => {
    return (
        <div className="container-main">
            <div className="container-di">
                <div className="Details">
                    <h1>Room in the cave hosted by Aydin </h1>
                    <ul className="hdetail">
                        <div>
                            <li>Natural Ambiance:</li>
                            <p>Escape to nature's serenity, unwind in panoramic luxury, embrace tranquility.</p>
                        </div>
                        <div>
                            <li>Aydin Hospitality:</li>
                            <p>Exceptional Aydin Hospitality: Your home away from home, unparalleled service.</p>
                        </div>
                        <div>
                            <li>Hidden Gems Tour:</li>
                            <p>Discover local gems, expert-guided tours, create memories off the beaten path.</p>
                        </div>
                    </ul>
                    <p>For a memorable cave experience hosted by Aydin</p>
                </div>
                <div className="image1">
                    <img src="image-4.jpg" alt="Room 1" />
                </div>
            </div>
                        
            <div className="Panel-main">
                <div className="Panel1">
                    <div className="panel">
                        <img src="bedroom.png" alt="bedroom" className="pimg1" />
                        <p className="Discp">1 Bed</p>
                    </div>
                </div>
                <div className="Panel1">
                    <div className="panel">
                        <img src="bathtub.png" alt="Room 2" className="pimg1" />
                        <p className="Discp">Private bathroom</p>
                    </div>
                </div>
                <div className="Panel1">
                    <div className="panel">
                        <img src="team.png" alt="Room 3" className="pimg1"/>
                        <p className="Discp">Great Staff</p>
                    </div>
                </div>                              
            </div>
        </div>
    )}

export default HDetails;    