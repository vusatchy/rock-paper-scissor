import "./ResultField.css"
import GameCell from "../../cell/GameCell";
import {RESULTS} from "../../../config/config";
import {connect} from "react-redux";
import {playAgain, syncScore} from "../../../state/actions";
import {useState} from "react";

const getTitle = (winner) => {
    if (winner === RESULTS.USER_WINNER) {
        return "YOU WIN";
    } else if (winner === RESULTS.COMPUTER_WINNER) {
        return "YOU LOSE";
    } else {
        return "DRAW"
    }
}

const delayTime = 500;

const STATES = {
    LOADING: "loading",
    LOADED: "loaded",
    PLAY_AGAIN: "play_again"
}

const computerCard = (state, computerChoice, game, winner) => {
    return <div>
        <div className="result-field-title">THE HOUSE PICKED</div>
        <GameCell key={computerChoice}
                  type={computerChoice}
                  height={350}
                  width={350}
                  overrideRight={0}
                  overrideBottom={0}
                  game={game}
                  highlight={winner === RESULTS.COMPUTER_WINNER && state !== STATES.LOADING}/>
    </div>
}

const emptyCirce = () => {
    return <div className="empty-circle-wrapper">
        <div className="empty-circle">
        </div>
    </div>
}


const ResultField = (props) => {
    const {userChoice, computerChoice, winner, playAgain, game, syncScore} = props;
    const [state, setState] = useState(STATES.LOADING);
    if (state === STATES.LOADING) {
        setTimeout(() => {
            setState(STATES.LOADED)
        }, delayTime)
    } else if (state === STATES.LOADED) {
        syncScore();
        setTimeout(() => {
            setState(STATES.PLAY_AGAIN)
        }, delayTime)
    }

    return <div className="result-field-wrapper">
        <div>
            <div className="result-field-title">YOU PICKED</div>
            <GameCell key={userChoice}
                      type={userChoice}
                      height={350}
                      width={350}
                      overrideRight={950}
                      overrideBottom={0}
                      game={game}
                      highlight={winner === RESULTS.USER_WINNER && state !== STATES.LOADING}/>
        </div>
        <div className={state === STATES.PLAY_AGAIN ? "play-again-wrapper" : "play-again-wrapper not-display"}>
            <div className="play-again-button-title">{getTitle(winner)}</div>
            <button className={winner === RESULTS.COMPUTER_WINNER ? "play-again-button red" : "play-again-button"}
                    onClick={playAgain}>PLAY AGAIN
            </button>
        </div>
        {
            state === STATES.LOADING
                ? emptyCirce()
                : computerCard(state, computerChoice, game, winner)
        }
    </div>
}

const mapStateToProps = (state) => {
    const {userChoice, computerChoice, winner, game} = state.gameData;
    return {
        game: game,
        userChoice: userChoice,
        computerChoice: computerChoice,
        winner: winner
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playAgain: () => dispatch(playAgain()),
        syncScore: () => dispatch(syncScore())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultField);
