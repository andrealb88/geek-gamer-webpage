import "./App.css";
//import { getAllCategories } from "./utils/api.js";
// import { getUsername } from "./utils/api.js";
//import { useState, useEffect } from "react";
import { Home, Slideshow } from "./pages/home.js";
import { Nav } from "./pages/navbar.js";
import { Reviews } from "./pages/review.js";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  /*  const [categories, setCategories] = useState([]);
  // const [user, setUser] = useState([]);

  useEffect(() => {




























    
    getAllCategories().then((categoriesFromServer) => {
      setCategories(categoriesFromServer);
    });
    /* getUsername().then((userFromServer) => {
      setUser(userFromServer);
    }); */
  /*   }, []);
  return (
    <div className="App">
      <ul>
        {categories.map((category) => {
          console.log(category);
          return <li>{category.slug}</li>;
        })} */
  // </ul>
  //<Header />
  /* <div>
        {user.map((myUser) => {
          console.log(myUser);
          return <div>{myUser.user}</div>;
        })}
      </div> */
  //</div>
  //);
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="review" element={<Reviews />} />
        <Route path="aboutUs" element={<aboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
