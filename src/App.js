
import Header1 from "./Header";
import Carousel from "./Carousel";
import Aboutus from "./Aboutus";
import PropertySlider from "./PropertySlider";
import AgencySlider from "./AgencySlider";
import Contact from "./Contact"
import Footer from "./Footer"
import './Header.css'


function App(){

  return (
    <div className="AppStyle">
      <Header1 />
      <Carousel />
      <Aboutus />
      <PropertySlider />
      <AgencySlider />
      <Contact />
      <Footer />
    </div>
  )
  
}
export default App