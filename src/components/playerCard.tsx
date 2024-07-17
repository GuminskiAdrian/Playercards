import React from "react";
import { Player } from "../interfaces";
import "../styles/playerCard.css";

const PlayerCard: React.FC<Player> = ({
    idPlayer,
    strPlayer,
    strPosition,
    strThumb,
}) => {
    return (
        <div className="player">
            <img src={strThumb} alt={`${strThumb}${strPlayer}`} />
            <p key={idPlayer}>
                {strPlayer} - {strPosition}
            </p>
        </div>
    );
};

export default PlayerCard;
