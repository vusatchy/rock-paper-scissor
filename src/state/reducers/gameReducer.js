import ACTIONS, {syncScore} from "../actions";
import {addScore, GAMES, getRandomUnit, getWinner, getNextGame} from "../../config/config";

const defaultGameData = {
    game: GAMES.RSPLS,
    userChoice: null,
    computerChoice: null,
    winner: null,
    score: 0
}

const gameData = (gameData = defaultGameData, {type, payload}) => {
    switch (type) {
        case ACTIONS.UPDATE_USER_CHOICE:
            const computerChoice = getRandomUnit(gameData.game);
            return {
                game: gameData.game,
                userChoice: payload,
                computerChoice: computerChoice,
                winner: getWinner(gameData.game, payload, computerChoice),
                score: gameData.score
            };
        case ACTIONS.PLAY_AGAIN:
            return {
                game: gameData.game,
                userChoice: null,
                computerChoice: null,
                winner: null,
                score: gameData.score
            };
        case ACTIONS.SYNC_SCORE:
            return {
                ...gameData,
                score: gameData.score + addScore(gameData.game, gameData.userChoice, gameData.computerChoice)
            };
        case ACTIONS.CHANGE_GAME:
            return {
                game: getNextGame(gameData.game),
                userChoice: null,
                computerChoice: null,
                winner: null,
                score: 0
            };
        default:
            return gameData;
    }
}


export {
    gameData
}
