import { useEffect, useState } from 'react';
import './App.scss';
import Button from './components/button/Button';
import Card from './components/card/Card';
import Power from './components/power/Power';
import Bank from './components/bank/Bank';

const App = () => {
  const [display, setDisplay] = useState('');

  const playList = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  const actionKey = (e) => {
    console.log('actionkey');
    console.log(e.key.toUpperCase());
    playSound(e.key.toUpperCase());
  };

  const actionClick = (text) => {
    console.log('actionClick');
    console.log(text);
    playSound(text);
  };

  const playSound = (selector) => {
    console.log('I enter on playSound');
    const audio = document.getElementById(selector);
    console.log(audio);
    audio.play();
    setDisplay(selector);
  };

  useEffect(() => {
    window.addEventListener("keyup", actionKey);
  });
  return (
    <div className="container">
      <div className='row'>
        <div className='col-12 text-center'>
          <h1>Drums</h1>
        </div>
      </div>
      <div className="row main-row align-items-center">
        <div className='col-12'>
          <div className='row row-app py-5' id='drum-machine'>
            <div className='col-6'>
              <div className="row text-center">
                {playList.map((drumPad) => (
                  <div className='col-4 mb-4 px-0'>
                    <button
                      type="button"
                      className="btn btn-button btn-square-md clip drum-pad"
                      onClick={() => { actionClick(drumPad.text) }}
                      id={drumPad.keyCode}
                    >
                      <audio
                        className='clip'
                        id={drumPad.text}
                        src={drumPad.src}
                      ></audio>
                      {drumPad.text}
                    </button>
                  </div>
                ))};
              </div>
            </div>
            <div className='col-5 d-flex settings justify-content-center'>
              <div className='row'>
                <div className='col-12' id='display'>
                  <Card text={display} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
