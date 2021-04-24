export const reducer = (state, action) => {
    switch (action.type) {
      case 'LOAD_HEROES':
        return { ...state, heroes: action.payload }
        case "SEARCH_HERO":
        return { ...state, heroes: action.payload }
        case "SHOW_HERO":
          const hero = state.heroes.find(el=>el.name===action.payload)
          console.log(hero);
          return { ...state, hero: hero }

    
      default:
        return state
    }
  }
  
