
// app/components/ServerComponent.tsx (Server Component)
const ServerComponent = async () => {
    // Fetch data from a public API
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) => res.json());
  console.log("server comp");
  
    return (
      <div>
        <h1>Server Component</h1>
        <p>Data fetched from server: {data.title}</p>
   
      </div>
    );
  };
  
  export default ServerComponent;
  