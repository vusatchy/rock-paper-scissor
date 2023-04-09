const ACTIONS = {
    UPDATE_USER_CHOICE: "UpdateUserChoice",
    PLAY_AGAIN: "PlayAgain",
    SYNC_SCORE: "SyncScore",
    CHANGE_GAME: "ChangeGame"
}

const of = type => (payload) => ({type, payload});

const updateUserChoice = of(ACTIONS.UPDATE_USER_CHOICE);

const playAgain = of(ACTIONS.PLAY_AGAIN);

const syncScore = of(ACTIONS.SYNC_SCORE);

const changeGame = of(ACTIONS.CHANGE_GAME);

export {
    updateUserChoice,
    playAgain,
    syncScore,
    changeGame
}
export default ACTIONS
