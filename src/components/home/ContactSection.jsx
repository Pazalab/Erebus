import { BsEnvelope } from "react-icons/bs";
import { MdLocalPhone } from "react-icons/md";

const ContactSection = () => {
  return (
    <div className="contact-section">
             <div className="inner-row">
                       <div className="contact-section-content">
                               <div className="contact-intro">
                                         <h2 data-aos="zoom-in-down">Get in Touch, We’re Happy to Help</h2>
                                         <p data-aos="zoom-in">Reach out to us for any inquiries and support.</p>

                                         <div className="contact-options" >
                                                   <div className="option-block" data-aos="zoom-in-right">
                                                           <span><BsEnvelope /></span>
                                                            <p>support@erebuserm.com</p>
                                                   </div>
                                                   <div className="option-block" data-aos="zoom-in-left">
                                                            <span><MdLocalPhone /></span>
                                                            <p>+1 (200) 768 555</p>
                                                   </div>
                                         </div>
                               </div>

                               <div className="contact-form" data-aos="zoom-in-up">
                                           <h3>Your Details</h3>
                                          <form>
                                                    <div className="form-row-grid">
                                                               <div className="form-row-column">
                                                                          <label htmlFor="name">Full name</label>
                                                                          <input type="text" className="form-control" placeholder="Your name" />
                                                               </div>
                                                               <div className="form-row-column">
                                                                          <label htmlFor="email">Email address</label>
                                                                          <input type="email" className="form-control" placeholder="Your email" />
                                                               </div>
                                                    </div>
                                                     <div className="form-row-grid">
                                                               <div className="form-row-column">
                                                                          <label htmlFor="company">Organization</label>
                                                                          <input type="text" className="form-control" placeholder="Your company" />
                                                               </div>
                                                               <div className="form-row-column">
                                                                          <label htmlFor="company size">Organization Size</label>
                                                                         <select className="form-control">
                                                                                  <option value="">Organization Size</option>
                                                                                  <option value="">Less than 100 employees</option>
                                                                                  <option value="">100 - 999 employees</option>
                                                                                  <option value="">1000 - 1999 employees</option>
                                                                                  <option value="">2000+ employees</option>
                                                                         </select>
                                                               </div>
                                                    </div>
                                                     <div className="form-row-grid">
                                                               <div className="form-row-column">
                                                                          <label htmlFor="name">Phone number</label>
                                                                          <input type="text" className="form-control" placeholder="Your phone number" />
                                                               </div>
                                                               <div className="form-row-column">
                                                                          <label htmlFor="subject">How can we help you?</label>
                                                                          <select className="form-control">
                                                                                  <option value="">General enquiry</option>
                                                                                  <option value="">Request a demo</option>
                                                                                  <option value="">Purchase Erebus software</option>                                                         
                                                                                  <option value="">Other</option>
                                                                         </select>
                                                               </div>
                                                    </div>
                                                    <div className="form-row">
                                                              <label htmlFor="message">What would you like help with?</label>
                                                             <textarea className="text-control" placeholder="Type your message..."></textarea>
                                                    </div>
                                                    <div className="form-btn">
                                                               <p>By submiting you agree to our <span>Privacy Policy</span></p>
                                                              <button>Submit Message</button>
                                                    </div>
                                          </form>
                               </div>
                       </div>
             </div>
    </div>
  )
}

export default ContactSection