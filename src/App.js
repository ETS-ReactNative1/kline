import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './Sketch.js';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { Panel as ColorPickerPanel } from 'rc-color-picker';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import {RotatingSquare} from 'react-loader-spinner';
import {loading} from './Sketch.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      variation: 'default',
      density: '5',
      color_a: '#FFF200',
      color_b: '#FF006E',
      color_c: '#EA00FF',
      color_d: '#00AEFF',
      bellCircles: 6,
      loading: true,
      bgcolor: {
          h: 0,
          s: 0,
          l: 10
        }
      }

    this.onVariationChange = this.onVariationChange.bind(this);
    this.onDensityChange = this.onDensityChange.bind(this);

    this.colorChangeA = this.colorChangeA.bind(this);
    this.colorChangeB = this.colorChangeB.bind(this);
    this.colorChangeC = this.colorChangeC.bind(this);
    this.colorChangeD = this.colorChangeD.bind(this);

    this.onStart = this.onStart.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false}), 3000);
  }

  colorChangeA(obj) {
    this.setState({
      color_a: obj.color
    });
    console.log(obj);
  }

  colorChangeB(obj) {
    this.setState({
      color_b: obj.color
    })
  }


  colorChangeC(obj) {
    this.setState({
      color_c: obj.color
    })
  }

  colorChangeD(obj) {
    this.setState({
      color_d: obj.color
    });
  }


  onVariationChange(value) {
    this.onStart();
    this.setState({
      loading: true,
      mode: value,
    });
  }

  onDensityChange(value) {
    this.onStart();
    this.setState({
      loading: true,
      density: value,
    });
  }

  onStart() {
    this.setState({
      loading: true
    })
    setTimeout(() => this.setState({ loading: false}), 5000);
  }

  onEnd() {
    this.setState({
      loading: false
    })
  }

  render() {
    console.log(loading)
    return (
      <div className="App">
       {this.state.loading && <div className="preloader"><RotatingSquare ariaLabel="rotating-square" visible={true} color="white" />Processing...</div>}
        <div className="App-settings">
          <h3>MODE:</h3>
          <RadioGroup horizontal onChange={ this.onVariationChange } value=''>
            <RadioButton value="orderly" rootColor="#fff" pointColor="#ccc">
              Orderly
            </RadioButton>
            <RadioButton value="chaotic" rootColor="#fff" pointColor="#ccc">
              Chaotic
            </RadioButton>
          </RadioGroup>
          <h3>DENSITY:</h3>

          <Slider onChange={ this.onDensityChange } min={5} max={8} step={1} value={this.state.density} marks={{ 5: '1',  6: '2',  7: '3',  8: '4',  }} />
          <div className="bossy-link">
          <a target="_blank" href="https://www.youtube.com/watch?v=Say8M65PRG0">..also check out Bossysuits [here]. 👩‍💼 </a>
          <a href="https://localhost96.net">{'© by Konrad Krawczyk, ' + new Date().getFullYear()}</a>
          </div>
      </div>
        <div className="App-content">
          <P5Wrapper onEnd={this.onEnd} sketch={sketch} mode={this.state.mode} density={this.state.density} colora={this.state.color_a}/>
        </div>
      </div>
    );
  }
}

export default App;
