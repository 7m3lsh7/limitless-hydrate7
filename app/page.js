import Header from './components/Header';
import Hero from './components/Hero';
import ProductHighlight from './components/ProductHighlight';
import CardSection from './components/CardSection';
import ConnectHydrate from './components/ConnectHydrate';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ProductHighlight />
      <CardSection />
      <ConnectHydrate />
      <Footer />
    </div>
  );
}