import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <div className="bg-[#F7F8F9] max-w-[375px] mx-auto h-screen border border-gray-300">
      <Outlet />
    </div>
  );
}

export default App;
