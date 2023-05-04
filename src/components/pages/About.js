import React from 'react';

export default function About() {
  return (
<div className="aboutMoi">
  <div className="row">
    <div className="col s4 m7">
      <div className="card">
        <div className="card-image">
          <img src={ require("../../images/about-me.jpeg") } alt='Password Generator' />
          <span className="card-title">About Me</span>
        </div>
        <div className="card-content">
          <p>
            I graduated from Bremen High School, where I won the superlative for wittiest, homecoming king, and a wrestling state championship.
            I attended Darton College and managed to achieve Academic All-American both years and the Warrior Award from the athletic dept. There I attained an associates degree in psychology.
            Life University granted me the opportunity to place fifth in the nation for the NAIA wrestling division and I graduated summa cumme laude for dual diplomas. I received a bachelors in cognitive psychology, an associates in co-active life coaching, and the Scholastic Award for student athletes.
          </p>
        </div>
        <div className="card-action">
          <a href="www.youtube.com">This is a link</a>
        </div>
      </div>
    </div>
</div>
</div>
  );
  }

