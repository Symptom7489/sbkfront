import './App.css';
import Header from "./Header"
import Footer from "./Footer"
import Carousel, { CarouselItem } from "./Storybook";

function App() {
  return (
      <div>
        <Header />
          <div className="App">
              <Carousel>
                  <CarouselItem> Item 1</CarouselItem>
                  <CarouselItem> Item 2</CarouselItem>
                  <CarouselItem> Item 31</CarouselItem>
              </Carousel>
          </div>
        <Footer />
      </div>


  );
}

export default App;
