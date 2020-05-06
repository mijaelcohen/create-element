import React, { Component } from "react";
import ReactDOM from "react-dom";
import { distpicker, datepicker } from './params';


class Form extends Component {
  constructor(props) {
    super(props);
    this.mountDatepicker = this.mountDatepicker.bind(this);
    this.mountDistribution = this.mountDistribution.bind(this);
    this.datepickerContainer = React.createRef();
    this.distpickerContainer = React.createRef();
    this.state = {
      showDist: false,
      showDate: false,
    }
  }
  componentDidMount(){    
    datepicker.mount();
    distpicker.mount();
  }
  componentDidCatch(error, message){
    console.error(error, message);
  }

  mountDatepicker() {
    datepicker.dispatch({
      type: this.state.showDate ? 'hide' : 'show', 
      payload: {
        showAt: this.datepickerContainer.current
      }
    })
    this.setState({showDate: !this.state.showDate});
  }
  mountDistribution(){
    distpicker.dispatch({
      type: this.state.showDist ? 'hide' : 'show',
      payload: {
        showAt: this.distpickerContainer.current
      }
    })
    this.setState({showDist: !this.state.showDist});
  }
  render() {
    return (
      <React.Fragment>
        <h1>Prueba de componentes</h1>
        <a ref={this.datepickerContainer} className="eva-3-btn-ghost -md -darken" onClick={this.mountDatepicker}>
          <em className="btn-text">Date picker</em>
        </a>
        <a ref={this.distpickerContainer} className="eva-3-btn-ghost -md -darken" onClick={this.mountDistribution}>
          <em className="btn-text">Distribution picker</em>
        </a>
      </React.Fragment>
    );
  }
}

const container = document.getElementById("container");
container ? ReactDOM.render(<Form />, container) : false;
export default Form;

