import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getDatepicker, getDistpicker } from './params';
import EvaSelect from '../eva-select';


function Form () {
  
  const datepickerContainer = React.createRef();
  const distpickerContainer = React.createRef();
  const [isMobile, setIsMobile] = useState(false);
  let datepicker;
  let distpicker;
  const [showDist, setShowDist] = useState(0);
  const [showDate, setShowDate] = useState(0);
  
  useEffect(()=> {
    if(distpicker && datepicker){
      distpicker.unMount();
      datepicker.unMount();
    }
    datepicker = getDatepicker(isMobile);
    distpicker = getDistpicker(isMobile);
  });

  const mountDatepicker = () => {
    datepicker.dispatch({
      type: showDate ? 'hide' : 'show', 
      payload: {
        showAt: datepickerContainer.current
      }
    })
    datepicker.dispatch({
      type: 'setDate',
      payload: {
          date: '2020-07-26'
      }
    });
    setShowDate(!showDate);
  }
  const mountDistribution = () =>{
    distpicker.dispatch({
      type: showDist ? 'hide' : 'show',
      payload: {
        showAt: distpickerContainer.current
      }
    })
    setShowDist(!showDist)
  }
  const changeView = (e) =>{
    const mode = e.target.value;
    setIsMobile(JSON.parse(mode));
  }
  return (
    <React.Fragment>
      <h1 className="eva-3-h3">Prueba de componentes modo : {isMobile}</h1>
      <EvaSelect onChange={changeView}>
        <option value="false">Tooltip</option>
        <option value="true">Modal</option>
      </EvaSelect>
      <a ref={datepickerContainer} className="eva-3-btn-ghost -md -darken" onClick={mountDatepicker}>
        <em className="btn-text">Date picker</em>
      </a>
      <a ref={distpickerContainer} className="eva-3-btn-ghost -md -darken" onClick={mountDistribution}>
        <em className="btn-text">Distribution picker</em>
      </a>
    </React.Fragment>
  );
  
}

const container = document.getElementById("container");
container ? ReactDOM.render(<Form />, container) : false;
export default Form;

