import React, { useEffect, useState } from "react";
import { Team, Player } from "../interfaces";
import { fetchPlayers } from "../services/api";
import "../styles/teamCard.css";
import PlayerCard from "./playerCard";

const TeamCard: React.FC<Team> = ({ idTeam, strTeam, strBadge }) => {
    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        const getPlayer = async () => {
            const data = await fetchPlayers(idTeam);
            setPlayers(data);
        };

        getPlayer();
    }, [idTeam]);

    return (
        <div className="teamCard">
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
