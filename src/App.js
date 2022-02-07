
import Header1 from "./Header";
import Carousel from "./Carousel";
import Aboutus from "./Aboutus";
import Slider from "./Slider";
import Footer from "./Footer"
import './Header.css'


function App(){

  return (
    <div className="AppStyle">
      <Header1 />
      <Carousel />

      <Aboutus />
      <Slider />
      <Footer />
    </div>
  )
}
export default App