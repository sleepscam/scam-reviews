
import Header from "../components/Header";
import Hero from "../components/Hero";
import FakeReviews from "../components/FakeReviews";
import TruthSection from "../components/TruthSection";
import AffiliateAlerts from "../components/AffiliateAlerts";
import RealTalk from "../components/RealTalk";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FakeReviews />
      <TruthSection />
      <AffiliateAlerts />
      <RealTalk />
      <Footer />
    </div>
  );
};

export default Index;
