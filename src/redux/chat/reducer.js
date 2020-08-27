//Reacciona a la acción que se está realizando/ejecutando en el momento y se le conocen como funciones puras

const INITIAL_STATE = {
    messages:[],
    inputMessage:""
};

  export const chatReducer = (previousState = INITIAL_STATE, action) => {

    switch (action.type) {
      case "SEND":
        return { ...previousState, messages:[...previousState.messages, previousState.inputMessage]};
      case "SET_INPUT_VALUE":
        return { ...previousState, inputMessage: action.payload};
      case "TOGGLE_CART":
        return { ...previousState};
      default:
        return previousState;
    }

  };
  
  //arreglo.find(elemento => expresion ); regresa el elemento que coincida con la expresión dada
  