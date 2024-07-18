import React from "react";
import { Player } from "../interfaces";
import "../styles/playerCard.css";

const PlayerCard: React.FC<Player> = ({
    idPlayer,
    strPlayer,
    strPosition,
    strThumb,
}) => {
    const getClassFromPosition = (position: string) => {
        if (position.toLowerCase() === "manager") return "manager";
        if (position.toLowerCase() === "goalkeeper") return "goalkeeper";
        if (position.toLowerCase() === "left-back") return "leftBack";
        if (position.toLowerCase() === "right-back") return "rightBack";
        if (position.toLowerCase().includes("back")) return "back";
        if (position.toLowerCase() === "defender") return "defender";
        if (position.toLowerCase().includes("midfield")) return "midfield";
        if (position.toLowerCase().includes("wing")) return "wing";
        if (position.toLowerCase().includes("forward")) return "forward";
        return "other";
    };

    const positionClass = getClassFromPosition(strPosition);

    return (
        <div className={`player ${positionClass}`}>
            <img src={strThumb} alt={`${strThumb}${strPlayer}`} />
            <p key={idPlayer}>
                {strPlayer} - {strPosition}
            </p>
        </div>
    );
};

export default PlayerCard;
