import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MandImage from '../assets/Mand.jpeg'

function AboutUs() {
    // Sample data for demonstration
    const profiles = [
        {
            name: 'Aakash Sharma',
            email: 'aakashsharma.ghd@gmail.com',
            image: MandImage,
            alt: 'Aakash Profile',
        },
    ];
    return (
        <React.Fragment>
            <Navbar />
            <div className="abtusheading">
                Aakash Sharma
            </div>
            <div id="abtus">
                {profiles.map((profile, index) => (
                    <div key={index} className="card">
                        <div className="image">
                            <img src={profile.image} alt={profile.alt} />
                        </div>
                        <div className="details">
                            <h2>{profile.name}</h2>
                            <p>{profile.email}</p>
                            <p>{profile.number}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default AboutUs;