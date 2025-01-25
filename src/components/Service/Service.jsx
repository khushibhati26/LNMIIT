import React from "react";
import "./Service.css";

// Import images
import cardiology from "../../assets/cardiology.jpeg";
import dermatology from "../../assets/dermatology.jpeg";
import pediatrics from "../../assets/pediatrics.jpeg";
import orthopedics from "../../assets/orthopedics.jpeg";
import neurology from "../../assets/neurology.jpeg";
import radiology from "../../assets/radiology.jpeg";
import physiotherapy from "../../assets/physiotherapy.jpeg";
import opthalmology from "../../assets/opthalmology.jpeg";
import dentistry from "../../assets/dentistry.jpeg";

// Service data with imported images
const services = [
  { id: 1, name: "Cardiology", image: cardiology },
  { id: 2, name: "Dermatology", image: dermatology },
  { id: 3, name: "Pediatrics", image: pediatrics },
  { id: 4, name: "Orthopedics", image: orthopedics },
  { id: 5, name: "Neurology", image: neurology },
  { id: 6, name: "Radiology", image: radiology },
  { id: 7, name: "Physiotherapy", image: physiotherapy },
  { id: 8, name: "Opthalmology", image: opthalmology },
  { id: 9, name: "Dentistry", image: dentistry },
];

const Service = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.name} className="service-image" />
            <h2 className="service-name">{service.name}</h2>
            <button className="service-button">See More Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
