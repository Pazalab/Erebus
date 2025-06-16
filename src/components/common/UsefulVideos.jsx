import { HiArrowLongRight } from "react-icons/hi2";
import vacation from "../../assets/vacation.png"
import timesheet from "../../assets/business.png"
import announcement from "../../assets/announcement.png"
import { RiPlayLargeFill } from "react-icons/ri";
import { useState } from "react";
import VideoBox from "./videoBox";

const UsefulVideos = () => {
   const announcement_vid_url = "https://res.cloudinary.com/dq6subhaj/video/upload/v1750103604/Erebus_uses_System_Announcements_t7eecy.mp4";
   const timesheet_vid_url = "https://res.cloudinary.com/dq6subhaj/video/upload/v1750103605/Erebus_create_New_Timesheet_For_Regular_Hours_rinhgy.mp4";
   const leave_vid_url = 'https://res.cloudinary.com/dq6subhaj/video/upload/v1750103605/Erebus_Streamlined_Leave_Request_Submission_ukp4se.mp4'
   const [ active, setActive ] = useState(false);
  const [ activeUrl, setActiveUrl ] = useState("")

  const openVideo = (url) => {
         setActive(true);
         setActiveUrl(url)
  }
  return (
    <div className="useful-videos">
              <div className="useful-videos-intro">
                       <h2>Quick Guide Videos</h2>
                       <p>Get up to speed in no time. These short, helpful videos walk you through the key features of Erebus, so you can navigate the platform, manage your workflow, and unlock its full potential with ease.</p>
              </div>
              { active && <VideoBox url={activeUrl} modalActive={active} func={setActive} />}
              <div className="useful-videos-row">
                        <div className="video-moja">
                                  <img src={vacation} alt="" />
                                 <div className="video-moja-texts">
                                          <h2>How to <span><HiArrowLongRight /></span></h2>
                                          <h3>submit a leave request</h3>
                                 </div>
                                 <div className="overlay" onClick={() => openVideo(leave_vid_url)}>
                                           <span><RiPlayLargeFill /></span>
                                 </div>
                        </div>
                        <div className="video-moja">
                                  <img src={timesheet} alt="" />
                                 <div className="video-moja-texts">
                                          <h2>How to <span><HiArrowLongRight /></span></h2>
                                          <h3>create a new timesheet</h3>
                                 </div>

                                 <div className="overlay" onClick={() => openVideo(timesheet_vid_url)}>
                                           <span><RiPlayLargeFill /></span>
                                 </div>
                        </div>
                        <div className="video-moja">
                                  <img src={announcement} alt="" />
                                 <div className="video-moja-texts">
                                          <h2>How to <span><HiArrowLongRight /></span></h2>
                                          <h3>navigate app announcements</h3>
                                 </div>
                                  <div className="overlay" onClick={() => openVideo(announcement_vid_url)}>
                                           <span><RiPlayLargeFill /></span>
                                 </div>
                        </div>
              </div>
    </div>
  )
}

export default UsefulVideos