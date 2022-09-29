import React from 'react';
import './style.css';
import {Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function SocialIcons() {
  return (
         <Col xl={12} className="social-icons">
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="https://www.facebook.com/dario.bronders/">
          <FontAwesomeIcon className="fb" icon={faFacebook} />
          </a>
          <a href="https://github.com/darjow">
          <FontAwesomeIcon className="git" icon={faGithub} />
          </a>
          <a href="https://www.instagram.com/dariobronders/">
          <FontAwesomeIcon className="insta" icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/dario-bronders-48485823a/">
          <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
          </a>
         </Col>
  );
}
