import Carousel from "react-bootstrap/Carousel";
import image1 from "../../../assets/images/imagebanner1.jpg";
import image2 from "../../../assets/images/imagebanner2.jpg"
import image3 from "../../../assets/images/imagebanner3.jpg"
import image4 from "../../../assets/images/imagebanner4.jpg"
import "./portfoliobanner.css"


import 'animate.css';

function PortfolioBanner() {
  return (
    <>
    <div className="portfolio_banner_wrapper">
      <Carousel  className="portfolio_container" >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            width={900}
            height={900}
            alt="First slide"
          />

          <Carousel.Caption>
            <div className="container mb-5">
              <div className="row pb-5 portfolio_heading     ">
                <div className="text-center">
                  <div className="">
                    <h2 className=" mb-3 mt-3   animate__animated  animate__fadeInUpBig ">
                      <span
                        className=" "
                        style={{
                          fontSize: "95px",
                          letterspacing: "-2px",
                          marginBottom: "6px",
                          lineHeight: "85px",
                        }}
                      >
                        Discover
                      </span>
                    </h2>
                    <br/>
                    <h2 className=" mb-3 mt-3  animate__animated  animate__fadeInUpBig ">
                      <span
                        className=" "
                        style={{
                          fontSize: "95px",
                          letterspacing: "-2px",
                          marginBottom: "6px",
                          lineHeight: "85px",
                        }}
                      >
                       the lifestyle.
                      </span>
                    </h2>
                  </div>
                  <div>
                    <p className=" text-white animate__animated  animate__bounceInUp ">
                      <span
                        
                        style={{
                          fontSize: "20px",
                          letterspacing: "0px",
                          lineHeight: "29px",
                        }}
                      >
                        {" "}
                        Stock up on sportswear and limited edition collections
                        on our <br /> awesome mid-season sale .
                      </span>
                    </p>
                  </div>
                </div>
                <div >
                  <div className="text-start">
                    <button class="px-5 py-3 bg-info border-info fs-6 text-white font-weight-bold h1  animate__animated  animate__bounceInUp " >
                      FIND OUT MORE
                    </button>
                    <button className="px-5 py-3 border border-light fs-6 bg-transparent text-white font-weight-bold h1 animate__animated  animate__bounceInUp  " style={{marginLeft : "10px"}}>
                      FIND OUT MORE
                    </button>

                  </div>
                  
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
            width={900}
            height={900}
          />

          <Carousel.Caption>
            <div className=" container mb-5">
              <div className=" row pb-5">
                <div className="text-center">
                  <div className="">
                    <h2 className=" mb-3 mt-3 animate__animated  animate__fadeInUpBig">
                      <span
                        className=" "
                        style={{
                          fontSize: "95px",
                          letterspacing: "-2px",
                          marginBottom: "6px",
                          lineHeight: "85px",
                        }}
                      >
                        Discover
                      </span>
                      <br/>

                      <span
                        className=" "
                        style={{
                          fontSize: "95px",
                          letterspacing: "-2px",
                          marginBottom: "6px",
                          lineHeight: "85px",
                        }}
                      >
                        newstore
                      </span>
                      
                    </h2>
                  </div>
                  <div>
                    <p className=" text-white animate__animated  animate__bounceInUp" >
                      <span
                        className=""
                        style={{
                          fontSize: "20px",
                          letterspacing: "0px",
                          lineHeight: "29px",
                        }}
                      >
                        {" "}
                        Stock up on sportswear and limited edition collections
                        on our <br /> awesome mid-season sale .
                      </span>
                    </p>
                  </div>
                </div>
                <div className="text-start">
                  <div>
                    <button class="px-5 py-3 bg-info border-info fs-6 text-white font-weight-bold h1  animate__animated  animate__bounceInUp">
                      FIND OUT MORE
                    </button>
                    <button className="px-5 py-3 border border-light fs-6 bg-transparent text-white font-weight-bold h1  animate__animated  animate__bounceInUp " style={{marginLeft : "10px"}}>
                      FIND OUT MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            width={900}
            height={900}
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className=" container mb-5">
              <div className=" row pb-5">
                <div className="text-center">
                  <div className="">
                    <h2 className=" mb-3 mt-3 animate__animated  animate__fadeInUpBig ">
                      <span
                        className=" "
                        style={{
                          fontSize: "95px",
                          letterspacing: "-2px",
                          marginBottom: "6px",
                          lineHeight: "85px",
                        }}
                      >
                        
                        Expect the
                      </span>
                    </h2><br/>
                    <h2 className=" mb-3 mt-3 animate__animated  animate__fadeInUpBig ">
                      <span
                        className=" "
                        style={{
                          fontSize: "95px",
                          letterspacing: "-2px",
                          marginBottom: "6px",
                          lineHeight: "85px",
                        }}
                      >
                        
                        unexpected.
                      </span>
                    </h2>



                  </div>
                  <div>
                    <p className="text-white animate__animated  animate__bounceInUp">
                      <span
                        style={{
                          fontSize: "20px",
                          letterspacing: "0px",
                          lineHeight: "29px",
                        }}
                      >
                        {" "}
                        Stock up on sportswear and limited edition collections
                        on our <br /> awesome mid-season sale .
                      </span>
                    </p>
                  </div>
                </div>
                <div className="text-start">
                  <div>
                    <button class="px-5 py-3 bg-info border-info fs-6 text-white font-weight-bold h1  animate__animated  animate__bounceInUp ">
                      FIND OUT MORE
                    </button>
                    <button className="px-5 py-3 border border-light fs-6 bg-transparent text-white font-weight-bold h1  animate__animated  animate__bounceInUp " style={{marginLeft : "10px"}}>
                      BUY THE THEME
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image4}
            width={900}
            height={900}
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className=" container mb-5">
              <div className="row pb-5">
                <div className="text-center">
                  <div className="">
                    <h2 className=" mb-3 mt-3   animate__animated  animate__fadeInUpBig">
                  
                      <span
                        className=" "
                        style={{
                          fontSize: "95px",
                          letterspacing: "-2px",
                          marginBottom: "6px",
                          lineHeight: "85px",
                        }}
                      >
                        The best.
                      </span>
                    </h2><br/>
                    <h2 className=" mb-3 mt-3  animate__animated  animate__fadeInUpBig">
                      <span
                        className=" "
                        style={{
                          fontSize: "95px",
                          letterspacing: "-2px",
                          marginBottom: "6px",
                          lineHeight: "85px",
                        }}
                      >
                       sportswear..
                      </span>
                    </h2>
                  </div>
                  <div>
                    <p className="text-white animate__animated  animate__bounceInUp">
                      <span
                        style={{
                          fontSize: "20px",
                          letterspacing: "0px",
                          lineHeight: "29px",
                        }}
                      >
                      
                        Stock up on sportswear and limited edition collections
                        on our <br /> awesome mid-season sale .
                      </span>
                    </p>
                  </div>
                </div>
                <div className="text-start">
                  <div className="mx-0 px-0">
                    <button class="px-5 py-3 bg-info border-info fs-6 text-white font-weight-bold h1  animate__animated  animate__bounceInUp">
                      FIND OUT MORE
                    </button>
                    <button className="px-5 py-3 border border-light fs-6 bg-transparent text-white font-weight-bold h1  animate__animated  animate__bounceInUp " style={{marginLeft : "10px"}}>
                      FIND OUT MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </>
  );
}

export default PortfolioBanner;