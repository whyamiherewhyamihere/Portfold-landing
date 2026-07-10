import binanceIcon from '../../assets/icons/Binance-Icon-Logo.wine.svg';
import bitgetIcon from '../../assets/icons/bitget-token-new-bgb-logo.svg';
import ethereumIcon from '../../assets/icons/ethereum-eth-logo.svg';
import solanaIcon from '../../assets/icons/solana-sol-logo.svg';
import { Container } from '../../shared/ui/container/container';

import styles from './services.module.css';

type ChipStatus = 'Connected' | 'Synced' | 'Coming Soon';

type Service = {
  label: string;
  status: ChipStatus;
  className: string;
  icon: string;
};

const services: Service[] = [
  {
    label: 'Bitget',
    status: 'Connected',
    className: 'bitget',
    icon: bitgetIcon,
  },
  {
    label: 'Solana',
    status: 'Synced',
    className: 'solana',
    icon: solanaIcon,
  },
  {
    label: 'Ethereum',
    status: 'Synced',
    className: 'ethereum',
    icon: ethereumIcon,
  },
  {
    label: 'Binance',
    status: 'Coming Soon',
    className: 'binance',
    icon: binanceIcon,
  },
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
      <span className={styles.label}>
        <img src={service.icon} alt="" />
        {service.label}
      </span>

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
