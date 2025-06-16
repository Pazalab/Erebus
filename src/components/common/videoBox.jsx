import { CgClose } from "react-icons/cg"
const VideoBox = ({ url, modalActive, func }) => {
  return (
        <div  className={ modalActive ? 'solution-video active' : 'solution-video'}>
                 <span className="video-close-btn" onClick={()=> func(false)}><CgClose /></span>
                 <div className="video-body">
                            <iframe src={modalActive ? url : ""} allow="autoplay" allowFullScreen ></iframe>
                 </div>
        </div>
  )
}

export default VideoBox