import React from "react";
import Home from "./home";

// import '../styles/global.css'; // impor CSS kustom Anda
// import 'tailwindcss/tailwind.css'; 

// const Home = dynamic(() => import("./home"), {
//   loading: () => <div>loading...</div>
// });

const App = () => (
  <div>
    <Home />
    {/* <h1 className="text-3xl font-bold text-gray-800">Hello World!</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click me!
      </button> */}
  </div>
);
export default App;