import React, { useEffect, useState } from "react";
import { fetchTeams } from "./services/api";
import TeamCard from "./components/teamCard";
import './App.css';
import { Team } from './interfaces';

const App: React.FC = () => {
    const [teams, setTeams] = useState<Team[]>([]);

    useEffect(() => {
        const getTeams = async () => {
            const data = await fetchTeams();
            setTeams(data);
        };

        getTeams();
    }, []);

    return (
        <div className="App">
            <h1>Premier League Teams</h1>
            <div className="teamGrid">
                {teams.map((team) => (
                    <TeamCard
                        key={team.idTeam}
                        idTeam={team.idTeam}
                        strTeam={team.strTeam}
                        strBadge={team.strBadge}
                    />
                ))}
            </div>
        </div>
    );
};
export default App;
