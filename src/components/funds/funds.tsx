import arrowIcon from '../../assets/icons/arrow.svg';
import lockIcon from '../../assets/icons/lock.svg';
import shieldIcon from '../../assets/icons/shield.svg';
import { Container } from '../../shared/ui/container/container';

import styles from './funds.module.css';

const cards = [
  {
    icon: lockIcon,
    title: 'Biometric access',
    text: 'Open Portfold with Face ID or your fingerprint.',
  },
  {
    icon: shieldIcon,
    title: 'Encrypted data',
    text: 'Sensitive portfolio data is encrypted on your device.',
  },
  {
    icon: arrowIcon,
    title: 'No access to your funds',
    text: 'Portfold cannot trade or transfer your crypto.',
  },
];

export function Funds() {
  return (
    <section className={styles.funds} id="security">
      <Container>
        <div className={styles.head}>
          <div className={styles.mainIcon}>
            <img src={shieldIcon} alt="" />
          </div>

          <h2>Your funds stay under your control</h2>

          <p>
            Portfold only reads the information needed to display your portfolio. It
            cannot trade, transfer, or withdraw your crypto. Sensitive data is encrypted,
            and access to the app can be protected with biometrics.
          </p>
        </div>

        <div className={styles.grid}>
          {cards.map((card) => (
            <article className={styles.card} key={card.title}>
              <img src={card.icon} alt="" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
