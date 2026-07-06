import { useEffect, useRef } from 'react';

import areaChart from '../../assets/images/AreaChart.png';
import androidIcon from '../../assets/icons/android.svg';
import appleIcon from '../../assets/icons/apple.svg';
import bitcoinIcon from '../../assets/icons/bitcoinsv.svg';
import ethereumIcon from '../../assets/icons/ethereum.svg';
import solanaIcon from '../../assets/icons/solana.svg';
import { Container } from '../../shared/ui/container/container';

import styles from './hero.module.css';

const assets = [
  { name: 'BTC', value: '35%', icon: bitcoinIcon },
  { name: 'ETH', value: '25%', icon: ethereumIcon },
  { name: 'SOL', value: '20%', icon: solanaIcon },
];

type HeroProps = {
  onDownloadActionsVisibleChange: (isVisible: boolean) => void;
};

export function Hero({ onDownloadActionsVisibleChange }: HeroProps) {
  const actionsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = actionsRef.current;

    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        onDownloadActionsVisibleChange(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '-80px 0px 0px 0px',
      }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [onDownloadActionsVisibleChange]);

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
            entire crypto portfolio in one place. Portfold can track your balances, but
            it cannot trade or withdraw your funds.
          </p>

          <div className={styles.actions} ref={actionsRef} id="download">
            <a className={styles.primaryButton} href="#">
              <img src={androidIcon} alt="" />
              Download for Android
            </a>

            <a className={styles.secondaryButton} href="#">
              <img src={appleIcon} alt="" />
              Download for iPhone
            </a>
          </div>
        </div>

        <div className={styles.portfolioCard}>
          <div className={styles.cardTop}>
            <p className={styles.cardLabel}>Total Portfolio</p>
            <span className={styles.percent}>+24.5%</span>
          </div>

          <strong className={styles.cardValue}>$128,492.50</strong>

          <div className={styles.chartBox}>
            <img src={areaChart} alt="" className={styles.chartImage} />
          </div>

          <div className={styles.assets}>
            {assets.map((asset) => (
              <div className={styles.assetCard} key={asset.name}>
                <div className={styles.assetName}>
                  <img src={asset.icon} alt="" />
                  <span>{asset.name}</span>
                </div>
                <strong>{asset.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}