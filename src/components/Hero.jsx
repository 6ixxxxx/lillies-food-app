import heroimg from "../assets/hero-img.jpg";
import google from "../assets/google.svg";
import loader from "../assets/loader.svg";


function Hero(props) {
     return(
          <div className="hero">
               <div>
                    <h1>Order <span>food</span> anytime, <br/> anywhere. </h1>
                    <img  className="hero-img-1" src={heroimg} alt="" />
                    <p className="ad-word">Browse from our list of specials to place your order and have food <br /> delivered to you, in no time. Affordable, tasty and fast. </p>
                    <div className="btn-container">
                         <div>
                         <i className="ri-apple-fill apple"></i>
                              <div>
                                   <p>GET ON</p>
                                   <p>App Store</p>
                              </div>
                         </div>
                         <div>
                              <img src={google} alt="" />
                              <div>
                                   <p>Download from</p>
                                   <p>Google Play</p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="hero-img-container">
                    <img onLoad={props.handleLoad} className="hero-img" src={heroimg} alt="" />
                    <div className="hero-loader" >
                         <img  src={loader} alt="" />    
                    </div>
               </div>
          </div>
     )
}

export default Hero;