import React from "react";
import { Team } from '../interfaces';

const TeamCard: React.FC<Team> = ({
    idTeam,
    strTeam,
    strBadge,
}) => {
    return (
        <div className="teamCard">
            <img src={strBadge} alt={strTeam} />
            <h2>{strTeam}</h2>
        </div>
    );
};

export default TeamCard;
