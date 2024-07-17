import axios from "axios";

const API_URL =
    "https://www.thesportsdb.com/api/v2/json/3/list/teams/English_Premier_League";

export const fetchTeams = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.teams;
    } catch (error) {
        console.log("Error fetching teams:", error);
        return [];
    }
};
