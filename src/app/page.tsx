import dynamic from "next/dynamic";
import ColorPickerPage from "./color/page";
import Test from "./components/Test";
// import AboutPage from "./about/page";
const AboutPage = dynamic(() => import("./about/page").then((mod) => mod.default));

export default function Home() {
 
  return (
    <>
    <AboutPage />
    <ColorPickerPage>
    <Test />
    
    </ColorPickerPage> 

    <div>home</div>
    </>
  );
}
