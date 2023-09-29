import React, { useState } from 'react';
import './Button.scss';
import Heater1 from '../../multimedia/Heater-1.mp3';
import Heater2 from '../../multimedia/Heater-2.mp3';
import Heater3 from '../../multimedia/Heater-3.mp3';
import Heater4 from '../../multimedia/Heater-4_1.mp3';
import Clap from '../../multimedia/Heater-6.mp3';
import OpenHH from '../../multimedia/Dsc_Oh.mp3';
import KicknHat from '../../multimedia/Kick_n_Hat.mp3';
import Kick from '../../multimedia/RP4_KICK_1.mp3';
import ClosedHH from '../../multimedia/Cev_H2.mp3';

const Button = (props) => {
  // const { btn } = props;
  const [btn, setBtn] = useState(props.btn);

  const makeSound = (e, btn=false) => {
    if (e) {
      console.log('inside if event');
      console.log(e.target.value);
      setBtn(e.target.value);
    }
    switch (btn) {
      case 'Q':
        new Audio(Heater1).play();
        break;
      case 'W':
        new Audio(Heater2).play();
        break;
      case 'E':
        new Audio(Heater3).play();
        break;
      case 'A':
        new Audio(Heater4).play();
        break;
      case 'S':
        new Audio(Clap).play();
        break;
      case 'D':
        new Audio(OpenHH).play();
        break;
      case 'Z':
        new Audio(KicknHat).play();
        break;
      case 'X':
        new Audio(Kick).play();
        break;
      case 'C':
        new Audio(ClosedHH).play();
        break;
      default:
        console.log('error! you shouldn\'t be able to see this ');
        console.log(btn);
    };
  };

  return (
    <input type="button" className="btn btn-button btn-square-md clip drum-pad" id={btn} onClick={() => { makeSound(false, btn) }} value={btn} />
  );
}

export default Button;
