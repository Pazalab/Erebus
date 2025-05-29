import React from 'react'

const SolutionVid = ({ modalactive }) => {
  
  return (
    <div className='solution-video'>
             <div className="video-body">
                      <iframe  width="560" height="315" src={modalactive ? "https://www.youtube.com/embed/W4Aly01hxqo?si=ems_v9dp5UWY96-u?autoplay=0&controls=0&rel=0&loop=1&modestbranding=1&showinfo=0" : "" } title="brand video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
             </div>
    </div>
  )
}

export default SolutionVid