import './App.css';
import GameManager from "./game/manager/GameManager";
import {Provider} from "react-redux";
import store from "./state/store";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <GameManager/>
            </Provider>
        </div>
    );
}

export default App;
