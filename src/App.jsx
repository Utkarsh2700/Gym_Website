import Benefits from "./Components/Benefits";
import Coaches from "./Components/Coaches";
import Collaboration from "./Components/Collaboration";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Maps from "./Components/Maps";
import Pricing from "./Components/Pricing";
import Services from "./Components/Services";
import ButtonGradient from "./assets/svg/ButtonGradient";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Coaches />
        <Maps />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};
export default App;
