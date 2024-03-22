import "./App.css"
import Sidebar from "./Home/Sidebar";
import DashBoard from "./Home/Dashboard";


function App (){
  
  return (
    <div className='flex'>
      <Sidebar />
      <DashBoard />
    </div>
  );
}

export default App
