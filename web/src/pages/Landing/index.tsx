import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/global.css';
import '../../styles/pages/landing.css';
import logoImg from '../../images/Logo.svg';
import {FiArrowRight} from 'react-icons/fi'

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>

          <p>Visite orfanatos e mude o dia de muitas crianças.</p>

          <div className="location">
            <strong>São Lourenço da Mata</strong>
            <span>Pernambuco</span>
          </div>

          <Link to="/orfanatos" className="enter-app"> <FiArrowRight size={26} color="rgba(0,0,0,0.6)" /> </Link>
        </main>
      </div>
    </div>
  );
}

export default Landing;
