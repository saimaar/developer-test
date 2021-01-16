import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        wishList: [...state.wishList, action.payload],
      };
    case DELETE_ITEM:
      let filteredWishList = state.wishList.filter(wish => wish !== action.payload)
      return {
        wishList: filteredWishList,
      };
    default:
      return {
        wishList: [],
      };
  }
};

export default reducer;
