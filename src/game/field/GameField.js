import "./GameField.css"
import GameCell from "../cell/GameCell";
import {getGameUnits, getBackgroundImage} from "../../config/config";

const GameField = (props) => {
    const {game} = props;

    const myStyle = {
        margin: "auto",
        marginTop: "5%",
        position: "relative",
        height: "350px",
        width: "340px",
        backgroundImage: "url(" + getBackgroundImage(game) + ")",
        backgroundRepeat: "no-repeat"
    }

    return <div style={myStyle}>
        {Object.keys(getGameUnits(game)).map(key => {
            return <GameCell key={key}
                             type={key}
                             game={game}/>
        })}
    </div>
}

export default GameField;
