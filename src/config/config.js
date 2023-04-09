import paperImg from "../images/icon-paper.svg";
import scissorsImg from "../images/icon-scissors.svg";
import rockImg from "../images/icon-rock.svg";
import lizardImg from "../images/icon-lizard.svg";
import spockImg from "../images/icon-spock.svg";
import triangleImage from "../images/bg-triangle.svg";
import pentagonImage from "../images/bg-pentagon.svg"
import triangleRulesImage from "../images/image-rules.svg"
import pentagonRulesImage from "../images/image-rules-bonus.svg"
import triangleLogoImage from "../images/logo.svg"
import pentagonLogoImage from "../images/logo-bonus.svg"

const gameConfig = {
    rsp: {
        paper: {
            img: paperImg,
            right: 220,
            bottom: 250,
            background: "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
            beats: ["rock"]
        },
        scissors: {
            img: scissorsImg,
            right: -10,
            bottom: 250,
            background: "linear-gradient(hsl(40, 84%, 53%), hsl(39, 89%, 49%))",
            beats: ["paper"]
        },
        rock: {
            img: rockImg,
            right: 110,
            bottom: 50,
            background: "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
            beats: ["scissors"]
        }
    },
    rspls: {
        paper: {
            img: paperImg,
            right: -70,
            bottom: 150,
            background: "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
            beats: ["rock", "spock"]
        },
        scissors: {
            img: scissorsImg,
            right: 100,
            bottom: 270,
            background: "linear-gradient(hsl(40, 84%, 53%), hsl(39, 89%, 49%))",
            beats: ["paper", "lizard"]
        },
        rock: {
            img: rockImg,
            right: -10,
            bottom: -50,
            background: "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
            beats: ["scissors", "lizard"]
        },
        lizard: {
            img: lizardImg,
            right: 200,
            bottom: -50,
            background: "linear-gradient(hsl(261, 72%, 63%), hsl(261, 73%, 60%))",
            beats: ["paper", "spock"]
        },
        spock: {
            img: spockImg,
            right: 270,
            bottom: 150,
            background: "linear-gradient(hsl(189, 58%, 57%), hsl(189, 59%, 53%))",
            beats: ["scissors", "rock"]
        }
    }
}

const gameImgConfig = {
    rsp: {
        background: triangleImage,
        logo: triangleLogoImage,
        rules: triangleRulesImage
    },
    rspls: {
        background: pentagonImage,
        logo: pentagonLogoImage,
        rules: pentagonRulesImage
    }
}

const getBackgroundImage = (game) => {
    return gameImgConfig[game].background;
}

const getLogoImage = (game) => {
    return gameImgConfig[game].logo;
}

const getRulesImage = (game) => {
    return gameImgConfig[game].rules;
}

const getUnit = (game, type) => {

    return {...gameConfig[game][type]};
}

const getGameUnits = (game) => {
    return {...gameConfig[game]}
}

const getNextGame = (game) => {
    const games = Object.keys(gameConfig);
    const index = games.indexOf(game);
    const size = games.length;
    const nextGameIndex = index + 1 >= size ? 0 : index + 1;
    return games[nextGameIndex];
}

const getRandomUnit = (game) => {
    const items = Object.keys(gameConfig[game]);
    return items[Math.floor(Math.random() * items.length)]
}

const getWinner = (game, userUnit, computerUnit) => {
    if (getUnit(game, userUnit).beats.includes(computerUnit)) {
        return RESULTS.USER_WINNER;
    } else if (getUnit(game, computerUnit).beats.includes(userUnit)) {
        return RESULTS.COMPUTER_WINNER;
    } else {
        return RESULTS.DRAW;
    }

}

const RESULTS = {
    USER_WINNER: "USER",
    COMPUTER_WINNER: "COMPUTER",
    DRAW: "DRAW"
}

const GAMES = {
    RSP: "rsp",
    RSPLS: "rspls"
}


const addScore = (game, userUnit, computerUnit) => {
    const winner = getWinner(game, userUnit, computerUnit);
    switch (winner) {
        case RESULTS.USER_WINNER:
            return 1;
        case RESULTS.COMPUTER_WINNER:
            return -1;
        default:
            return 0;
    }
}

export {
    gameConfig,
    addScore,
    getUnit,
    getRandomUnit,
    getWinner,
    getGameUnits,
    getBackgroundImage,
    getRulesImage,
    getLogoImage,
    getNextGame,
    RESULTS,
    GAMES
}
