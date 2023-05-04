import React from 'react';

export default function About() {
  return (
<div className="aboutMoi">
          <h3 className="card-title">About Me</h3>
  <div className="row">
    <div className="col s4 m7">
      <div className="card">
        <div className="card-image">
          <img src={ require("../../images/about-me.jpeg") } alt='Password Generator' />
        </div>
        <div className="card-content">
          <p>
            I graduated from Bremen High School, where I won the superlative for wittiest, homecoming king, and a wrestling state championship.
            I attended Darton College and managed to achieve Academic All-American both years and the Warrior Award from the athletic dept. There I attained an associates degree in psychology.
            Life University granted me the opportunity to place fifth in the nation for the NAIA wrestling division and I graduated summa cumme laude for dual diplomas. I received a bachelors in cognitive psychology, an associates in co-active life coaching, and the Scholastic Award for student athletes.
          </p>
        </div>
      </div>
    </div>
</div>
<div className="row">
  <div className="col s12 m7">
    <div className="card">
      <div className="card-image">
        <img src={ require("../../images/dualdiploma.jpeg") } alt='dual diploma'/>
      </div>
    </div>
  </div>
</div>
<div id="work-me" className="row">
    <div className="work-header"> <h5> Magnus Alumni </h5></div>
    <div className="col s4 m6">
      <div className="card">
        <div className="card-image">
          <img src={ require("../../images/blue devil.webp")} alt='Bremen High School'/>
        </div>
      </div>
    </div>
    <div className="col s4 m6">
      <div className="card">
        <div className="card-image">
          <img src={ require("../../images/darton state college.png")} alt='Darton College'/>
        </div>
      </div>
    </div>
    {/* tic tac toe */}
    <div className="col s4 m6">
      <div className="card ">
        <div className="card-image">
          <img src={ require("../../images/lifeu.png") } alt='Life University' />
      </div>
    </div>
  </div>

    <div className="col s4 m6">
      <div className="card ">
        <div className="card-image">
          <img src={ require("../../images/utexas.png") } alt='University of Texas' />
      </div>
    </div>
  </div>
  </div>
</div>
  );
  }

