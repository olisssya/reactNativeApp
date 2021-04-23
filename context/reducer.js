export const reducer = (state, action) => {
    switch (action.type) {
      case 'LOAD_HEROES':
        return { ...state, heroes: action.payload }

    
      default:
        return state
    }
  }
  
