import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
// import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Services></Services>
        <Qualification></Qualification>
        <Portfolio></Portfolio>
        {/* <Testimonials></Testimonials> */}
        <Contact></Contact>
      </main>

      <Footer></Footer>
      <ScrollUp></ScrollUp>
    </>
  );
}

export default App;
