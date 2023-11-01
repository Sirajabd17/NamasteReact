 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import HeadingComponent from "./components/Header";
 import Body from "./components/Body"
 import Footer from "./components/Footer"
 import { IMG_CDN_URL } from './components/contants';

{/* 
const Heading1=()=>{
  return (
    <div>
      
      <h1> Namaste react functional component</h1>
      <h2> this is h2 tag</h2>
    </div>
  );
};
  
const test =(
  <h1 id='title' key="h2">
    hello react
  </h1>
);


var xyz=100;
const Heading2=()=>(
  <div>
    {test}
    <Heading1/>
    {Heading1()}
    {console.log(xyz)}
   { " we can write any javascript code here!"}
    <h1>
      Namaste react functionl component 
    </h1>
    <h2>
      First we import and export to render component
    </h2>
  </div>
)
**/}
 /**
         Header 
            -logo
            -nav items (right side)
            -cart
          Body
            -searbar
            -restraunt list
            -restaurant cart
               -image 
               -name
              -rating
               -cusines 
           footer
               -links
               -Copyrights     
         */

     
   
  // const burgerking={
  //   name:"Burger King",
  //   image:"https://tb-static.uber.com/prod/image-proc/processed_images/64d5b6cf0e05b04b99ff8ea0faee804f/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
  //   cusines:["Burger","American"],
  //   rating:"4.2",
  // }
 
  
 
     
    

    
    
   const Applayout=()=>{
    return (
      <>
        <HeadingComponent/>
       <Body/>
       <Footer/>
      </>
    )
   }





  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(< Applayout/>);
  