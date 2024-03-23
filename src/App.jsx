// import "./App.css"
// import Sidebar from "./Home/Sidebar";
// // import DashBoard from "./Home/Dashboard";
// // import NavBar from "./Home/NavBar";


// function App (){
  
//   return (
//     <div className=''>
   
//       <Sidebar />
    
//     </div>
//   );
// }

// export default App






import React from "react";
import Sidebar from "./Home/Sidebar";

function App() {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      {/* Add other components here */}
    </div>
  );
}

export default App;




