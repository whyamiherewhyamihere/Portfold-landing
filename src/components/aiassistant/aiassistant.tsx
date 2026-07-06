import allocationsImage from '../../assets/icons/allocations.svg';
import personIcon from '../../assets/icons/person.svg';
import { Container } from '../../shared/ui/container/container';

import styles from './aiassistant.module.css';

export function AiAssistant() {
  return (
    <section className={styles.assistant} id="ai">
      <Container>
        <div className={styles.card}>
          <div className={styles.head}>
            <div>
              <div className={styles.titleRow}>
                <h2>AI Portfolio Assistant</h2>
                <span>Coming Soon</span>
              </div>

              <p>
                Get clear explanations of changes in your portfolio. Portfold highlights
                what may need your attention, while every decision remains yours.
              </p>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.alerts}>
              <article className={styles.alertCard}>
                <div className={styles.iconBox}>
                  <img src={allocationsImage} alt="" />
                </div>

                <div>
                  <h3>Allocation alerts</h3>
                  <p>See when one asset starts taking up too much of your portfolio.</p>
                </div>
              </article>

              <article className={styles.alertCard}>
                <div className={styles.iconBox}>
                  <img src={personIcon} alt="" />
                </div>

                <div>
                  <h3>Personal summaries</h3>
                  <p>
                    Understand what changed and which assets affected your portfolio
                    value.
                  </p>
                </div>
              </article>
            </div>

            <div className={styles.preview}>
              <div className={styles.previewHeader}>
                <div>
                  <strong>Portfolio overview</strong>
                  <span>Analyzing BTC / ETH / SOL allocation</span>
                </div>

                <em>Private</em>
              </div>

              <div className={styles.previewGrid}>
                <div className={styles.allocationBox}>
                  <strong>Current allocation</strong>

                  <div className={styles.progressCircle}>
                    <span>78%</span>
                    <small>optimized</small>
                  </div>
                </div>

                <div className={styles.reviewBox}>
                  <strong>Suggested review</strong>

                  <div className={styles.lineBlock}>
                    <span />
                    <p>Reduce concentration risk</p>
                  </div>

                  <div className={styles.lineBlock}>
                    <span />
                    <p>Increase stable allocation</p>
                  </div>
                </div>
              </div>

              <div className={styles.note}>
                Portfold provides information only. You decide what to do.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
