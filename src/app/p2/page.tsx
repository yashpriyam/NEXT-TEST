
import ClientWrapper from "../ClientWrapper/page";
import ServerComponent from "../serverExample/page";
console.log("page2 component");

const Page2 = () => {
    console.log("page2 component")
    return <>
    <ClientWrapper>
        <ServerComponent />
    </ClientWrapper>
    </>
   
}

export default Page2;