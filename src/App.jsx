import "./App.css"
import Sidebar from "./Home/Sidebar";
import DashBoard from "./Home/Dashboard";
import LoginForm from "./LoginForm";


function App (){
  
  return (
    <div className='flex'>
      <Sidebar />
      <DashBoard />
      <LoginForm/>
    </div>
  );
}

export default App
