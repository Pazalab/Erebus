import { Link } from "react-scroll"
import { features } from "../../data/features"

const FeaturesSection = () => {
  return (
    <div className="features-section">
               <div className="inner-row">
                         <div className="features-section-content">
                                     <div className="features-intro">
                                                <h3 data-aos="zoom-in-down">Features</h3>
                                                <h2 data-aos="zoom-in">What Can you Do with Erebus</h2>
                                                <p data-aos='zoom-in'>Unlock an all-in-one platform built for seamless collaboration, efficient task management, and effortless workforce oversight—so you can focus on what matters most: growing your business.</p>
                                     </div>

                                     <div className="features-list">
                                                 { features.map(item => 
                                                       <div className="feature-moja" key={item.id}>
                                                                 <div className="feature-image" data-aos="zoom-in-right">
                                                                          <img src={item.image} alt="" />
                                                                 </div>
                                                                 <div className="feature-texts" data-aos="zoom-in-left">
                                                                            <h3>{item.title}</h3>
                                                                            <p>{item.description}</p>
                                                                  </div>
                                                      </div>
                                                 )}
                                     </div>

                                     <Link to="contact" smooth={true} data-aos="zoom-in-up" className="request-btn" >Request a Demo</Link>
                         </div>
               </div>
    </div>
  )
}

export default FeaturesSection