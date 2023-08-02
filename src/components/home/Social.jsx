import React from "react";

export const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil-instagram"></i>
      </a>
      <a
        href="https://dribble.com"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil-linkedin-alt"></i>
      </a>
      <a href="http://github.com" className="home__social-icon" target="_blank">
        <i className="uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
