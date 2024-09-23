
import dynamic from "next/dynamic";
// import AboutPage from "./about/page";
const AboutPage = dynamic(() => import("../about/page").then((mod) => mod.default),{ssr:false});

export default function Dashboard() {
 
  return (
    <>
    <AboutPage />
    <div>dashboard</div>
    </>
  );
}
