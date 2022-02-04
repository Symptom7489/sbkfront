import React from 'react';
import './App.css';
import Carousel, { CarouselItem } from "./Carousel";
import CarouselLoadingComponent from'./CarouselLoading';
import { useEffect, useState } from "react";

//
// ///////////////////////// API TEST SECTION ///////////////////////////////////
//
// class connectionExample extends React.Component {
//     componentDidMount() {
//         const apiURL = "http://127.0.0.1:8000/api/users/";
//         fetch(apiURL).then((response) => response.json())
//             .then((data) => console.log(data));
//     }
//
//     render() {
//         return <div>Example connection</div>;
//     }
// }

        ///////////////////////////////END TEST SECTION /////////////////////////////////


function App() {
    const CarouselLoading = CarouselLoadingComponent(Carousel);
    const [appState, setAppState] = useState({
        loading: false,
        pages: null,
    });
    useEffect(() => {
        setAppState({ loading: true});
        const apiURL = 'http://127.0.0.1:8000/api/';
        fetch(apiURL)
            .then((data) => data.json())
            .then((pages) => {
                setAppState({ loading: false, pages: pages });
            });
    }, [setAppState]);
    return (
        <div className="App">
            <h1>Upload</h1>
            <CarouselLoading isLoading={appState.loading} pages={appState.pages}/>
        </div>
    );
}
export default App;