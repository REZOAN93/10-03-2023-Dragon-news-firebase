import "./App.css";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className=" max-w-7xl mx-auto my-5 font-basicFont">
      <Outlet></Outlet>
    </div>
  );
}

export default App;
