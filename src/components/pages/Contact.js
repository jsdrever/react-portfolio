import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <h3 class="contact" id="contact-me">Contact Me</h3>
      <section id="contact">
  <h2 className="text-center">Contact Me</h2>
  <form>
    <ul>
      <li>
        <label className="text-right" htmlFor="name">Name:</label>
        <input type="text" id="name" name="user-name" />
      </li>
      <li>
        <label className="text-right" htmlFor="email">Email:</label>
        <input type="text" id="email" name="user-email" />
      </li>
    </ul>
    <br />
    <label className="text-right" htmlFor="name">A short description of desired services:</label>
    <input type="text" id="quantity" name="quantity" />
    <br />
    <div className="text-center">
      <button type="submit">SEND</button>
    </div>
  </form>
</section>

            <p>&copy; WebWizardWarrior 1990</p>
            <a href="https://youtu.be/6WTdTwcmxyo">XXX-867-5309</a>
          <br></br>
            <a href="https://www.warnerbros.com/movies/youve-got-mail">jsdrever09@gmail.com</a>
            <br></br>
            <a href="https://github.com/jsdrever">Github</a>
            <a href="https://www.linkedin.com/in/jeff-drever-4022aa86/">LinkedIn</a>
            <p>(┛ಠ_ಠ)┛彡┻━┻</p>
    </div>
  );
}
