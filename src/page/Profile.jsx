
import "../styles/profile.css";
import "../styles/cart-modal.css";
import me from "../assets/me.jpeg";
import react from "../assets/react.svg";
import sass from "../assets/sass.svg";
import javascript from "../assets/javascript.svg";


function Profile(props) {
     return (
          <div className={`profile-2 ${props.activeModal.state && props.activeModal.element== "profile"  ? "show-profile" : "" }`}>
               <div className='cart-modal-details'>
                    <img className='cart-modal-img' src={me} alt="my image" />
                    <h3>Onyenwe Francis</h3>
                    <p className="profile-info">Hey there, I built this Food application to properly master the React javascript framework and also to showcase my skill as a frontend developer. I hope you have a great experience as you interact with it ! .</p>
                    <div className='cart-modal-info'>  
                         <div className="profile-skill-img-container"><img className="skill-img" src={sass} alt="" /></div>
                         <div className="profile-skill-img-container"><img className="skill-img" src={react} alt="" /></div>
                         <div className="profile-skill-img-container"><img className="js-skill-img" src={javascript} alt="" /></div>
                    </div>
               </div>
          </div>
     )
}

export default Profile;