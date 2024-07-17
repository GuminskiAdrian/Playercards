import React, { useEffect, useState } from "react";
import { Team, Player } from '../interfaces';
import { fetchPlayers } from "../services/api";

const TeamCard: React.FC<Team> = ({ idTeam, strTeam, strBadge }) => {
    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        const getPlayer = async () => {
            const data = await fetchPlayers(idTeam);
            setPlayers(data);
        }

        getPlayer();
    }, [idTeam]);

    return (
        <div className="teamCard">
            <img src={strBadge} alt={strTeam} />
            <h2>{strTeam}</h2>
            <div className="player-list">
                {players.map((player) => (
                    <p key={player.idPlayer}>{player.strPlayer} - {player.strPosition}</p>
                ))}
            </div>
        </div>
    );
};

export default TeamCard;
