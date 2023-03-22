import React, { useState } from "react";

// import Header from './header';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "../../slider-animations.css";
import "../../styles.css";
import Contacted from "./contactData";
import Headers from "../../component/layout/header";

const Contact = () => {
  const [data, setData] = useState(Contacted);

  return (
    <>
    
        <Headers/>
        <div className="wrapper"></div>
        <Slider className="slider-wrapper">
          {data.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`,
              }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>{item.button}</button>
                <button>{item.button}</button>
              </div>
              <section>
                <img src={item.userProfile} alt={item.user} />
                <span>
                  Posted by <strong>{item.user}</strong>
                </span>
              </section>
            </div>
          ))}
        </Slider>
      
    </>
  );
};

export default Contact;
