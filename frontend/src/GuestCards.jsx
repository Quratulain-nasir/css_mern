import React from 'react';
import './GuestCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function GuestCards({ name, image}) {
  const aspectRatioStyle = {
    position: 'relative',

    margin: '10px', 
    paddingBottom: '100%',
  };
  const contentStyle = {
    padding: '10px',
  };
  const imageStyle = {
    position: 'relative',
    top: '0',
    left: '0',
  
    objectFit: 'cover',
  };
    return (
    
        
        <div className="card brand-card shadow p-3 m-3 d-flex flex-column justify-content-between" style={aspectRatioStyle}>
          <div className="image-container flex-wrap flex-row">
            <img
              src={image}
              className=" p-2 img-fluid"
              alt={name}
              style={imageStyle}
            />
          
          <div className="card-body text-center text-dark " style={contentStyle}>
            <h4 className="card-title">{name}</h4>
          </div>
         
          </div>
        </div>
        

    );
  };