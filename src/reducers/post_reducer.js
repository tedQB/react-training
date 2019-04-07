const postReducer = function(
  state = { list: [{ id: "1", title: "你好！" }] },
  action
) {
  switch (action.type) {
    case "LOAD_POST":
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
};
export default postReducer;
