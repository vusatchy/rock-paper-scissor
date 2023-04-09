import "./GameCell.css"
import {connect} from "react-redux";
import {updateUserChoice} from "../../state/actions";
import {getUnit} from "../../config/config";

const boxShadow = "0 -5px 0px 0px inset rgba(0, 0, 0, .3)"

const additionalShadow = " , 0 0 0 100px rgba(255, 255, 255, 0.09), " +
    "0 0 0 200px rgba(255, 255, 255, 0.06), " +
    "0 0 0 300px rgba(255, 255, 255, 0.03)"

const GameCell = (props) => {
    const {updateChoice, type, height, width, overrideRight, overrideBottom, highlight, game} = props;
    const {right, bottom, background, img} = getUnit(game, type);
    const isOverride = overrideRight !== undefined;

    const onClick = () => {
        if (isOverride) {
            return;
        }
        updateChoice(type);
    }

    const cssVars = {
        "--right-position": (overrideRight === undefined ? right : overrideRight) + "px",
        "--bottom-position": (overrideBottom === undefined ? bottom : overrideBottom) + "px",
        "--img-height": (height === undefined ? 150 : height) + "px",
        "--img-width": (width === undefined ? 150 : width) + "px",
        "--background-gradient": background,
        "--box-shadow": highlight ? (boxShadow + additionalShadow) : boxShadow
    }

    return <div style={cssVars} className={isOverride ? "circle-wrapper" : "circle-wrapper hover-able-circle-wrapper"}>
        <div className="middle-circle" onClick={onClick}>
            <img src={img} className="icon-image"/>
        </div>
    </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateChoice: (type) => dispatch(updateUserChoice(type)),
    }
}

export default connect(null, mapDispatchToProps)(GameCell)
