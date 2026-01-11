import { useState } from 'react';
import './App.css';
import Navbar from './MyComponents/Navbar';
import TextForm from './MyComponents/TextForm';
//import About from './MyComponents/About';
import Alert from './MyComponents/Alert';

function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      <Navbar
        title="Textutils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter your Text"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
