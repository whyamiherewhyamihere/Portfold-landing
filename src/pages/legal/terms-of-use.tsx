import ReactMarkdown from 'react-markdown';

import terms from '../../content/legal/portfold-terms-of-use.md?raw';
import { Container } from '../../shared/ui/container/container';

import styles from './legal.module.css';

export function TermsOfUse() {
  return (
    <>
      <section className={styles.page}>
        <Container className={styles.container}>
          <div className={styles.content}>
            <ReactMarkdown>{terms}</ReactMarkdown>
          </div>
        </Container>
      </section>
    </>
  );
}