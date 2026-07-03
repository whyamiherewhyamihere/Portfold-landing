import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AiAssistant } from './components/aiassistant/aiassistant';
import { Faq } from './components/faq/faq';
import { Features } from './components/features/features';
import { Footer } from './components/footer/footer';
import { Funds } from './components/funds/funds';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Overview } from './components/overview/overview';
import { Services } from './components/services/services';
import { PrivacyPolicy } from './pages/legal/privacy-policy';
import { TermsOfUse } from './pages/legal/terms-of-use';
import { ScrollToTop } from './shared/ui/scroll-to-top/scroll-to-top';

function Landing() {
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

function App() {
  return (
    <BrowserRouter basename="/Portfold-landing">
  <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;