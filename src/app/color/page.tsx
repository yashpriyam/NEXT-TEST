"use client"
import dynamic from 'next/dynamic';
import React, {  useState } from 'react';
const Test=dynamic(()=>import("../components/Test"),{ssr:true})
 import { ChromePicker } from 'react-color';
const ClientWrapper=dynamic(()=>import("../ClientWrapper/page"),{ssr:false})
// const ChromePicker=dynamic(()=>import("react-color").then(mod=>mod.ChromePicker))
const ColorPickerPage = ({children} :any) => {
  const [color, setColor] = useState('#ff0000');
  console.log("color comp");

 
  
  return (
    <div>
      <h1>Color Picker Page</h1>
      <ChromePicker
        color={color}
        onChangeComplete={(newColor) => setColor(newColor.hex)}
      />
      <Test />
      <ClientWrapper />
      {/* {children} */}
     
      <p>Selected Color: {color}</p>
    </div>
  );
};

export default ColorPickerPage;
