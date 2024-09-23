"use client"
import dynamic from "next/dynamic";
// const ParentTest=dynamic(() => import("../components/ParentTest"));
const ColorPickerPage = dynamic(() => import("../color/page"));


// import { ChromePicker } from 'react-color';

 const Test = dynamic(() => import("../components/Test"));
console.log("about log");


const AboutPage = () => {
    const showColorPicker = true;
    return (
      <div>
        
        <h1>About Page</h1>
       
        {/* <ParentTest /> */}
        {/* {showColorPicker && <ColorPickerPage />} */}
        {/* <Test /> */}
        {/* <ColorPicker value={""} onChange={()=> {}} /> */}
        {/* <ChromePicker
        color={"#fff"}
        onChangeComplete={(newColor) => { console.log("new coolor") }}
      /> */}
      </div>
    );
  };
  
  export default AboutPage;
