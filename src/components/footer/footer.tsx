import githubIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import logoIcon from '../../assets/icons/logo.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import { Container } from '../../shared/ui/container/container';

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
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Portfold. All rights reserved.</p>

          <div className={styles.socials}>
            <a href="/" aria-label="Twitter">
              <img src={twitterIcon} alt="" />
            </a>
            <a href="/" aria-label="GitHub">
              <img src={githubIcon} alt="" />
            </a>
            <a href="/" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}