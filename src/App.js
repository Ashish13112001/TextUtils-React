
import { useState } from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#222f3d';
      // document.body.style.color = 'white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';
    }
  }
  const [mode,setMode] = useState('light');
  return (
    <>
      <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode}/>
      <div className='container my-3'>
        <TextForm heading='Enter the text to analize' mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
