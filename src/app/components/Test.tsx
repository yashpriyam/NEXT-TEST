import ParentTest from "./ParentTest";
import Image from 'next/image';

const Test = () => {
    console.log("test component");

    return (
        <>
            <div>Test</div>
            
            <Image 
                src="https://images.unsplash.com/photo-1593642634367-d91a135587b5"
                alt="Placeholder image"
                width={500}
                height={300}
            />
            
            <ParentTest />
        </>
    );
}

export default Test;
