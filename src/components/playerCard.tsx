import React, { useEffect, useState } from "react";
import { Player, PlayerData } from "../interfaces";
import PlayerDataCard from "./playerDataCard";
import "../styles/playerCard.css";
import { fetchPlayerData } from "../services/api";

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

    const [playerData, setPlayerData] = useState<PlayerData | null>(null);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchPlayerData(idPlayer);
            setPlayerData(data);
        };

        getData();
    }, [idPlayer]);

    return (
        <div className={`player ${positionClass}`}>
            <img src={strThumb} alt={`${strThumb}${strPlayer}`} />
            <p key={idPlayer}>
                {strPlayer} - {strPosition}
            </p>
            {!playerData ? (<p>Loading...</p>) : (
            <PlayerDataCard
                key={idPlayer}
                idPlayer={idPlayer}
                strNationality={playerData.strNationality}
                dateBorn={playerData.dateBorn}
                strBirthLocation={playerData.strBirthLocation}
                strNumber={playerData.strNumber}
                strSigned={playerData.strSigned}
                strWage={playerData.strWage}
                strHeight={playerData.strHeight}
                strWeight={playerData.strWeight}
            />
            )}
        </div>
    );
};

export default PlayerCard;
