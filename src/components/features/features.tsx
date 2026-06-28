import databaseIcon from '../../assets/icons/database.svg';
import filterIcon from '../../assets/icons/filter.svg';
import fingerprintIcon from '../../assets/icons/fingerprint.svg';
import lockIcon from '../../assets/icons/lock.svg';
import okIcon from '../../assets/icons/ok.svg';
import shieldIcon from '../../assets/icons/shield.svg';
import trashIcon from '../../assets/icons/trash.svg';
import usersIcon from '../../assets/icons/users.svg';
import { Container } from '../../shared/ui/container/container';

import styles from './features.module.css';

const users = [
  { name: 'Sarah Chen', email: 'sarah@email.com', role: 'Owner' },
  { name: 'Alex Morgan', email: 'alex@email.com', role: 'Editor' },
  { name: 'Jamie Lee', email: 'jamie@email.com', role: 'View only' },
];

export function Features() {
  return (
    <section className={styles.features} id="features">
      <Container>
        <div className={styles.head}>
          <h2>Everything you need to manage your crypto portfolio</h2>
          <p>
            Track balances, performance, shared assets, and portfolio history without
            switching between apps.
          </p>
        </div>

        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.connectCard}`}>
            <div className={styles.cardHeader}>
              <h3>Connect exchanges and wallets</h3>

              <span className={styles.badge}>
                <img src={okIcon} alt="" />
                Dust Filter Active
              </span>
            </div>

            <p>
              Link Bitget, Binance, Ethereum, and Solana or add assets manually. Portfold
              brings everything together in one portfolio.
            </p>

            <div className={styles.connectContent}>
              <div className={styles.inputs}>
                <span>Bitget exchange</span>
                <span>Solana Wallet</span>
                <span>Manual asset</span>
              </div>

              <div className={styles.filter}>
                <img src={filterIcon} alt="" />
                <span>FILTER</span>
              </div>

              <div className={styles.portfolioBox}>
                <img src={databaseIcon} alt="" />
                <strong>Your portfolio</strong>
                <span>Clean Data Only</span>
              </div>
            </div>
          </article>

          <article className={`${styles.card} ${styles.backupCard}`}>
            <img src={fingerprintIcon} alt="" className={styles.bigIcon} />

            <h3>Encrypted portfolio backup</h3>

            <p>
              Your portfolio data is encrypted before it is backed up, helping you restore
              access if you change or lose your device.
            </p>

            <span className={styles.smallBadge}>
              <img src={lockIcon} alt="" />
              Encrypted before backup
            </span>
          </article>

          <article className={`${styles.card} ${styles.shareCard}`}>
            <h3>
              <img src={usersIcon} alt="" />
              Share your portfolio safely
            </h3>

            <p>
              Give a trusted person access to selected portfolio without sharing passwords.
            </p>

            <div className={styles.userList}>
              {users.map((user) => (
                <div className={styles.userRow} key={user.email}>
                  <span className={styles.avatar} />

                  <div>
                    <strong>{user.name}</strong>
                    <small>{user.email}</small>
                  </div>

                  <em>{user.role}</em>
                </div>
              ))}
            </div>
          </article>

          <article className={`${styles.card} ${styles.historyCard}`}>
            <h3>Keep your portfolio history</h3>

            <p>
              Disconnect an exchange or wallet without losing the portfolio data that was
              already saved.
            </p>

            <div className={styles.historyBox}>
              <div className={styles.trashIcon}>
                <img src={trashIcon} alt="" />
              </div>

              <div>
                <strong>Disconnected account</strong>
                <span>Hidden 2 days ago</span>
              </div>

              <em>History saved</em>

              <p className={styles.savedText}>
                <img src={shieldIcon} alt="" />
                Previously saved balances remain in your portfolio history after the
                account is disconnected.
              </p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}