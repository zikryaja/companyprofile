import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Reveal>
        <About />
      </Reveal>
      <Reveal delay={100}>
        <Testimonials />
      </Reveal>
      <Footer />
    </>
  );
}