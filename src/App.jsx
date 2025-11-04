import "./App.css";
import Header from "./components/header/Header";
import Aside from "./components/header/Aside/Aside";
// import authData from "./tanstackDataManager/authData";
function App() {
  return (
    <div className='h-screen w-screen flex flex-col'>
      <Header />
      <div className='flex-1 flex m-4 '>
        <Aside />
        <div className='flex-1'>Main</div>
      </div>
    </div>
  );
}

export default App;
