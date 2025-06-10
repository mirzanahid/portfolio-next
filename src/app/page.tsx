import HeroSection from "./(components)/HeroSection/page";
import Navbar from "./(components)/Navbar/Navbar";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
    </div>
  );
};

export default Home;
