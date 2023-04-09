import "./Footer.css"
import {useState} from "react";
import RuleModal from "./modal/RuleModal";
import {connect} from "react-redux";
import {changeGame} from "../../state/actions";

const Footer = (props) => {
    const {nextGame} = props;
    const [isAddModal, setIsAddModal] = useState(false);
    return <div className="rules-button-wrapper">
        <button id="rules-button" onClick={() => setIsAddModal(true)}>RULES</button>
        {
            isAddModal ? <RuleModal close={() => setIsAddModal(false)}/> : <></>
        }
        <button id="change-game-button" onClick={nextGame}>CHANGE GAME</button>
    </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        nextGame: () => dispatch(changeGame()),
    }
}

export default connect(null, mapDispatchToProps)(Footer);
