import ReactMarkdown from 'react-markdown';

import privacy from '../../content/legal/portfold-privacy-policy.md?raw';
import { Container } from '../../shared/ui/container/container';

import styles from './legal.module.css';

export function PrivacyPolicy() {
  return (
    <>
      <section className={styles.page}>
        <Container className={styles.container}>
          <div className={styles.content}>
            <ReactMarkdown>{privacy}</ReactMarkdown>
          </div>
        </Container>
      </section>
    </>
  );
}
