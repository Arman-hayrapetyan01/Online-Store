const categoryInfo = [];
const categoryReducer = (state = categoryInfo, action) => {
  switch (action.type) {
    case "CATEGORY_INFO":
      return {
        info: action.payload,
      };
    default:
      return state;
  }
};
export default categoryReducer;
