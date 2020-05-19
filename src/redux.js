import { createStore, /*combineReducers, /* applyMiddleware*/ } from 'redux'
import { connect } from 'react-redux'
import debounce from 'debounce';
import pic from './profile.svg'
import testVals from './leaderboardValues'

const TOGGLE_DASHBOARD_MENU = "TOGGLE_DASHBOARD_MENU";
const UPDATE_WINDOW_SIZE = "UPDATE_WINDOW_SIZE"

const toggleDashboardMenu = ( isOpen ) => 
({type: TOGGLE_DASHBOARD_MENU, isOpen})

const updateWindowSize = ( newWidth ) => 
({type: UPDATE_WINDOW_SIZE, newWidth})

const defaultState = {
    dashboardMenuOpen: typeof window === 'object' ? window.innerWidth : null,
    window: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    user: {
      name: "Lauren O'Reilly",
      pic,
      notifications: ["new message"]
    },
    data: {
      leaderboards: {
        local: testVals
      }
    }
}

const rootReducer = (state = defaultState, action) => {
  switch(action.type){

    case TOGGLE_DASHBOARD_MENU:
      return {
        ...state,
        dashboardMenuOpen: action.isOpen
      }

    case UPDATE_WINDOW_SIZE:
      return {
        ...state,
        window: {
          width: action.newWidth,
          height: action.newHeight
        }
      }

    default:
      return state;
  }
}

const reduxStore = createStore(rootReducer);

const mapStateToProps = (state) => ({
    window: state.window,
    dashboardMenuOpen: state.dashboardMenuOpen,
    user: state.user,
    data: state.data,
});

const mapDispatchToProps = (dispatch) =>({
    toggleDashboardMenu: ( isOpen ) => dispatch( toggleDashboardMenu(isOpen) ),
});

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);

//window resize
const handleResize = debounce(() => {
  reduxStore.dispatch( updateWindowSize(window.innerWidth, window.innerHeight) );
}, 200)
window.addEventListener("resize", handleResize)

export {reduxStore, reduxConnector}