// project imports
import config from 'config';

// action - state management
import * as actionTypes from './actions';

const initialTheme = localStorage.getItem('themeChange');
const initialDir = localStorage.getItem('dirChange');
export const initialState = {
    isOpen: [], // for active default menu
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    themeChange: initialTheme === null ? 'light' : initialTheme,
    dirChange: initialDir === null ? false : initialDir,
    opened: true
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state = initialState, action) => {
    let id;
    switch (action.type) {
        case actionTypes.MENU_OPEN:
            id = action.id;
            return {
                ...state,
                isOpen: [id]
            };
        case actionTypes.SET_MENU:
            return {
                ...state,
                opened: action.opened
            };
        case actionTypes.SET_FONT_FAMILY:
            return {
                ...state,
                fontFamily: action.fontFamily
            };
        case actionTypes.SET_BORDER_RADIUS:
            return {
                ...state,
                borderRadius: action.borderRadius
            };
        case actionTypes.SET_THEMING:
            return {
                ...state,
                themeChange: action.themeChange
            };
        case actionTypes.DIR_CHANGE:
            return {
                ...state,
                dirChange: action.dirChange
            };
        default:
            return state;
    }
};

export default customizationReducer;
