import ScoreTable from "../score/ScoreTable";
import GameField from "../field/GameField";
import {connect} from "react-redux";
import ResultField from "../field/result/ResultField";
import Footer from "../rules/Footer";

const GameManager = (props) => {
    const {userChoice, score, game, computerChoice} = props;
    return <>
        <ScoreTable game={game} score={score}/>
        {
            userChoice === null ?
                <>
                    <GameField game={game}/>
                    <Footer/>
                </>
                : <ResultField key={userChoice + computerChoice}/>
        }
    </>
}
const mapStateToProps = (state) => {
    const {userChoice, winner, game, score, computerChoice} = state.gameData;
    return {
        score: score,
        game: game,
        userChoice: userChoice,
        computerChoice: computerChoice,
        winner: winner
    }
}

export default connect(mapStateToProps, null)(GameManager)
