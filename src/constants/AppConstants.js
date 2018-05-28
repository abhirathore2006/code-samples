export const MODES = {
  MORNING: 'MORNING',
  DAY: 'DAY',
  NIGHT: 'NIGHT'
};
export const SHADES = {
  'RADICAL-RED': 'radical-red',
  'MEDIUM-PURPLE': 'medium-purple',
  'PICTON-BLUE': 'picton-blue',
  'AZURE-RADIANCE': 'azure-radiance',
  'EAST-SIDE': 'east-side'
};
export const DEVICE_STATE = {
  ON: 'on',
  OFF: 'off'
};
export const DEVICE_IMG_BSEE = `${process.env.PUBLIC_URL}/assets/images`;
export const DEVICES = [
  {
    name: 'Bed Lamp',
    location: 'Bedroom',
    image: 'lamp.png'
  },
  {
    name: 'Noria AC',
    location: 'Bedroom',
    image: 'ac.png'
  },
  {
    name: 'Door Lock',
    location: 'Home Office',
    image: 'lock.png'
  },
  {
    name: 'LG TV',
    location: 'living Room',
    image: 'tv.png'
  },
  {
    name: 'Thermostat',
    location: 'Bedroom',
    image: 'thermostat.png'
  }
];
