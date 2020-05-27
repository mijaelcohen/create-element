import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { distpicker, datepicker } from './params';


function Form () {
  
  const datepickerContainer = React.createRef();
  const distpickerContainer = React.createRef();
  
  const [showDist, setShowDist] = useState(0);
  const [showDate, setShowDate] = useState(0);
  
  useEffect(()=>{    
    datepicker.mount();
    distpicker.mount();
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
 
  return (
    <React.Fragment>
      <h1>Prueba de componentes</h1>
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

