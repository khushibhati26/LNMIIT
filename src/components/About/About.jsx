import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Our Application</h1>
      <p className="about-description">
        Our application provides a variety of services aimed at improving your health and well-being. 
        Whether you are looking for professional medical services, donating blood, connecting with doctors, 
        or checking their availability using RFID technology, we’ve got you covered.
      </p>
      
      <div className="features-container">
        <div className="feature-card">
          <h3 className="feature-title">Find Doctors</h3>
          <p className="feature-description">
            Connect with experienced doctors from different fields. Check their availability and book an appointment.
          </p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">RFID Doctor Availability</h3>
          <p className="feature-description">
            Using RFID technology, you can instantly check the availability of doctors by scanning their RFID badge. 
            This feature ensures that you can always find out if a doctor is in the clinic or available for consultations.
          </p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">Blood Donation</h3>
          <p className="feature-description">
            Donate blood to save lives! Easily locate nearby blood donation centers and contribute to the community.
          </p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">Our Services</h3>
          <p className="feature-description">
            Explore various medical services including cardiology, dermatology, pediatrics, and more. We have a range of specialists available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
