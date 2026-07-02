import areaChart from '../../assets/images/AreaChart.png';
import phoneIcon from '../../assets/icons/phone_icon.svg';
import { Container } from '../../shared/ui/container/container';

import styles from './hero.module.css';

const assets = [
  { name: 'BTC', value: '35%' },
  { name: 'ETH', value: '25%' },
  { name: 'SOL', value: '20%' },
];

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.content}>
         <h1 className={styles.title}>
  <span>Manage all your</span>
  <span>crypto assets</span>
  <span>
    in <span className={styles.greenAccent}>one secure app</span>
  </span>
</h1>

          <p className={styles.text}>
            Connect your exchanges and wallets, add assets manually, and see your
            entire crypto portfolio in one place. Portfold can track your
            balances, but it cannot trade or withdraw your funds.
          </p>

          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#download">
              <img src={phoneIcon} alt="" />
              Download for Android
            </a>

            <a
              className={styles.secondaryButton}
              href="#how-it-works"
            >
              See how Portfold works
            </a>
          </div>
        </div>

        <div className={styles.portfolioCard}>
          <div className={styles.cardTop}>
            <p className={styles.cardLabel}>Total Portfolio</p>
            <span className={styles.percent}>+24.5%</span>
          </div>

          <strong className={styles.cardValue}>
            $128,492.50
          </strong>

          <div className={styles.chartBox}>
            <img
              src={areaChart}
              alt=""
              className={styles.chartImage}
            />
          </div>

          <div className={styles.assets}>
            {assets.map((asset) => (
              <div className={styles.assetCard} key={asset.name}>
                <span>{asset.name}</span>
                <strong>{asset.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}