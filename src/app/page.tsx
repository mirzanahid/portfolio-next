import About from "./(components)/About/page";
import Contact from "./(components)/Contact/page";
import Footer from "./(components)/Footer/page";
import Hero from "./(components)/Hero/page";
import Navbar from "./(components)/Navbar/page";
import Projects from "./(components)/Projects/page";
import Skill from "./(components)/Skill/page";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skill></Skill>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      
    </div>
  );
};

export default Home;
