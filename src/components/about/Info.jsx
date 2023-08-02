import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box n">
            <i className="bx bx-award about_icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle"> 3 Years</span>
        </div>
        <div className="about__box">
            <i className="bx bx-briefcase-alt about_icon"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">45+ Projects</span>
        </div>
        <div className="about__box">
            <i className="bx bx-trophy about_icon"></i>
            <h3 className="about__title">Achievements</h3>
            <span className="about__subtitle">7 Certifications</span>
        </div>
    </div>
  )
}

export default Info