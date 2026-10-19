import { useState } from 'react';
import './App.css';

function App() {

  const [step, setStep] = useState('set time')
  const [modalSetTime, setModalSetTime] = useState(false)

  const [facabook, setFacebook] = useState('https://www.facebook.com/')
  const [pinterest, setPinterest] = useState('https://pinterest.com/')
  const [instagram, setInstagram] = useState('https://www.instagram.com/')

  return (
    <div className="wrapper">
      {step === 'set time' ? (
        <>
          <div className='wrapperSetTime'>
            <h1>Press button for set time</h1>
            <button onClick={() => setModalSetTime(true)}>Set Time</button>
          </div>

          {modalSetTime === true ? (
            <div className='wrapperModal'></div>
          ): null}
        </>
      ) : null}
      <div className='nav'>
        <div className='nav__facebook' onClick={() => window.open(facabook, '_blank')}></div>
        <div className='nav__pinterest' onClick={() => window.open(pinterest, '_blank')}></div>
        <div className='nav__instagram' onClick={() => window.open(instagram, '_blank')}></div>
      </div>
    </div>
  );
}

export default App;
