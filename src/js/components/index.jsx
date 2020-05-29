import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';

import React, { useState, useCallback } from 'react'
import { Element } from './Element'
import update from 'immutability-helper'

export const App = () => {
  {
    const [elements, setElements] = useState([])
    const moveElement = useCallback(
      (dragIndex, hoverIndex) => {
        const dragElement = elements[dragIndex]
        setElements(
          update(elements, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragElement],
            ],
          }),
        )
      },
      [elements],
    )
    const renderElement = (element, index) => {
      const [text, setText] = useState(element.text);
      return (
        <Element
          key={element.id}
          index={index}
          id={element.id}
          text={text}
          setText={setText}
          moveElement={moveElement}
        />
      )
    }
    return (
      <React.Fragment>
        {elements.map((element, i) => renderElement(element, i))}
      </React.Fragment>
    )
  }
}


const container = document.getElementById("container");
container ? ReactDOM.render(<App />, container) : false;
export default App;

