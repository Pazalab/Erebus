import { faqs } from "../../data/faqs"
import FaqMoja from "./FaqMoja"

const FaqSection = () => {
  return (
    <div className="faq-section">
              <div className="faq-section-content">
                         <div className="faq-intro" data-aos="zoom-in-right">
                                  <h3 className="intro">FAQs</h3>
                                  <h2>Frequently Asked <span>Questions</span></h2>
                                  <p>Find clear answers to the most common question about our platform, features, and integrations. If you need more help, feel free to reach out to our support team.</p>
                         </div>
                         <div className="faqs-group">
                                  { faqs.map(item => <FaqMoja key={item.id} data={item} />)}
                         </div>
              </div>
    </div>
  )
}

export default FaqSection