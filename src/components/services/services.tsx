import { Container } from '../../shared/ui/container/container';

import styles from './services.module.css';

type ChipStatus = 'Connected' | 'Synced' | 'Coming Soon';

type Service = {
  label: string;
  status: ChipStatus;
  className: string;
};

const services: Service[] = [
  { label: 'Bitget', status: 'Connected', className: 'bitget' },
  { label: 'Solana', status: 'Synced', className: 'solana' },
  { label: 'Ethereum', status: 'Synced', className: 'ethereum' },
  { label: 'Binance', status: 'Coming Soon', className: 'binance' },
];

export function Services() {
  return (
    <section className={styles.services} id="connections">
      <Container>
        <h2 className={styles.title}>Connect the services you already use</h2>

        <div className={styles.rows}>
          <div className={styles.firstRow}>
            {services.slice(0, 3).map((service) => (
              <ServiceChip service={service} key={service.label} />
            ))}
          </div>

          <div className={styles.secondRow}>
            <ServiceChip service={services[3]} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServiceChip({ service }: { service: Service }) {
  const isComingSoon = service.status === 'Coming Soon';

  return (
    <div className={`${styles.chip} ${styles[service.className]}`}>
      <span className={styles.label}>{service.label}</span>

      <span
        className={`${styles.statusBadge} ${
          isComingSoon ? styles.disabledBadge : styles.activeBadge
        }`}
      >
        <span
          className={`${styles.dot} ${
            isComingSoon ? styles.disabledDot : styles.activeDot
          }`}
        />
        {service.status}
      </span>
    </div>
  );
}
