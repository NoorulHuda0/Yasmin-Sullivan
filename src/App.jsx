import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
