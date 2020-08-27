  export const send = (message) => ({
    type: "SEND",
    payload: message
  });
  
  export const delete_ = (index) => ({
    type: "DELETE",
    payload: index
  });
  
  export const setInputValue = (input) => {
    return {
      type: "SET_INPUT_VALUE",
      payload: input
    };
  };

  export const showOptions = () => {
    return {
      type: "SHOW_OPTIONS"
    };
  };    