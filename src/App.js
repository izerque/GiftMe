
import './App.css';
import Logo from './assets/logo.png';


function App() {
  return (
    <div className="App w-full h-screen flex flex-col mt-auto mb-auto justify-center items-center" >
      <img src={Logo} height='80' width='80' className='img' alt="" />
      <h1 className='text-gray-600 font-bold text-4xl'>
        Gift <span className='text-pink-600 font-medium'>Me</span>
      </h1>
      <p className='font-light text-lg'>Coming soon </p>
     
    </div>
  );
}

export default App;
