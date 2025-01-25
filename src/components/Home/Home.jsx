import React, { useState } from 'react';
import './Home.css';

function HomePage() {
  const [doctorAvailable, setDoctorAvailable] = useState(true);
  
  const handleDoctorAvailability = () => {
    setDoctorAvailable(!doctorAvailable);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Health, Our Priority</h1>
          <p>Access trusted healthcare services with a click.</p>
          <div className="cta-buttons">
            <button className="btn">Book an Appointment</button>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="main-features">
        <div className="feature-card" onClick={handleDoctorAvailability}>
          <h2>Check Doctor Availability</h2>
          <p>{doctorAvailable ? 'Doctor is Available' : 'Doctor is Unavailable'}</p>
          <button className="btn check-btn">Check Availability</button>
        </div>
        <div className="feature-card">
          <h2>Donate Blood</h2>
          <p>Help save lives by donating blood today!</p>
          <button className="btn">Learn More</button>
        </div>
        <div className="feature-card">
          <h2>Book an Appointment</h2>
          <p>Get scheduled with our healthcare professionals instantly.</p>
          <button className="btn">Book Now</button>
        </div>
      </section>

      {/* Health Tips */}
      <section className="health-tips">
        <h2>Health Tips</h2>
        <div className="tips">
          <div className="tip-card">
            <h3>Eat Well</h3>
            <p>Maintain a balanced diet with essential nutrients.</p>
          </div>
          <div className="tip-card">
            <h3>Exercise Regularly</h3>
            <p>Stay active to keep your body and mind healthy.</p>
          </div>
          <div className="tip-card">
            <h3>Stay Hydrated</h3>
            <p>Drink plenty of water throughout the day.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Patients Say</h2>
        <div className="testimonial-carousel">
          <div className="testimonial">
            <p>"The healthcare services were exceptional, and the staff made me feel at ease."</p>
            <p>- John Doe</p>
          </div>
          <div className="testimonial">
            <p>"Efficient appointments, thorough consultations. Very impressed with the overall service!"</p>
            <p>- Sarah Smith</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Healthcare System | All Rights Reserved</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
