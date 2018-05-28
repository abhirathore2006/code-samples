import React from 'react';
import { ActiveOrNull } from '../shared';
import { DEVICE_IMG_BSEE } from '../../constants/AppConstants';
export const DeviceCard = props => {
  let { name, location, image, active, onClick } = props;
  return (
    <div className={`device-card ${active ? 'active' : ''}`} onClick={e => onClick(e, props)}>
      <img className="image" alt={name} src={`${DEVICE_IMG_BSEE}/${image}`} />
      <div className="content">
        <div className="card-header">{name}</div>
        <div className="card-sub-header">
          <span>In</span> {location}
        </div>
      </div>
      <ActiveOrNull active>
        <i className="chevron right" />
      </ActiveOrNull>
    </div>
  );
};
