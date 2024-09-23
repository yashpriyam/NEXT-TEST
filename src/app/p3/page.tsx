
import ClientWrapper from "../ClientWrapper/page";

const Page3 = ({children}:any) => {
    console.log("page3 component")
    return <>
    <ClientWrapper>
        {children}
    </ClientWrapper>
    </>
   
}

export default Page3;