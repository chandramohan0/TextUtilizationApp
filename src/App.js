import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="AboutTextUtils"/>
      <div className='container' my-3="true">
      {/* <Navbar title="TextUtils" /> */}
      <TextForm heading= "Enter the text to analyze below" />
      </div>
      {/* <Navbar /> */}
    </>
  );
}

export default App;
