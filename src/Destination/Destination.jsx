import React from "react";
import "./Destination.css";

const Destination = () => {
  return (
    <div className="desti">
      <div className="province1">
        <h1>Province 1</h1>
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <h2>Koshi</h2>
        <p>Namchebazaar</p>
        <p>Sagarmatha National Park</p>
        <p>Lukla</p>
        <p>Dingbocche</p>
        <p>Tyanboche</p>
        <p>Gorakshep</p>
        <p>Phakding</p>
        <p>Ghokyo</p>
      </div>

      <div className="province1">
        <h1>Province 2</h1>
        <img
          src="https://nepaltraveller.com/uploads/destination/province-no-2.png"
          alt=""
        />
        <h2>Madhesh</h2>
        <p>Janakpur</p>
        <p>Birgung</p>
        <p>Simara Pipara</p>
        <p>Bardibaj</p>
        <p>Jaleshor</p>
        <p>Gorakshep</p>
        <p>Phakding</p>
        <p>Ghokyo</p>
      </div>

      <div className="province1">
        <h1>Province 3</h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZT1McSVAiLuZLm49LEBuDRXe86YAmDQ7BQ&s"
          alt=""
        />
        <h2>Bagmati</h2>
        <p>Boudhanath Stupa</p>
        <p>Pashupatinath Temple</p>
        <p>Swayambhunath Temple</p>
        <p>Dolakha</p>
        <p>Sauraha</p>
        <p>Ruby Valley</p>
        <p>Nuwakot Durbar</p>
        <p>Bhotekoshi</p>
      </div>

      <div className="province1">
        <h1>Province 4</h1>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <h2>Gandaki</h2>
        <p>Pokhara</p>
        <p>Annapurna</p>
        <p>Dhaulagiri</p>
        <p>Sarangkot</p>
        <p>Dhampus</p>
        <p>Begnas Lake</p>
        <p>Phea Lake</p>
        <p>Bandipur</p>
      </div>

      <div className="province1">
        <h1>Province 5</h1>
        <img
          src="https://nepaltraveller.com/uploads/destination/province-no-5.png"
          alt=""
        />
        <h2>Lumbini</h2>
        <p>Birthplace of Siddhartha Gautam</p>
        <p>Ashoka Pilar</p>
        <p>Banyan Tree</p>
        <p>Lumbini Monastic Sites</p>
        <p>Rishikesh</p>
        <p>Mukundeshwar</p>
        <p>Jitgadi Killa</p>
        <p>Siddha Baba temple</p>
      </div>

      <div className="province1">
        <h1>Province 6</h1>
        <img
          src="https://nepaltraveller.com/uploads/destination/province-no-6.jpg"
          alt=""
        />
        <h2>Karnali</h2>
        <p>Shey Phoksundo National Park</p>
        <p>Phoksundo Lake</p>
        <p>Karnali River</p>
        <p>Rara Lake</p>
        <p>Dolpo Trekking</p>
        <p>Kailash Tour</p>
        <p>Sinja Valley </p>
        <p>Surkhet</p>
      </div>

      <div className="province1">
        <h1>Province 7</h1>
        <img
          src="https://nepaltraveller.com/uploads/destination/province-no-7.jpg"
          alt=""
        />
        <h2>Koshi</h2>
        <p>Namchebazaar</p>
        <p>Sagarmatha National Park</p>
        <p>Lukla</p>
        <p>Dingbocche</p>
        <p>Tyanboche</p>
        <p>Gorakshep</p>
        <p>Phakding</p>
        <p>Ghokyo</p>
      </div>
    </div>
  );
};

export default Destination;
