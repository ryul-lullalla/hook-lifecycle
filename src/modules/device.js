const DESKTOP = 'device/INCREMENT';
const TABLET = 'device/TABLET';
const MOBILE = 'device/MOBILE';

export const desktop = data => {
  return { type: DESKTOP };
};
export const tablet = () => ({ type: TABLET });

export const mobile = () => ({ type: MOBILE });

const initialState = { device: null };

const deviceStore = (state = initialState, action) => {
  switch (action.type) {
    case DESKTOP:
      return {
        device: 'DESKTOP',
      };
    case TABLET:
      return {
        device: 'TABLET',
      };
    case MOBILE:
      return {
        device: 'MOBILE',
      };
    default:
      return state;
  }
};

export default deviceStore;
