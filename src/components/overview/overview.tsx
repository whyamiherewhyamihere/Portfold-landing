import areaChart from '../../assets/images/AreaChart.png';
import roundDiagram from '../../assets/images/RoundDiagram.png';
import { Container } from '../../shared/ui/container/container';

import styles from './overview.module.css';

const breakdown = [
  { name: 'Bitcoin', value: '35%', color: 'orange' },
  { name: 'Ethereum', value: '25%', color: 'blue' },
  { name: 'Solana', value: '20%', color: 'green' },
  { name: 'Others', value: '20%', color: 'teal' },
];

export function Overview() {
  return (
    <section className={styles.overview} id="overview">
      <Container className={styles.container}>
        <div className={styles.content}>
          <h2>
            See what is happening in your <span>portfolio</span>
          </h2>

          <p>
            Track your total portfolio value, asset allocation, and performance over time.
            See what changed and where most of your crypto is held.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Portfolio overview</h3>

          <div className={styles.allocationRow}>
            <div>
              <p className={styles.label}>Asset allocation</p>
              <img
                src={roundDiagram}
                alt="Asset allocation diagram"
                className={styles.roundDiagram}
              />
            </div>

            <div className={styles.breakdown}>
              <p className={styles.label}>Breakdown</p>

              <ul>
                {breakdown.map((item) => (
                  <li key={item.name}>
                    <span className={`${styles.dot} ${styles[item.color]}`} />
                    <span className={styles.assetName}>{item.name}</span>
                    <strong>{item.value}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.history}>
            <p className={styles.label}>PnL History</p>

            <div className={styles.chartWrapper}>
              <div className={styles.yAxis}>
                <span>$140k</span>
                <span>$105k</span>
                <span>$70k</span>
                <span>$35k</span>
                <span>$0k</span>
              </div>

              <div className={styles.chartArea}>
                <img
                  src={areaChart}
                  alt="PnL history chart"
                  className={styles.areaChart}
                />

                <div className={styles.xAxis}>
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
