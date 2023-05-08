import React from 'react';

export default function Home() {
  return (
    <div>
      <h1>Portfolio</h1>
      
{/* stoxx */}
<div id="work-me" className="row">
  <div className="work-header">Magnus Operandi</div>
  <div className="col s6 m6">
    <div className="card">
      <div className="card-image">
      <img src={ require("../../images/stoxx.png")} alt='Stocks Inquirer'/>
        <span className="card-title">StoxX</span>
      </div>
      <div className="card-content aboutmoi">
        <p id="pepe">This app uses a pair of API's to check the values of stocks and cryptocurrencies.</p>
      </div>
      <div id="footocard" className="card-action">
        <a href="https://jsdrever.github.io/stocksproject/">check your stocks</a>
      </div>
    </div>
  </div>
  {/* quiz app */}
  <div className="col s6 m6">
    <div className="card">
      <div className="card-image">
      <img src={ require("../../images/quiz.jpeg")} alt='Quiz App'/>
        <span className="card-title">Quiz</span>
      </div>
      <div className="card-content aboutmoi">
        <p id="pepe">This is a simple quiz app. It has a timer and a high scores list so you can
          challenge your
          friends and see who can rack up the best score!</p>
      </div>
      <div id="footocard" className="card-action">
        <a href="https://jsdrever.github.io/gluttonous/">Take my quiz</a>
      </div>
    </div>
    {/* cage arcade */}
    <div className="col s4 m6">
      <div className="card">
        <div className="card-image">
        <img src={ require("../../images/cageArcade.png")} alt='Quiz App'/>
          <span className="card-title">Cage Arcade</span>
        </div>
        <div className="card-content aboutmoi">
          <p id="pepe">This project was brought to you by the creative minds of Seriously Sticky Student Solutions INC in collaboration with TableFlip Coders ©(┛ಠ_ಠ)┛彡┻━┻  Jeff Drever, Danielle Sison, Justin Crowson, Josh Romani, Vageli Stathatos, George Jordan, Corey Calbreath.</p>
        </div>
        <div id="footocard" className="card-action">
          <a href="https://nic-tac-toe.herokuapp.com/games">Play some games with Mr. Cage</a>
        </div>
      </div>
    </div>
    {/* tic tac toe */}
    <div className="row">
      <div className="col s6 m6">
        <div className="card ">
          <div className="card-image">
          <img src={ require("../../images/night-tiger.png") } alt='tic tac toe' />
            <span className="card-title">Tic Tac Toe</span>
          </div>
          <div className="card-content aboutmoi">
            <p id="pepe">Tic Tac Toe: Catch a tiger by his toe, my mother said to let it go, it ate my
              father, sister,
              and
              baby bro. Now I  know, the evil of a tiger toe.</p>
          </div>
          <div id="footocard" className="card-action">
            <a href="https://jsdrever.github.io/TicyTacyToe/">Go ahead and play</a>
          </div>
        </div>
      </div>
    </div>
    {/* scheduler app */}
    <div className="col s6 m6">
      <div className="card">
        <div className="card-image">
        <img src={ require( "../../images/schedule.jpeg") } alt='Daily Planner App'/>
          <span id="blackdog" className="card-title">Scheduler App</span>
        </div>
        <div className="card-content aboutmoi">
          <p id="pepe">This app is a daily planner. It automatically opens on the current day and displays
            current
            time.
            The hours are divided by the time of the day indicating past, present, and future in grey,
            green, and red respectively. Type in what you have to do at the time you desire and save it.
          </p>
        </div>
        <div id="footocard" className="card-action">
          <a href="https://jsdrever.github.io/schedule-my-dr-appt/">Use my Daily Planner</a>
        </div>
      </div>
    </div>
    {/* password generator */}
    <div className="col s6 m6">
      <div className="card">
        <div className="card-image">
        <img src={ require( "../../images/passwordGen.jpeg") } alt='Password Generator'/>
          <span className="card-title">Generate a Password</span>
        </div>
        <div className="card-content aboutmoi">
          <p id="pepe">A password generator that requires input using prompts to indicate whether or not
            to include
            uppercase, lowercase, symbols, or numbers. Feel free to use this to generate some passwords
            for
            your most trusted and secured sites. I am not saving them into a local storage on my end so
            feel
            free to use this for your banking apps.</p>
        </div>
        <div id="footocard" className="card-action">
          <a href="https://jsdrever.github.io/wrath/">Password time</a>
        </div>
      </div>
    </div>
  </div>
  {/* round rock replacements */}
  <div className="row">
    <div className="col s6 m6">
      <div className="card">
        <div className="card-image">
        <img src={ require ("../../images/rrr.jpeg") } alt='Basic Website'/>
          <span className="card-title" />
        </div>
        <div className="card-content aboutmoi">
          <p id="pepe">Here is an example of a website for a small business. This page is informative and
            simple. A
            family owned buisness would benefit from the exposure a website can offer. It allows users
            to inform themselves of your product and companies information and supplies the ability to
            contact all within this page. </p>
        </div>
        <div id="footocard" className="card-action ">
          <a href="https://jsdrever.github.io/Project-Uno/">Check out the webpage</a>
        </div>
      </div>
    </div>
    {/* weather app */}
    <div className="col s6 m6">
      <div className="card">
        <div className="card-image">
        <img src={ require ("../../images/skySunsetter copy 2.jpeg") } alt='Weather Prediction App' />
          <span className="card-title" />
        </div>
        <div className="card-content aboutmoi">
          <p id="pepe">Using api's generously allowed by the fine people at OpenWeather you can use this web app to check the weather conditions in whatever city you desire to search. Desire and type...* You have to type in a city ya know.</p>
        </div>
        <div id="footocard" className="card-action ">
          <a href="https://jsdrever.github.io/weather-boi/">Check the Weather</a>
        </div>
      </div>
    </div>
  </div>
  {/* read me generator */}
  <div className="row">
    <div className="col s6 m7">
      <div className="card">
        <div className="card-image">
          <img src={ require ("../../images/Screenshot 2023-05-06 at 3.14.34 PM.png")} alt='readme' />
          <span className="card-title">ReadMe</span>
        </div>
        <div className="card-content">
          <p>This app produces a professional readme.md throught a series of terminal prompts.</p>
        </div>
        <div className="card-action">
          <a href="https://jsdrever.github.io/nodeworthyChallenge/">Generate a prefab ReadMe</a>
        </div>
      </div>
    </div>
    {/* note taker */}
    <div className="col s6 m7">
      <div className="card">
        <div className="card-image">
        <img src={ require ("../../images/Screenshot 2023-05-07 at 12.44.56 PM.png")} alt='readme' />
          <span className="card-title">Take a Note</span>
        </div>
        <div className="card-content">
          <p>This app allows for the user to take and save notes.</p>
        </div>
        <div className="card-action">
          <a href="https://jsdrever.github.io/notetakerHeartbreaker/">Oooohhh write that down</a>
        </div>
      </div>
    </div>
  </div>
  {/* sql employee tracker database */}
  <div className="row">
    <div className="col s6 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Sql Database </span>
          <p>This application is a simple sql database "employee" tracker using tables.</p>
        </div>
        <div className="card-action">
          <a href="https://jsdrever.github.io/TrackerJackerXII/">Check it out</a>
        </div>
      </div>
    </div>
    {/* ORM */}
    <div className="col s6 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Object Relational Mapping </span>
          <p>ORM using sequilize, express, mysql and other components to track and record data for sales.</p>
        </div>
        <div className="card-action">
          <a href="https://jsdrever.github.io/objectRelationalMapping4Commerce/">Check it out</a>
        </div>
      </div>
    </div>
    {/* mvc tech blog */}
    <div className="col s6 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title"> Model View Controller Tech Blog </span>
          <p>This is a tech blog. Users can log into an account (passwords will be encrypted and passwords will be hashed/salted) where they can post a small summary of information they've gained in their journeys through the tech world.</p>
        </div>
        <div className="card-action">
          <a href="https://jsdrever.github.io/modelviewcontrolAtechblog/">Check it out</a>
        </div>
      </div>
    </div>
    {/* logo generator */}
    <div className="col s6 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">SVG Logo Generator</span>
          <p><svg version="1.1" width={300} height={200} xmlns="http://www.w3.org/2000/svg"><circle cx={150} cy={100} r={80} fill="black" /><text x={150} y={125} fontSize={60} textAnchor="middle" fill="White">J$D</text></svg></p>
        </div>
        <div className="card-action">
          <a href="https://jsdrever.github.io/svgforme/">Make a Logo</a>
        </div>
      </div>
    </div>
    {/* regex tips/cheatsheet */}
    <div className="col s6 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Regex</span>
          <p>Some regex tips/cheatsheet </p>
        </div>
        <div className="card-action">
          <a href="https://gist.github.com/jsdrever/03d99ad67fe42bde8d06d1d738a11953#Anchors">Study Buddy</a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
