import {combineReducers} from "redux";
import {gameData} from "./reducers/gameReducer";

const rootReducer = combineReducers({
        gameData
    }
);

export default rootReducer;
