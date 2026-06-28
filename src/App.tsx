import { AiAssistant } from './components/aiassistant/aiassistant';
import { Features } from './components/features/features';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Overview } from './components/overview/overview';
import { Funds } from './components/funds/funds';
import { Faq } from './components/faq/faq';
import { Footer } from './components/footer/footer';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Features />
        <Overview />
        <Funds />
        <AiAssistant />
        <Faq />
        <Footer />
      </main>
    </>
  );
}

export default App;
