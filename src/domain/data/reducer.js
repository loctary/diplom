import data from '../data.json';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA/SUCCESS':
      return data;
    default:
      return state;
  }
};
