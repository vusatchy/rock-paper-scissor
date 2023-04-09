import "./ScoreTable.css"
import {getLogoImage} from "../../config/config";

const ScoreTable = (props) => {
    return <div className="score-wrapper">
        <img src={getLogoImage(props.game)} className="logo-img"/>
        <div className="score-cell">
            <div className="score-cell-title">SCORE</div>
            <div className="score-cell-score">{props.score}</div>
        </div>
    </div>
}

export default ScoreTable;
