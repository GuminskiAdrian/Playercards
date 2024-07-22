import { PlayerData } from "../interfaces";

const PlayerDataCard: React.FC<PlayerData> = ({
    idPlayer,
    strNationality,
    dateBorn,
    strBirthLocation,
    strNumber,
    strSigned,
    strWage,
    strHeight,
    strWeight,
}) => {
    return (
        <div className="playerDataCard">
            <p>Nationality: {strNationality}</p>
            <p>Born in: {dateBorn}</p>
            <p>Place of birth: {strBirthLocation}</p>
            <p>Player number: {strNumber}</p>
            <p>Signed for: {strSigned}</p>
            <p>Current wage: {strWage}</p>
            <p>Player Height: {strHeight}</p>
            <p>Player weight: {strWeight}</p>
        </div>
    );
};

export default PlayerDataCard;
