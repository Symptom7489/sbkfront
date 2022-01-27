import './App.css';
import ResponsiveAppBar from "./Header"
import Footer from "./Footer"
import Carousel, { CarouselItem } from "./Storybook";

function App() {
  return (
      <div>
        <ResponsiveAppBar />
          <div className="App">
              <Carousel>
                  <CarouselItem> Item 1</CarouselItem>
                  <CarouselItem> Item 2</CarouselItem>
                  <CarouselItem> Item 3</CarouselItem>
              </Carousel>
          </div>
        <Footer />
      </div>


  );
}

export default App;
