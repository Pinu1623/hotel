import React from 'react';

const Home2 = () => { 
    return (
<div className="container home-section">
          <div className='container mx-auto'>
            <div className="header-container">
              <h1>Cappadocia St Nino's Garden</h1>
              <h5>a blissful escape into nature's embrace.</h5>
            </div>
            <div className='img-form'>  
              <div className="image-container">
                <img src="p1.jpg" alt="Image" />
              </div>
              <div className="form-container">
              <form>
                <h2 className='heading2'>Book the room now</h2>
                <div className='form-in'>
                <div className="name-container">
                <div className="input-container">
                      <label htmlFor="checkInDate">Check-in Date:  </label>
                      <input type="date" id="checkInDate" name="checkInDate" required />
                    </div>
                    <div className="input-container">
                      <label htmlFor="checkOutDate">Check-out Date:  </label>
                      <input type="date" id="checkOutDate" name="checkOutDate" required />
                    </div>
                </div>

                <label htmlFor="mobileNumber">Mobile Number: </label>
                <input type="tel" id="mobileNumber" name="mobileNumber" placeholder="Mobile number" pattern="[0-9]{10}" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="abc@gmail.com" required />

                <label htmlFor="prizeRange">Prize Range: </label>
                <input type="range" id="prizeRange" name="prizeRange" min="1" max="100" />

                <button type="submit">Submit</button>
                </div>
              </form>
              </div>
            </div>
          </div>
          <div className="images-row">
            {[1, 2, 3, 4].map((index) => (
              <img key={index} src={`/image-${index}.jpg`} alt={`Image ${index}`} className="image" />
            ))}
          </div>
          <div className="book-now-container">
            <button className="book-now-button">Book Now</button>
          </div>
        </div>
    )
};

export default Home2;
