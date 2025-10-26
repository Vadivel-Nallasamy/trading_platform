import "./App.css";
import Header from "./components/header/Header";
import Aside from "./components/header/Aside/Aside";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import authData from "./tanstackDataManager/authData";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='h-screen w-screen flex flex-col'>
        <Header />
        <div className='flex-1 flex m-4 '>
          <Aside />
          <div className='flex-1'>Main</div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
