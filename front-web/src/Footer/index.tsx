import './styles.css';

import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LinkeidnIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="http://www.youtube.com/c/DevSuperior" target="_new">
          <YouTubeIcon />
        </a>
        <a href="http://www.linkedin.com/school/devsuperior/" target="_new">
          <LinkeidnIcon />
        </a>
        <a href="http://www.instagram.com/devsuperior.ig/?hl=pt" target="_new">
          <InstagramIcon />
        </a>
      </div>
      
    </footer>    
  );
}

export default Footer;
