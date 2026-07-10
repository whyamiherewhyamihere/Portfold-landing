import { useState } from 'react';

import arrowRightIcon from '../../assets/icons/arrow-right.svg';
import { Container } from '../../shared/ui/container/container';

import styles from './faq.module.css';

const questions = [
  {
    question: 'Can Portfold access or move my crypto?',
    answer:
      'Portfold only displays portfolio information and cannot trade, transfer, or withdraw your funds.',
  },
  {
    question: 'Can I view my portfolio without internet access?',
    answer:
      'Some saved portfolio information may be available offline, but fresh balances require an internet connection.',
  },
  {
    question: 'What can I connect to Portfold?',
    answer:
      'You can connect supported exchanges and wallets, or add assets manually if direct connection is not available.',
  },
  {
    question: 'How is my portfolio data protected?',
    answer:
      'Your portfolio data is handled with encryption and access protection to keep sensitive information safer.',
  },
];

export function Faq() {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  return (
    <section className={styles.faq} id="faq">
      <Container>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.list}>
          {questions.map((item, index) => {
            const isOpen = openedIndex === index;

            return (
              <div className={styles.item} key={item.question}>
                <button
                  className={styles.question}
                  type="button"
                  onClick={() => setOpenedIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <img
                    src={arrowRightIcon}
                    alt=""
                    className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
                  />
                </button>

                {isOpen && <p className={styles.answer}>{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
