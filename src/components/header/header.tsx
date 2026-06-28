import logoIcon from '../../assets/icons/logo.svg';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.logo} href="/">
          <img src={logoIcon} alt="" className={styles.logoIcon} />
          <span>Portfold</span>
        </a>

        <nav className={styles.nav}>
          <a href="#features">Features</a>
          <a href="#security">Security</a>
          <a href="#connections">Connections</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a className={styles.button} href="#download">
          Download
        </a>
      </div>
    </header>
  );
}