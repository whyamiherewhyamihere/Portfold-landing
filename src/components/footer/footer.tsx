import logoIcon from '../../assets/icons/logo.svg';
import { Container } from '../../shared/ui/container/container';
import { Link } from 'react-router-dom';

import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a className={styles.logo} href="/">
              <img src={logoIcon} alt="" />
              <span>Portfold</span>
            </a>

            <p>
              Manage exchanges, wallets, and manually added crypto assets in one secure
              app.
            </p>

            <span className={styles.badge}>Made for Investors</span>
          </div>

          <nav className={styles.column}>
            <h3>Product</h3>
            <a href="#features">Features</a>
            <a href="#security">Security</a>
            <a href="#connections">Connections</a>
            <a href="#faq">FAQ</a>
          </nav>

          <nav className={styles.column}>
            <h3>Legal</h3>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Portfold. All rights reserved.</p> 
        </div>
      </Container>
    </footer>
  );
}

