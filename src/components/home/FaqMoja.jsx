import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi2";

const FaqMoja = ({ data }) => {
    const [ active, setActive ] = useState(false)
  return (
    <div className="faq-moja" data-aos="zoom-in-up">
           <div className={ active ? "faq-question active" : "faq-question"} onClick={() => setActive(!active)}>
                      <h3>{data.question}</h3>
                      { active ? <span><HiMinus/></span> : <span><HiPlus /></span>}
            </div>
           <div className={ active ? "faq-answer active" : "faq-answer"}>
                      <div className="faq-answer-group">
                                 <p>{ data.answer }</p>
                        </div>
           </div>    
</div>
  )
}

export default FaqMoja