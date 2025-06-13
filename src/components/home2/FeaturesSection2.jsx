import { useState } from "react";
import { features } from "../../data/features"
import { HiChevronDown } from "react-icons/hi2";

const FeaturesSection2 = () => {
    const [ tabMoja, setTabMoja ] = useState(0)
  return (
    <div className="features-section-2">
             <div className="inner-row">
                        <div className="features-section-2-content">
                                    <div className="features-2-intro">
                                                <div className="feature-column">
                                                          <h3 className="intro" data-aos="zoom-down">Features</h3>
                                                         <h2 data-aos="zoom-in-right">What Can you Do with Erebus</h2>
                                                </div>

                                                <p data-aos="zoom-in-left">Unlock an all-in-one platform built for seamless collaboration, efficient task management, and effortless workforce oversight, so you can focus on what matters most: growing your business.</p>
                                    </div>

                                    <div className="feature-2-row">
                                               <div className="features-tabs">
                                                         { features.map(item => 
                                                                <div className={tabMoja === item.id ? "feature-tab-moja active": "feature-tab-moja" } key={item.id} onClick={() => setTabMoja(item.id)} >
                                                                         <div className="tab-header" data-aos="zoom-in-right">
                                                                                   <h3>{item.title}</h3>
                                                                                   <span><HiChevronDown /></span>
                                                                         </div>
                                                                          <div className="tab-description" data-aos="fade-in">
                                                                                   <div className="tab-description-inner">
                                                                                         <p>{item.description}</p>
                                                                                   </div>
                                                                          </div>
                                                              </div>
                                                         )}
                                               </div>
                                               <div className="feature-image-tabs" data-aos="zoom-in-left">
                                                          { features.map(item => 
                                                                 <div className={ tabMoja === item.id ? "feature-image-moja active" : "feature-image-moja"}>
                                                                         <img src={item.image} alt="" />
                                                                 </div>
                                                          )}
                                               </div>
                                    </div>
                        </div>
             </div>
    </div>
  )
}

export default FeaturesSection2