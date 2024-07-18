import React, { useEffect, useState } from "react";
import { Team, Player } from "../interfaces";
import { fetchPlayers } from "../services/api";
import "../styles/teamCard.css";
import PlayerCard from "./playerCard";

const TeamCard: React.FC<Team> = ({ idTeam, strTeam, strBadge }) => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [clickedTeamID, setClickedTeamID] = useState<string | null>(null);

    useEffect(() => {
        const getPlayer = async () => {
            const data = await fetchPlayers(idTeam);
            setPlayers(data);
        };

        getPlayer();
    }, [idTeam]);

    const handleClick = () => {
        setClickedTeamID(clickedTeamID === idTeam ? null : idTeam);
    };

    return (
        <div
            className={`teamCard ${clickedTeamID === idTeam ? "clickedTeamCard" : ""}`}
            onClick={handleClick}>
            <img src={strBadge} alt={strTeam} />
            <h2>{strTeam}</h2>
            <div className="playerList">
                {players.map((player) => (
                    <PlayerCard
                        key={player.idPlayer}
                        idPlayer={player.idPlayer}
                        strPlayer={player.strPlayer}
                        strPosition={player.strPosition}
                        strThumb={player.strThumb}
                    />
                ))}
            </div>
        </div>
    );
};

export default TeamCard;
