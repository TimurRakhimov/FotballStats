import React from "react";

import Player from "../Player/Player"; // Assuming Player component is in the same directory
import "./PlayerList.css";

function PlayerList({ squad }) {
  // Helper function to group players by position
  const getGroup = (position) => {
    let group = '';
    if (['Defence', 'Left-Back', 'Right-Back', 'Centre-Back'].includes(position)) {
        group = 'Defender';
    } else if (['Midfield', 'Defensive Midfield', 'Attacking Midfield', 'Central Midfield'].includes(position)) {
        group = 'Midfielder';
    } else if (position === 'Goalkeeper') {
        group = 'Goalkeeper';
    } else if (['Offence', 'Centre-Forward', 'Left Winger', 'Right Winger'].includes(position)) {
        group = 'Forward';
    }
    return group;
    };
  const groupByPosition = (players) => {
    return players.reduce((acc, player) => {
        
        const position = getGroup(player.position);

        if (!acc[position]) {
        acc[position] = [];
        }
        acc[position].push(player);
        return acc;
    }, {});
  };

  const groupedPlayers = groupByPosition(squad);

  return (
    <div className="player-list">
      {Object.keys(groupedPlayers).map((position) => (
        <div key={position} className="position-section">
          <h2 className="position-title">
            {position}
          </h2>
          <div className="player-cards-container">
            {groupedPlayers[position].map((player) => (
              <Player key={player.id} player={player} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlayerList;
