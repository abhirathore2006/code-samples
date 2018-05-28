import React from 'react';
import { mediaQuery } from 'react-mediaquery-props';
import { MODES, SHADES, DEVICES } from '../constants/AppConstants';
import { DeviceCard, DeviceDetail } from '../componants/device';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: 1, intensity: 40, mode: MODES.MORNING, shade: SHADES['RADICAL-RED'] };
  }

  updateState = newState => this.setState(newState);

  setDeviceActive = (event, deviceProps) => {
    this.updateState({ active: deviceProps.index });
  };

  updateMode = (mode, event) => this.updateState({ mode });

  updateShade = (shade, event) => this.updateState({ shade });

  updateIntensity = intensity => this.updateState({ intensity });

  render() {
    let { mode, shade, intensity } = this.state;
    return (
      <div className="app">
        <div className="top-bar">
          <i className="back-white back" />
          {this.props.mq.mobile ? <i className="plus-dark add-device" /> : null}
        </div>
        <div className="conatiner">
          <div className="sidebar">
            {DEVICES.map((device, index) => (
              <DeviceCard
                key={`device-${index}`}
                {...device}
                active={this.state.active === index}
                index={index}
                onClick={this.setDeviceActive}
              />
            ))}
          </div>
          <DeviceDetail
            {...this.props}
            updateIntensity={this.updateIntensity}
            updateMode={this.updateMode}
            updateShade={this.updateShade}
            mode={mode}
            shade={shade}
            intensity={intensity}
          />
        </div>
      </div>
    );
  }
}

export const AppWithMedia = mediaQuery(App, {
  mobile: 'only screen and (max-width:767px)',
  tablet: 'only screen and (min-width: 768px)  and (max-width:1023px)'
});
