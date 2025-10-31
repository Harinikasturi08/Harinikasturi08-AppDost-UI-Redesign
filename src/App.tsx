import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ChatBubble from './components/ChatBubble';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <ChatBubble />
      <Footer />
    </div>
  );
}

export default App;
