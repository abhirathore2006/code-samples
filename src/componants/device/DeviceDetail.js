import React from 'react';
import Knob from 'react-canvas-knob';
import { MODES, SHADES } from '../../constants/AppConstants';

export class DeviceDetail extends React.Component {
  getModeClass = mode => {
    return mode === this.props.mode ? 'mode active' : 'mode';
  };
  getShadeClass = shade => {
    const baseClass = `shade  bg-${shade}`;
    return shade === this.props.shade ? `${baseClass} active tick-white ` : baseClass;
  };

  getShadeProps = shade => {
    return {
      className: this.getShadeClass(shade),
      onClick: this.props.updateShade.bind(this, shade)
    };
  };
  render() {
    return (
      <div className="main">
        <div className="header">
          Devices
          <i className="plus-dark add-device" />
        </div>
        <div className="device-detail">
          <div className="switch right-floated" />
          Bed Lamp
        </div>
        <div className="settings">
          <div className="head fix-size">Shades</div>

          {this.props.mq.mobile ? (
            <div>
              <div className="shades">
                <div {...this.getShadeProps(SHADES['RADICAL-RED'])} />
                <div {...this.getShadeProps(SHADES['MEDIUM-PURPLE'])} />
                <div {...this.getShadeProps(SHADES['PICTON-BLUE'])} />
              </div>
              <div className="shades">
                <div {...this.getShadeProps(SHADES['AZURE-RADIANCE'])} />
                <div {...this.getShadeProps(SHADES['EAST-SIDE'])} />
                <div className="shade" />
              </div>
            </div>
          ) : (
            <div className="shades">
              <div {...this.getShadeProps(SHADES['RADICAL-RED'])} />
              <div {...this.getShadeProps(SHADES['MEDIUM-PURPLE'])} />
              <div {...this.getShadeProps(SHADES['PICTON-BLUE'])} />
              <div {...this.getShadeProps(SHADES['AZURE-RADIANCE'])} />
              <div {...this.getShadeProps(SHADES['EAST-SIDE'])} />
            </div>
          )}
        </div>
        <div className="settings">
          <div className="head">Modes</div>
          <div className="modes">
            <div className={this.getModeClass(MODES.MORNING)} onClick={this.props.updateMode.bind(this, MODES.MORNING)}>
              <i className="morning-white icon" />
              <div className="title">Morning</div>
              <div className="intensity">50%</div>
              <i className="tick-white icon" />
            </div>
            <div className={this.getModeClass(MODES.DAY)} onClick={this.props.updateMode.bind(this, MODES.DAY)}>
              <i className="day-dark icon" />
              <div className="title">Day</div>
              <div className="intensity">30%</div>
              <i className="tick-white-light icon" />
            </div>
            <div className={this.getModeClass(MODES.NIGHT)} onClick={this.props.updateMode.bind(this, MODES.NIGHT)}>
              <i className="night-dark icon" />
              <div className="title">Night</div>
              <div className="intensity">100%</div>
              <i className="tick-white-light icon" />
            </div>
          </div>
        </div>
        <div className="settings">
          <div className="head fix-size">Intensity</div>
          <div className="knob">
            <Knob
              value={this.props.intensity}
              min={0}
              max={100}
              angleArc={180}
              angleOffset={-90}
              thickness={0.05}
              fgColor={'#AC6DFF'}
              bgColor={'#E5E5E5'}
              class="knob-cont"
              canvasClassName="knob-canvas"
              width={this.props.mq.mobile ? 155 : 260}
              onChange={this.props.updateIntensity}
            />
          </div>
        </div>
      </div>
    );
  }
}
