import axios from "axios";

const TeamsFromLeague_URL =
    "https://www.thesportsdb.com/api/v2/json/3/list/teams/English_Premier_League";
const PlayerByClubID_URL =
    "https://www.thesportsdb.com/api/v2/json/3/list/players/";
const PlayerDataByID_URL =
    "https://www.thesportsdb.com/api/v2/json/3/lookup/player/";

export const fetchTeams = async () => {
    try {
        const response = await axios.get(TeamsFromLeague_URL);
        return response.data.teams;
    } catch (error) {
        console.log("Error fetching teams:", error);
        return [];
    }
};

export const fetchPlayers = async (teamID: string) => {
    try {
        const response = await axios.get(`${PlayerByClubID_URL}${teamID}`);
        return response.data.players;
    } catch (error) {
        console.log("Error fetching teams:", error);
        return [];
    }
};

export const fetchPlayerData = async (PlayerID: string) => {
    try {
        const response = await axios.get(`${PlayerDataByID_URL}${PlayerID}`);
        return response.data.players[0];
    } catch (error) {
        console.log("Error fetching teams:", error);
        return [];
    }
};
