import React from "react";
import "react-slideshow-image/dist/styles.css";
//import { Slide } from "react-slideshow-image";
import { Zoom } from "react-slideshow-image";
import "./home.css";

export let Home = () => {
  return (
    <header className="header">
      <div className="flex-row">
        <h1 className="header-title1">PLAY A GAME EVERY DAY.</h1>
        <h1 className="header-title2">ALWAYS BE A WINNER</h1>
      </div>
    </header>
  );
};

// export let Slideshow = () => {
//   const images = [
//     <img
//       alt="gloomhaven"
//       src="./images/gloomhaven.jpg"
//       style={{ width: "100%" }}
//     />,
//     <img
//       alt="terriforming-mars"
//       src="./images/terriforming-mars.jpg"
//       style={{ width: "100%" }}
//     />,
//   ];
//   return (
//     <>
//       <Slide>
//         <div className="each-slide-effect">
//           <div style={{ backgroundImage: `url(${images[0]})` }}>
//             <span>Slide 1</span>
//           </div>
//         </div>
//         <div className="each-slide-effect">
//           <div style={{ backgroundImage: `url(${images[1]})` }}>
//             <span>Slide 2</span>
//           </div>
//         </div>
//         <div className="each-slide-effect">
//           <div style={{ backgroundImage: `url(${images[2]})` }}>
//             <span>Slide 3</span>
//           </div>
//         </div>
//       </Slide>
//     </>
//   );
// };

let images = ["images/gloomhaven.jpg", "images/terriforming-mars.jpg"];

// export let Slideshow = () => {
//   return (
//     <div className="slide-container">
//       <Slide>
//         {slideImages.map((slideImages, index) => (
//           <div className="each-slide" key={index}>
//             <div style={{ backgroundImage: `url(${slideImages.url})` }}>
//               <span>{slideImages.caption}</span>
//             </div>
//           </div>
//         ))}
//       </Slide>
//     </div>
//   );
// };

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

export const Slideshow = () => {
  return (
    <div className="img">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img key={index} src={each} alt={index} />
        ))}
      </Zoom>
    </div>
  );
};
