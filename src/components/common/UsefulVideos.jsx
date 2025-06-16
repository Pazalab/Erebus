import { HiArrowLongRight } from "react-icons/hi2";

const UsefulVideos = () => {
  return (
    <div className="useful-videos">
              <div className="useful-videos-intro">
                       <h2>Quick Guide Videos</h2>
                       <p>Get up to speed in no time. These short, helpful videos walk you through the key features of Erebus, so you can navigate the platform, manage your workflow, and unlock its full potential with ease.</p>
              </div>
              <div className="useful-videos-row">
                        <div className="video-moja">
                                 <div className="video-moja-texts">
                                          <h2>How to <span><HiArrowLongRight /></span></h2>
                                          <h3>submit a leave request</h3>
                                 </div>
                        </div>
              </div>
    </div>
  )
}

export default UsefulVideos