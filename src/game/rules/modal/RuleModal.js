import "./RuleModal.css"
import {getRulesImage} from "../../../config/config";
import {connect} from "react-redux";
import closeImg from "../../../images/icon-close.svg"

const RuleModal = (props) => {
    const {close, game} = props;
    return <div className="modal-wrapper">
        <div className="modal-wrapper-footer">
            <div className="modal-wrapper-title">RULES</div>
            <img src={closeImg} id="modal-wrapper-close-button" onClick={close}/>
        </div>
        <div className="img-wrapper">
            <img className="rules-img" src={getRulesImage(game)}/>
        </div>
    </div>
}

const mapStateToProps = (state) => {
    const {game} = state.gameData;
    return {
        game: game
    }
}

export default connect(mapStateToProps, null)(RuleModal);
