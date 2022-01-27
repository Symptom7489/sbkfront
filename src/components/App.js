import React from 'react';
import './App.css';
import ResponsiveAppBar from "./Header"
import Footer from "./Footer"
import Carousel, { CarouselItem } from "./Storybook";
import axios from 'axios';

///////////////////////// API TEST SECTION ///////////////////////////////////
const api = axios.create({
    baseURL: "http://localhost:8000/api/users/"
})



class App extends React.Component {

    // Constructor
    constructor() {
        super();
        api.get('/').then(response => {
            console.log(response.data)
        })
    };
}

        ///////////////////////////////END TEST SECTION /////////////////////////////////
// function App() {
//   return (
//       <div>
//         <ResponsiveAppBar />
//           <div className="App">
//               <Carousel>
//                   <CarouselItem> Item 1</CarouselItem>
//                   <CarouselItem> Item 2</CarouselItem>
//                   <CarouselItem> Item 3</CarouselItem>
//               </Carousel>
//           </div>
//         <Footer />
//       </div>
//
//
//   );
// }

export default App;
