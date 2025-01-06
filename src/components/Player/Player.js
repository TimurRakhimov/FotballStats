import React, {useState, useEffect} from 'react'; 
import './Player.css';

function Player({player}) {

    const calculateAge = (dateOfBirth) => {
        const birthDate = new Date(dateOfBirth);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        // Adjust age if the birth month/day hasn't occurred yet
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      };

      return (
        <div className="player-card">
          <div className="card-background">
            <div className="player-info">
              <h3 className="player-name">{player.name}</h3>
              <p className="player-detail"><strong>Position:</strong> {player.position}</p>
              <p className="player-detail"><strong>Nationality:</strong> {player.nationality}</p>
              <p className="player-detail"><strong>Age:</strong> {calculateAge(player.dateOfBirth)}</p>
              <p className="player-detail"><strong>Shirt Number:</strong> {player.shirtNumber}</p>
            </div>
          </div>
        </div>
      );
}

export default Player;