import "./GameCell.css"
import {connect} from "react-redux";
import {updateUserChoice} from "../../state/actions";
import {getUnit} from "../../config/config";

const additionalShadow = " , 0 0 0 100px rgba(255, 255, 255, 0.09), " +
    "0 0 0 200px rgba(255, 255, 255, 0.06), " +
    "0 0 0 300px rgba(255, 255, 255, 0.03)"

const GameCell = (props) => {
    const {updateChoice, type, height, width, overrideRight, overrideBottom, highlight, game} = props;
    const {right, bottom, background, img} = getUnit(game, type);
    const myStyle = {
        right: overrideRight === undefined ? right : overrideRight,
        bottom: overrideBottom === undefined ? bottom : overrideBottom,
        height: height === undefined ? "150px" : height,
        width: width === undefined ? "150px" : width,
        background: background,
        borderRadius: "50%",
        boxShadow: "0 -5px 0px 0px inset rgba(0,0,0,.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute"
    }

    if (highlight) {
        myStyle.boxShadow = myStyle.boxShadow + additionalShadow;
    }

    return <div style={myStyle}>
        <div className="middle-circle" onClick={() => updateChoice(type)}>
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
