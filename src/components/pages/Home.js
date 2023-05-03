import React from 'react';

export default function Home() {
  return (
    <div>
      <h1>Work for now</h1>
      <div>
  <div id="work-me" className="row">
    <div className="work-header">Magnus Operandi</div>
    <div className="col s4 m6">
      <div className="card">
        <div className="card-image">
          <img src="images/stoxx.png" />
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
    <div className="col s4 m6">
      <div className="card">
        <div className="card-image">
          <img src="images/quiz.jpeg" />
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
    </div>
    {/* tic tac toe */}
    <div className="col s4 m6">
      <div className="card ">
        <div className="card-image">
          <img src="./images/night-tiger.png" />
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
  <div className="row">
    <div className="col s4 m6">
      <div className="card">
        <div className="card-image">
          <img src="images/schedule.jpeg" />
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
          <img src="images/passwordGen.jpeg" />
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
    <div className="col s4 m6">
      <div className="card">
        <div className="card-image">
          <img src="images/rrr.jpeg" />
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
    <div className="col s6 m6">
      <div className="card">
        <div className="card-image">
          <img src="images/skySunsetter copy 2.jpeg" />
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
</div>

    </div>
  );
}
