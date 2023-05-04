import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        <h4>&copy; FullStack WildWolf {new Date().getFullYear()} <p>&copy; WebWizardWarrior 1990</p></h4>
      </div>
    </footer>
  );
};

export default Footer;
