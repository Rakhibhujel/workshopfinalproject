import React from "react";

import "./Part.css";

const Part = () => {
  return (
    <div className="box-main">
      <h1>Adventures</h1>

      <div className="box">
        <img
          src="https://media.istockphoto.com/id/547436912/photo/bungee-jumping.webp?a=1&b=1&s=612x612&w=0&k=20&c=U0ONjFPAwKX4s7D0ZbKwnSVzSyPSv2aahfrYCVfi6xI="
          alt="Memories-img"
        />

        <div className="bungee">
          <h3>Bungee Jumping</h3>
        </div>
      </div>

      <div className="box">
        <img src="https://media.istockphoto.com/id/1303898858/photo/paragliders-sail-over-mountains-and-lake-on-a-stormy-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=2LILLaFk_xpIOM_L6I2YiD5miAVi-Bj9WFXrqlNrUvw=" />

        <div>
          <h3>Paragliding</h3>
        </div>
      </div>

      <div className="box">
        <img
          src="https://images.unsplash.com/photo-1641584495061-89b9025f563b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFmdGluZyUyMGluJTIwbmVwYWx8ZW58MHx8MHx8fDA%3D"
          alt="Memories-img"
        />

        <div>
          <h3>Rafting</h3>
        </div>
      </div>
      <div className="box">
        <img
          src="https://images.unsplash.com/photo-1697456484680-d8269d2deddd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJvY2slMjBjbGltYmluZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Memories-img"
        />

        <div>
          <h3>Rock Climbing</h3>
        </div>
      </div>

      <div className="box">
        <img
          src="https://media.istockphoto.com/id/475070140/photo/zip-lining.webp?a=1&b=1&s=612x612&w=0&k=20&c=iEb1xiPa044fmiCFEud9ixFAlmNGudlGCn4JqX4hPv0="
          alt="Memories-img"
        />

        <div>
          <h3>Zip Flyer</h3>
        </div>
      </div>
    </div>
  );
};

export default Part;
