import appStoreIcon from '../../assets/icons/Applestore.svg';
import googlePlayIcon from '../../assets/icons/Googleplay.svg';
import logoIcon from '../../assets/icons/logo.svg';

import styles from './header.module.css';

type HeaderProps = {
  showDownloadIcons: boolean;
};

export function Header({ showDownloadIcons }: HeaderProps) {
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

        {showDownloadIcons && (
          <div className={styles.downloadIcons}>
            <a href="#" aria-label="Download Portfold from Google Play">
              <img src={googlePlayIcon} alt="" />
            </a>

            <a href="#" aria-label="Download Portfold from the App Store">
              <img src={appStoreIcon} alt="" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
