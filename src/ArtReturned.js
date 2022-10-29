// import axios from "axios";
// import { useState, useEffect } from "react";

// const ArtReturned = () => {

//     console.log('ArtWall has rendered');

//     // initialize a state to keep track of whether the Gallery is visible or not
//     const [isGalleryVisible, setIsGalleryVisible] = useState(false);


//     // initialize a state for the API data from Rijksmuseum (AKA our beautiful art to be displayed!)
//     const [art, setArt] = useState([]);


//     // call the Rijksmuseum API once the component has been mounted to the DOM
//     //     AKA run a side effect!
//     useEffect(() => {

//         // THIS IS WHERE YOU DEFINE WHAT THE SIDE EFFECT IS AND HOW IT WILL RUN
//         console.log('side effect is running');

//         // using axios let's make a request to our API
//         axios({
//             url: 'https://api.artic.edu/api/v1/artworks',
//             // add our URL parameters through this object
//             params: {
//                 limit: 100
//             }
//         }).then((art) => {

//             // once the data is returned from the API, let's save it within state!
//             // use dot notation to ONLY save the array of art objects within state
//             setArt(art.data.artObjects);

//         })

//         // if you only wish to run a side effect ONCE upon the component's initial mount to the DOM, use an EMPTY dependency array
//     }, [])

// }


//     export default ArtReturned;
    
//     // define an event handler which updates the isGalleryVisible state to be the opposite boolean value
//     // const handleClick = () => {
//     //     setIsGalleryVisible(!isGalleryVisible);
//     // }
    
// //     return (
// //         <section>
// //             <h2>
// //                 {
// //                     isGalleryVisible
// //                         ? 'Wow this is a beauteous gallery wall 🤩'
// //                         : 'Ok but would you like to actually see some art???'
// //                 }
// //             </h2>

// //             {/* This text is inaccessible! It would be better to do this styling via CSS */}
// //             <button onClick={handleClick}>
// //                 {
// //                     isGalleryVisible
// //                         ? `I've seen enough of this art! Pls hide it`
// //                         : 'Click here for ✨ a r t ✨'
// //                 }
// //             </button>

// //             {/* only show the Gallery component if the isGalleryVisible state is true */}

// //             {
// //                 isGalleryVisible
// //                     // pass the array of art that lives within the art state variable from this component down to the Gallery component
// //                     ? <Gallery arrayOfArt={art} />
// //                     : null
// //             }
// //         </section>
// //     )
// // }

// // export default ArtWall;